export function fetchBlogPosts() {
  return fetch('/api/blog')
    .then((response) => response.json());
}
