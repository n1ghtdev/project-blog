export function postRequest(url, payload) {
  return fetch(url, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'content-type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    body: JSON.stringify({
      id: payload.title.replace(/\s+/g, '-').toLowerCase(),
      title: payload.title,
      description: payload.description,
    }),
  })
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      }
      return Promise.reject(response.statusText);
    })
    .then((response) => response.json());
}
