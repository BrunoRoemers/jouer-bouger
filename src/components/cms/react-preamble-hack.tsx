/**
 * When importing a React component on the client-side (i.e. to pass it onto Decap CMS),
 * Vite throws this error: `@vitejs/plugin-react can't detect preamble. Something is wrong`.
 *
 * To mitigate the error, it is sufficient to load and hydrate *any* React component
 * on the Astro page using the means that Astro provides.
 *
 * For that reason, this component was created. Add the following line anywhere on the
 * Decap CMS admin page, to fix the error and make the page load again.
 *
 * ```
 * <ReactPreambleHack client:only="react" />
 * ```
 */
const ReactPreambleHack = () => null;

export default ReactPreambleHack;
