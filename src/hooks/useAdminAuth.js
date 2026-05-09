import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export function useAdminAuth() {
  const navigate = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem('bz_admin') !== 'true') {
      navigate('/admin', { replace: true })
    }
  }, [navigate])

  return sessionStorage.getItem('bz_admin') === 'true'
}
