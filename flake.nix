{
  description = "Bygg og Bedrag — SvelteKit site, self-hosted with adapter-node";

  inputs.nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";

  outputs =
    { self, nixpkgs }:
    let
      systems = [
        "x86_64-linux"
        "aarch64-linux"
      ];
      forAllSystems = f: nixpkgs.lib.genAttrs systems (system: f nixpkgs.legacyPackages.${system});
    in
    {
      # Build the site: `nix build .#default` -> result/ holds the adapter-node server.
      packages = forAllSystems (pkgs: {
        default = pkgs.stdenv.mkDerivation (finalAttrs: {
          pname = "peterssoncoffee";
          version = "0.0.1";
          src = ./.;

          nativeBuildInputs = [
            pkgs.nodejs_22
            pkgs.pnpm
            pkgs.pnpmConfigHook
          ];

          # Reproducible offline pnpm store.
          # First build will fail and print the correct `hash` — paste it in here.
          pnpmDeps = pkgs.fetchPnpmDeps {
            inherit (finalAttrs) pname version src;
            fetcherVersion = 3;
            hash = "sha256-eiXq/IUkKVtJQc4RIVy/1dD4vIre2qikmXa95MAy1Yw=";
          };

          buildPhase = ''
            runHook preBuild
            pnpm run build
            runHook postBuild
          '';

          # adapter-node bundles its deps, so `node $out` runs standalone.
          installPhase = ''
            runHook preInstall
            mkdir -p $out
            cp -r build/* $out/
            runHook postInstall
          '';
        });
      });

      # NixOS module: import into your config, then `services.byggogbedrag.enable = true;`.
      nixosModules.default =
        {
          config,
          lib,
          pkgs,
          ...
        }:
        let
          cfg = config.services.byggogbedrag;
        in
        {
          options.services.byggogbedrag = {
            enable = lib.mkEnableOption "Bygg og Bedrag nettsted";
            package = lib.mkOption {
              type = lib.types.package;
              default = self.packages.${pkgs.system}.default;
              description = "Built site package.";
            };
            host = lib.mkOption {
              type = lib.types.str;
              default = "127.0.0.1";
              description = "Bind address (put a reverse proxy in front).";
            };
            port = lib.mkOption {
              type = lib.types.port;
              default = 3000;
            };
            origin = lib.mkOption {
              type = lib.types.str;
              example = "https://byggogbedrag.no";
              description = "Public origin. Required so form POSTs pass adapter-node's CSRF check.";
            };
          };

          config = lib.mkIf cfg.enable {
            systemd.services.byggogbedrag = {
              description = "Bygg og Bedrag (SvelteKit, adapter-node)";
              wantedBy = [ "multi-user.target" ];
              after = [ "network.target" ];
              environment = {
                NODE_ENV = "production";
                HOST = cfg.host;
                PORT = toString cfg.port;
                ORIGIN = cfg.origin;
              };
              serviceConfig = {
                ExecStart = "${pkgs.nodejs_22}/bin/node ${cfg.package}";
                Restart = "on-failure";
                DynamicUser = true;
                # hardening
                NoNewPrivileges = true;
                ProtectSystem = "strict";
                ProtectHome = true;
                PrivateTmp = true;
                RestrictAddressFamilies = [
                  "AF_INET"
                  "AF_INET6"
                ];
              };
            };
          };
        };

      # `nix develop` — mirrors shell.nix for dev.
      devShells = forAllSystems (pkgs: {
        default = pkgs.mkShell {
          packages = [
            pkgs.nodejs_22
            pkgs.pnpm
            pkgs.git
          ];
        };
      });
    };
}
