export default function fetchResponseJSON(path) {
  return fetch(path)
    .then((response) => response.json());
}
