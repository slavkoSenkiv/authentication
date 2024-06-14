import { redirect } from 'react-router-dom'

export function action() {
  localStorage.removeItem('tocken')
  localStorage.removeItem('expiration')
  return redirect('/')
}