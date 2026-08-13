export const basePath = "/caresync-web";

/** Prefix a public-folder path for GitHub Pages deployment. */
export function assetPath(path: string): string {
  return `${basePath}${path}`;
}
