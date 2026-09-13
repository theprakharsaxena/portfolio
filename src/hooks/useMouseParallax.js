import { useEffect, useRef } from 'react'

const useMouseParallax = (strength = 1) => {
  const position = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * strength
      target.current.y = (e.clientY / window.innerHeight - 0.5) * strength
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [strength])

  return position
}

export default useMouseParallax
