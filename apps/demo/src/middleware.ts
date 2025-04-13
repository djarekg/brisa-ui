import type { RequestContext } from 'brisa';

export default function middleware({ headers, route, url }: RequestContext): undefined | Response {
  if (!route) {
    return undefined;
  }

  const cookies = new Bun.CookieMap(headers.get('cookie'));
  const currentUser = cookies.get('currentUser');
  const { pathname = '' } = route;

  if (!currentUser && pathname !== '/login') {
    return new Response('Unauthorized', {
      status: 401,
      headers: {
        Location: new URL('/login', url).toString(),
      },
    });
  }

  return undefined;
}
