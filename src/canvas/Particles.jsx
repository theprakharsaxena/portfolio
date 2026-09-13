import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

// Create a soft circular gradient texture so particles are always round, never square
const createCircleTexture = () => {
  const size = 128
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size
  const ctx = canvas.getContext('2d')

  // Radial gradient: full white center → fully transparent edge
  const gradient = ctx.createRadialGradient(
    size / 2, size / 2, 0,
    size / 2, size / 2, size / 2
  )
  gradient.addColorStop(0,   'rgba(255, 255, 255, 1)')
  gradient.addColorStop(0.4, 'rgba(255, 255, 255, 0.6)')
  gradient.addColorStop(0.8, 'rgba(255, 255, 255, 0.1)')
  gradient.addColorStop(1,   'rgba(255, 255, 255, 0)')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, size, size)

  return new THREE.CanvasTexture(canvas)
}

const Particles = ({ count = 4000 }) => {
  const mesh = useRef()

  // Build circular texture once
  const circleTexture = useMemo(() => createCircleTexture(), [])

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)

    const primaryColor = new THREE.Color('#7c3aed')
    const accentColor  = new THREE.Color('#06b6d4')
    const whiteColor   = new THREE.Color('#ffffff')

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      pos[i3]     = (Math.random() - 0.5) * 60
      pos[i3 + 1] = (Math.random() - 0.5) * 60
      pos[i3 + 2] = (Math.random() - 0.5) * 30

      const rand = Math.random()
      let c
      if (rand < 0.15)      c = primaryColor
      else if (rand < 0.3)  c = accentColor
      else                  c = whiteColor

      col[i3]     = c.r
      col[i3 + 1] = c.g
      col[i3 + 2] = c.b

    }

    return [pos, col]
  }, [count])

  useFrame((state) => {
    if (!mesh.current) return

    const time = state.clock.elapsedTime
    mesh.current.rotation.x = time * 0.015
    mesh.current.rotation.y = time * 0.012

    // Subtle mouse parallax
    const mouse = state.mouse
    mesh.current.position.x += (mouse.x * 1.5 - mesh.current.position.x) * 0.02
    mesh.current.position.y += (mouse.y * 1.5 - mesh.current.position.y) * 0.02
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        map={circleTexture}
        size={0.18}
        sizeAttenuation={true}
        vertexColors={true}
        transparent={true}
        opacity={0.9}
        alphaTest={0.01}      // clips invisible corners → circles only
        depthWrite={false}
        blending={THREE.AdditiveBlending}  // glow-like blending
      />
    </points>
  )
}

export default Particles
