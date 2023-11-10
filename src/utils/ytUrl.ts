export default (url: string) => {
  const id = url.split("/").slice(-1);
  return `https://www.youtube.com/embed/${id}`;
};
