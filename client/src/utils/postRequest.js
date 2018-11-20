export function postRequest(url, title, category, description) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      title,
      category,
      description,
    }),
  });
}
