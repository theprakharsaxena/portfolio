import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

// Main 3D Tech Core Orb (Layered Geodesic Sphere + Glowing Core)
const CoreTechOrb = ({ position = [3.2, 0.2, -1], scale = 1.6 }) => {
  const outerRef = useRef()
  const innerRef = useRef()
  const ringRef = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (outerRef.current) {
      outerRef.current.rotation.x = time * 0.15
      outerRef.current.rotation.y = time * 0.2
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -time * 0.25
      innerRef.current.rotation.y = -time * 0.15
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.1
      ringRef.current.rotation.y = Math.sin(time * 0.3) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={1.2}>
      <group position={position} scale={scale}>
        {/* Outer wireframe geodesic shell */}
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[1.2, 2]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            transparent
            opacity={0.35}
            emissive="#06b6d4"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Inner solid glowing core */}
        <mesh ref={innerRef}>
          <icosahedronGeometry args={[0.75, 1]} />
          <meshStandardMaterial
            color="#7c3aed"
            roughness={0.1}
            metalness={0.8}
            emissive="#6d28d9"
            emissiveIntensity={0.6}
            transparent
            opacity={0.85}
          />
        </mesh>

        {/* Floating orbit dots */}
        <mesh ref={ringRef}>
          <sphereGeometry args={[1.5, 16, 16]} />
          <meshBasicMaterial
            color="#a855f7"
            wireframe
            transparent
            opacity={0.08}
          />
        </mesh>
      </group>
    </Float>
  )
}

// Subtle ambient glowing polyhedrons in deep background space
const AmbientPolyhedron = ({ position, scale, color, speed = 1, geometry = 'icosa' }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    meshRef.current.rotation.x = time * 0.1 * speed
    meshRef.current.rotation.y = time * 0.15 * speed
  })

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.4} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {geometry === 'icosa' && <icosahedronGeometry args={[1, 1]} />}
        {geometry === 'dodeca' && <dodecahedronGeometry args={[1, 0]} />}
        {geometry === 'octa' && <octahedronGeometry args={[1, 0]} />}
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.25}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

const HeroGeometry = () => {
  const groupRef = useRef()

  useFrame((state) => {
    if (!groupRef.current) return
    const mouse = state.mouse
    // Smooth group parallax following mouse
    groupRef.current.position.x += (mouse.x * 0.6 - groupRef.current.position.x) * 0.03
    groupRef.current.position.y += (mouse.y * 0.6 - groupRef.current.position.y) * 0.03
  })

  return (
    <group ref={groupRef}>
      {/* Signature 3D Tech Core Orb on Hero Right */}
      <CoreTechOrb position={[3.5, 0, -1]} scale={1.5} />

      {/* Subtle ambient wireframe elements carefully distributed */}
      <AmbientPolyhedron
        position={[-4.5, 2, -4]}
        scale={0.7}
        color="#7c3aed"
        speed={0.8}
        geometry="icosa"
      />
      <AmbientPolyhedron
        position={[-3.8, -2.2, -3]}
        scale={0.55}
        color="#06b6d4"
        speed={1.1}
        geometry="dodeca"
      />
      <AmbientPolyhedron
        position={[4.2, -2.5, -4]}
        scale={0.6}
        color="#a855f7"
        speed={0.9}
        geometry="octa"
      />
    </group>
  )
}

export default HeroGeometry
