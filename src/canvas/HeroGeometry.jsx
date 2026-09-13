import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

// Clean 3D Developer Perspective Grid System
const DeveloperGridPlane = () => {
  const gridRef = useRef()

  useFrame((state) => {
    if (!gridRef.current) return
    const time = state.clock.elapsedTime
    // Subtle wave motion across grid
    gridRef.current.position.z = Math.sin(time * 0.3) * 0.2 - 2
    gridRef.current.rotation.x = -Math.PI / 2.8 + Math.cos(time * 0.2) * 0.02
  })

  return (
    <group position={[0, -2.5, -4]}>
      {/* Perspective Grid Helper */}
      <gridHelper
        ref={gridRef}
        args={[40, 40, '#7c3aed', '#1e293b']}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2.8, 0, 0]}
      />
    </group>
  )
}

// Subtle Ambient Tech Nodes (Clean system architecture nodes)
const SystemNodes = ({ count = 30 }) => {
  const pointsRef = useRef()

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 20
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10 - 2
    }
    return pos
  }, [count])

  useFrame((state) => {
    if (!pointsRef.current) return
    const time = state.clock.elapsedTime
    pointsRef.current.rotation.y = time * 0.02
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.12}
        color="#06b6d4"
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  )
}

const HeroGeometry = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    const mouse = state.mouse
    // Smooth subtle parallax response to mouse cursor
    groupRef.current.position.x += (mouse.x * 0.4 - groupRef.current.position.x) * 0.02
    groupRef.current.position.y += (mouse.y * 0.4 - groupRef.current.position.y) * 0.02
  })

  return (
    <group ref={groupRef}>
      <DeveloperGridPlane />
      <SystemNodes count={25} />
    </group>
  )
}

export default HeroGeometry
