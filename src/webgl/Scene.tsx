import { memo } from 'react'
import {
  AccumulativeShadows,
  Center,
  Float,
  OrbitControls,
  RandomizedLight
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import {
  Bloom,
  EffectComposer,
  FXAA,
  N8AO,
  TiltShift2,
  ToneMapping
} from '@react-three/postprocessing'

import { Floor } from '@/webgl/Floor'

const Shadows = memo(() => (
  <AccumulativeShadows
    frames={100}
    temporal
    alphaTest={0.8}
    opacity={1.25}
    scale={15}
    position={[0, -1.12, 0]}
  >
    <RandomizedLight amount={8} radius={4} position={[1, 5.5, 1]} />
  </AccumulativeShadows>
))

export function Scene() {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas shadows camera={{ position: [5, 5, 5], fov: 45 }}>
        <color attach="background" args={['#1d1d1d']} />

        <ambientLight intensity={0.5} />
        <directionalLight
          position={[10, 10, 5]}
          intensity={2}
          castShadow
          shadow-mapSize={2048}
        />

        <OrbitControls makeDefault />

        <Float floatIntensity={3}>
          <Center position={[0, 1.5, 0]} rotation={[0, -Math.PI / 3.5, -0.4]}>
            <mesh position={[0, 1, 0]} castShadow>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial
                color="#fff"
                emissive="#fff"
                emissiveIntensity={1}
              />
            </mesh>
          </Center>
        </Float>
        <Shadows />

        <Floor />

        <EffectComposer>
          <EffectComposer>
            <FXAA />
            <N8AO aoRadius={1} intensity={6} />
            <TiltShift2 samples={5} blur={0.5} />
            <ToneMapping />
            <Bloom
              mipmapBlur
              intensity={0.5}
              luminanceThreshold={0.1}
              luminanceSmoothing={0.9}
            />
          </EffectComposer>
        </EffectComposer>
      </Canvas>
    </div>
  )
}
