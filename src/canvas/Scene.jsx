import { Canvas } from '@react-three/fiber'
import { AdaptiveDpr, AdaptiveEvents, Preload } from '@react-three/drei'
import Particles from './Particles'
import HeroGeometry from './HeroGeometry'

const Scene = () => {
  return (
    <div id="three-canvas">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 55 }}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        dpr={[1, 1.5]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[5, 5, 5]} intensity={0.8} color="#7c3aed" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#06b6d4" />
        <spotLight
          position={[0, 10, 5]}
          intensity={0.5}
          color="#a855f7"
          angle={0.3}
          penumbra={1}
        />

        <Particles count={4000} />
        <HeroGeometry />

        <AdaptiveDpr pixelated />
        <AdaptiveEvents />
        <Preload all />
      </Canvas>
    </div>
  )
}

export default Scene
