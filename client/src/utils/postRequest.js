export function postRequest(url, payload) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      title: payload.title,
      description: payload.description,
    }),
  });
}
