import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, Float } from '@react-three/drei'

const FloatingShape = ({ position, geometry = 'torus', color = '#7c3aed', scale = 1, speed = 1 }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    meshRef.current.rotation.x = time * 0.3 * speed
    meshRef.current.rotation.y = time * 0.2 * speed
    meshRef.current.rotation.z = time * 0.1 * speed
  })

  const GeometryMap = {
    torus: <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />,
    icosa: <icosahedronGeometry args={[1, 0]} />,
    octa: <octahedronGeometry args={[1, 0]} />,
    dodeca: <dodecahedronGeometry args={[1, 0]} />,
    torus2: <torusGeometry args={[1.2, 0.3, 16, 60]} />,
  }

  return (
    <Float speed={1.5 * speed} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {GeometryMap[geometry] || <torusKnotGeometry args={[0.8, 0.25, 100, 16]} />}
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.25}
          speed={2}
          roughness={0.1}
          metalness={0.9}
          transparent
          opacity={0.8}
          wireframe={false}
        />
      </mesh>
    </Float>
  )
}

const HeroGeometry = () => {
  return (
    <group>
      {/* Main hero torus knot */}
      <FloatingShape
        position={[3.5, 0.5, -2]}
        geometry="torus"
        color="#7c3aed"
        scale={0.9}
        speed={0.8}
      />
      {/* Right icosahedron */}
      <FloatingShape
        position={[5, -2, -4]}
        geometry="icosa"
        color="#06b6d4"
        scale={0.5}
        speed={1.2}
      />
      {/* Left octahedron */}
      <FloatingShape
        position={[-5, 1.5, -3]}
        geometry="octa"
        color="#a855f7"
        scale={0.6}
        speed={0.9}
      />
      {/* Bottom left small torus */}
      <FloatingShape
        position={[-3.5, -2.5, -2]}
        geometry="torus2"
        color="#06b6d4"
        scale={0.35}
        speed={1.5}
      />
      {/* Far dodecahedron */}
      <FloatingShape
        position={[0, 3, -6]}
        geometry="dodeca"
        color="#7c3aed"
        scale={0.4}
        speed={0.6}
      />
    </group>
  )
}

export default HeroGeometry
