/**
 * Asset URL resolver that works seamlessly across GitHub Pages subpaths,
 * Vercel, Netlify, and local development.
 */
export function getAssetUrl(path: string): string {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;

  const base = import.meta.env.BASE_URL || './';
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;
  return `${normalizedBase}${cleanPath}`;
}

export function handleImageFallback(e: React.SyntheticEvent<HTMLImageElement>, filename: string) {
  const target = e.currentTarget;
  const triedCount = parseInt(target.getAttribute('data-tried') || '0', 10);
  
  const base = import.meta.env.BASE_URL || './';
  const normalizedBase = base.endsWith('/') ? base : `${base}/`;

  const candidates = [
    `${normalizedBase}assets/aistudio/${filename}`,
    `${normalizedBase}assets/${filename}`,
    `${normalizedBase}${filename}`,
    `./assets/aistudio/${filename}`,
    `./assets/${filename}`,
    `./${filename}`,
    `/assets/aistudio/${filename}`,
    `/${filename}`
  ];

  if (triedCount < candidates.length) {
    target.setAttribute('data-tried', String(triedCount + 1));
    target.src = candidates[triedCount];
  }
}
