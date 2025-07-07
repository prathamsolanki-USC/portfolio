export function createPageUrl(pageName) {
  if (!pageName) return '/';

  // 1. Turn spaces into hyphens
  // 2. Insert hyphens between lowercase→uppercase transitions
  // 3. Lowercase the whole thing
  const kebab = pageName
    .replace(/\s+/g, '-')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .toLowerCase();

  return `/${kebab}`;
}