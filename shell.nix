{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs_22
    pnpm
    git
  ];

  shellHook = ''
    echo "peterssoncoffee dev shell — node $(node --version), pnpm $(pnpm --version)"
  '';
}
