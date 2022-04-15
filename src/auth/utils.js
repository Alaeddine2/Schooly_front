import useJwt from '@/auth/jwt/useJwt'

// eslint-disable-next-line arrow-body-style
export const isUserLoggedIn = () => {
  return localStorage.getItem('userData') && localStorage.getItem(useJwt.jwtConfig.storageTokenKeyName)
}

export const getUserData = () => JSON.parse(localStorage.getItem('userData'))

export const getHomeRouteForLoggedInUser = userRole => {
  if (userRole === 'admin') return '/dashboard'
  if (userRole === 'student') return { name: 'access-control' }
  if (userRole === 'teacher') return { name: 'access-control' }
  return { name: 'auth-login' }
}
