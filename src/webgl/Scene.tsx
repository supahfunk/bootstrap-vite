import { Suspense } from 'react'
import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

import { Floor } from '@/webgl/components/Floor'
import { RotatingBox } from '@/webgl/components/RotatingBox'

export function Scene() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }}>
        <color attach="background" args={['#1d1d1d']} />

        {/* Illuminazione */}
        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={1.5}
          castShadow
          shadow-mapSize={2048}
        />

        {/* Controlli della camera */}
        <OrbitControls makeDefault />

        {/* Contenuto della scena */}
        <Suspense fallback={null}>
          <RotatingBox position={[0, 1, 0]} />
          <Floor />
        </Suspense>
      </Canvas>
    </div>
  )
}
