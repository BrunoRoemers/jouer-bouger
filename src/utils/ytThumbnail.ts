export default (url: string) => {
  const id = url.split("/").slice(-1);
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
};
