export default <T extends string | undefined>(url: T, baseUrl: string): T => {
  // pass-through
  if (url === undefined) {
    return undefined as T;
  }

  // validation
  if (baseUrl.endsWith("/")) {
    throw new Error(
      `base url should not contain trailing slash, received '${baseUrl}'`,
    );
  }

  // resolving
  if (url.startsWith("https://") || url.startsWith("http://")) {
    return url;
  } else if (url.startsWith("/")) {
    return (baseUrl + url) as T;
  } else {
    throw new Error(
      `resolving url '${url}' with baseUrl '${baseUrl}' is not supported`,
    );
  }
};
