export default function fetchBlogPosts() {
  return fetch('http://localhost:8081/api/blog')
    .then((response) => response.json());
}
