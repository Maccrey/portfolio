
export function getAssetPath(path: string): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH;
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  
  if (!basePath) return normalizedPath;
  
  // Remove leading slash from basePath if present (though usually it's not)
  const cleanBasePath = basePath.startsWith("/") ? basePath.slice(1) : basePath;
  
  return `/${cleanBasePath}${normalizedPath}`;
}
