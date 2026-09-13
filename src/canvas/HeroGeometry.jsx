import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float } from '@react-three/drei'

// Signature 3D Glowing Tech Orb (Smooth Glass Plasma Core + Dual Wireframe Shell + Orbiting Satellites)
const CoreTechOrb = ({ position = [2.5, 0.1, -1], scale = 1.35 }) => {
  const outerRef = useRef()
  const innerRef = useRef()
  const ringRef = useRef()
  const ring2Ref = useRef()

  useFrame((state) => {
    const time = state.clock.elapsedTime
    if (outerRef.current) {
      outerRef.current.rotation.x = time * 0.12
      outerRef.current.rotation.y = time * 0.18
    }
    if (innerRef.current) {
      innerRef.current.rotation.x = -time * 0.15
      innerRef.current.rotation.y = -time * 0.22
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = time * 0.4 // Faster Z rotation to show orbiting dot movement clearly
      ringRef.current.rotation.x = Math.sin(time * 0.2) * 0.3 + 1.1
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.z = -time * 0.35 // Counter-clockwise rotation
      ring2Ref.current.rotation.y = Math.cos(time * 0.25) * 0.4 + 0.8
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.25} floatIntensity={1}>
      <group position={position} scale={scale}>
        {/* Outer wireframe geodesic shell - Cyan Glow */}
        <mesh ref={outerRef}>
          <icosahedronGeometry args={[1.35, 2]} />
          <meshStandardMaterial
            color="#06b6d4"
            wireframe
            transparent
            opacity={0.3}
            emissive="#06b6d4"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Smooth Inner Glowing Core - High Poly Glass Sphere */}
        <mesh ref={innerRef}>
          <sphereGeometry args={[0.82, 64, 64]} />
          <meshPhysicalMaterial
            color="#7c3aed"
            emissive="#5b21b6"
            emissiveIntensity={0.8}
            roughness={0.1}
            metalness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Orbit Ring 1 (Cyan) with Orbiting Glowing Satellite Dot */}
        <group ref={ringRef}>
          <mesh>
            <torusGeometry args={[1.65, 0.014, 16, 100]} />
            <meshBasicMaterial
              color="#06b6d4"
              transparent
              opacity={0.7}
            />
          </mesh>
          {/* Orbiting Dot 1 (Bright Cyan Satellite) */}
          <mesh position={[1.65, 0, 0]}>
            <sphereGeometry args={[0.075, 32, 32]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
          {/* Opposite Trailing Dot 1 */}
          <mesh position={[-1.65, 0, 0]}>
            <sphereGeometry args={[0.045, 32, 32]} />
            <meshBasicMaterial color="#22d3ee" transparent opacity={0.7} />
          </mesh>
        </group>

        {/* Orbit Ring 2 (Purple) with Orbiting Glowing Satellite Dot */}
        <group ref={ring2Ref}>
          <mesh>
            <torusGeometry args={[1.9, 0.012, 16, 100]} />
            <meshBasicMaterial
              color="#a855f7"
              transparent
              opacity={0.5}
            />
          </mesh>
          {/* Orbiting Dot 2 (Bright Purple Satellite) */}
          <mesh position={[0, 1.9, 0]}>
            <sphereGeometry args={[0.07, 32, 32]} />
            <meshBasicMaterial color="#e879f9" />
          </mesh>
          {/* Opposite Trailing Dot 2 */}
          <mesh position={[0, -1.9, 0]}>
            <sphereGeometry args={[0.04, 32, 32]} />
            <meshBasicMaterial color="#c084fc" transparent opacity={0.6} />
          </mesh>
        </group>
      </group>
    </Float>
  )
}

// Far Background Ambient Polyhedron (distanced so it never collides with UI text)
const FarAmbientElement = ({ position, scale, color, speed = 1 }) => {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    meshRef.current.rotation.x = time * 0.08 * speed
    meshRef.current.rotation.y = time * 0.12 * speed
  })

  return (
    <Float speed={1.2 * speed} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.15}
          emissive={color}
          emissiveIntensity={0.15}
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
    // Smooth responsive parallax following mouse
    groupRef.current.position.x += (mouse.x * 0.5 - groupRef.current.position.x) * 0.03
    groupRef.current.position.y += (mouse.y * 0.5 - groupRef.current.position.y) * 0.03
  })

  return (
    <group ref={groupRef}>
      {/* Primary 3D Tech Core Orb (Right side) */}
      <CoreTechOrb position={[2.5, 0.1, -1]} scale={1.35} />

      {/* Far Distant Ambient Floating Crystals */}
      <FarAmbientElement
        position={[-6, 3, -6]}
        scale={0.8}
        color="#7c3aed"
        speed={0.7}
      />
      <FarAmbientElement
        position={[6, -3, -6]}
        scale={0.7}
        color="#06b6d4"
        speed={0.9}
      />
    </group>
  )
}

export default HeroGeometry
