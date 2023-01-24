import { useLayoutEffect, useState } from 'react'


export const useTheme = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('app-theme') || 'serious'
  )

  useLayoutEffect(() => {
    document.documentElement.setAttribute('app-theme', theme)
    localStorage.setItem('app-theme', theme)
  }, [theme])

  return { theme, setTheme }
}