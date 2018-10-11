export function fetchBlogPosts() {
  return fetch('/api/blog')
    .then((response) => response.json());
}

export function fetchSingleBlogPost(id) {
  return fetch(`/api/blog/${id}`)
    .then((response) => response.json());
}
