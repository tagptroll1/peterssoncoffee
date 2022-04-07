/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	interface Locals {
		userid: string;
	}

	// interface Platform {}

	// interface Session {}

	// interface Stuff {}
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
