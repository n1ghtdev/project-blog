export default function generateURI(title) {
  if (!title) return undefined;

  return title
    .replace(/[^a-zA-Z0-9 ]/g, '') /* remove everything except letters and numbers */
    .replace(/[ ]+/g, ' ') /* in case of multiple space */
    .replace(/ /g, '-') /* fill spaces with dash-symbol */
    .toLowerCase();
}
