import { v4 as uuid } from '@lukeed/uuid';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
	const userid = event.cookies.get('userid');
	event.locals.userid = userid ?? uuid();

	const response = await resolve(event);

	if (!userid) {
		event.cookies.set('userid', event.locals.userid, {
			path: '/',
			httpOnly: true
		});
	}

	return response;
};
