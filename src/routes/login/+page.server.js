import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    redirect(302, '/app/home');
  }
}