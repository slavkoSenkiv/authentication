import { redirect } from 'react-router-dom';

export function getTockenDuration() {
  const storedExpirationDate = localStorage.getItem('expiration');
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthTocken() {
  const tocken = localStorage.getItem('tocken');
  if (!tocken) {
    return null;
  }
  const tockenDuration = getTockenDuration();
  if (tockenDuration < 0) {
    return 'EXPIRED';
  }
  return tocken;
}

export function tockenLoader() {
  return getAuthTocken();
}

export function checkAuthLoader() {
  const tocken = getAuthTocken();

  if (!tocken) {
    return redirect('/auth');
  }
  return null;
}
