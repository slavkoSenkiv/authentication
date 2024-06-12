export function getAuthTocken() {
  const tocken = localStorage.getItem('tocken');
  return tocken;
}

export function tockenLoader() {
  return getAuthTocken();
}