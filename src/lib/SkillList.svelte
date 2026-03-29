<script lang="ts">
    import Folder from "./Folder.svelte";

    let skills = [
        {
            name: "Backend",
            files: [
                {
                    name: "Languages",
                    files: ["Go", "C#", "Python", "TypeScript", "Java"]
                },
                {
                    name: "Technologies",
                    files: ["REST API", "gRPC", "ASP.NET Core", "ExpressJs", "BFF", "IdentityServer", "Flask"]
                }
            ],
        },

        {
            name: "Infrastructure",
            files: [
                {
                    name: "Platforms",
                    files: ["Kubernetes", "Docker", "Google Cloud", "Azure", "Aiven"]
                },
                {
                    name: "Messaging & Streaming",
                    files: ["Kafka", "Avro", "Schema Registry"]
                },
                {
                    name: "Observability",
                    files: ["Grafana", "Prometheus"]
                },
                {
                    name: "Tools",
                    files: ["Git", "GitHub", "Jenkins"]
                }
            ],
        },

        {
            name: "Data",
            files: ["PostgreSQL", "MySQL", "Microsoft SQL", "MongoDB", "Redis", "BigQuery", "Elasticsearch", "OpenSearch", "EntityFramework Core", "Dapper"]
        },

        {
            name: "Frontend",
            files: [
                {
                    name: "Languages",
                    files: ["HTML", "CSS", "SASS", "JavaScript", "TypeScript"]
                },
                {
                    name: "Technologies",
                    files: ["Svelte", "React", "Angular", "RxJS", "OIDC", "OAuth"]
                }
            ],
        },

        {
            name: "Systems & OS",
            files: [
                {
                    name: "Operating Systems",
                    files: ["NixOS", "Arch Linux"]
                },
                {
                    name: "Nix Ecosystem",
                    files: ["Nix", "Home Manager", "Flakes", "SOPS"]
                },
                {
                    name: "Tools",
                    files: ["Neovim", "Tmux", "Nginx", "Rust"]
                }
            ]
        },

        {
            name: "AI & Tooling",
            files: ["Claude Code", "OpenCode", "MCP Servers", "LLM Agents"]
        }
    ]
</script>

<article>
    <Folder name="Skills" expanded={true} showExpandAll={true} files={skills}/>
</article>
