// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		interface Locals {
			userid: string;
		}
		// interface Error {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export interface GithubRepository {
	name: string;
	full_name: string;
	url: string;
	html_url: string;
	created_at: Date;
	updated_at: Date;
	pushed_at: Date;
	language: string;
	score: number;
	description: string;
	stargazers_count: number;
}
