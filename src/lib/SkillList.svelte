<script lang="ts">
    import Folder from "./Folder.svelte";

    let skills = [
        { name: "Frontend",
            files: [
                {
                    name: "Languages",
                    files: ["HTML", "CSS", "SASS", "JavaScript", "TypeScript"]
                },
                {
                    name: "Technologies",
                    files: ["Angular", "RxJS", "React", "Svelte", "OIDC", "OAuth"]
                }
            ],
        },

        {
            name: "Backend",
            files: [
                {
                    name: "Languages",
                    files: ["C#", "Python", "NodeJs", "Java"]
                },
                {
                    name: "Technologies",
                    files: ["ASP.NET Core", "REST API", "BFF", "IdentityServer", "Flask", "Pandas", 
                            "ExpressJs", "Security", "Scalability", "Performance"]
                }
            ],
        },

        {
            name: "Devops",
            files: ["Docker", "Git", "GitHub", "Azure", "Jenkins", "Jira"]
        },

        {
            name: "Data-access",
            files: ["Postgresql", "Microsoft Sql", "Mysql", "Redis", "MongoDB", "EntityFramework Core", "Dapper", "Inhouse-Dataservice"]
        }
    ]
</script>

<article>
    <Folder name="Skills" expanded={true} showExpandAll={true} files={skills}/>
</article>
