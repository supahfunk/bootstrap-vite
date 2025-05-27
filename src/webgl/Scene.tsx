import { useMemo } from 'react'
import { useKTX2 } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'

interface PlaneProps {
  ktx2Url?: string | null
}

const Plane = ({ ktx2Url }: PlaneProps) => {
  const texture = useKTX2(ktx2Url || '/text.ktx2')
  const { viewport } = useThree()
  const size = useMemo(() => {
    return Math.min(viewport.height, viewport.width)
  }, [viewport])
  return (
    <mesh scale={[size, size, 1]}>
      <planeGeometry args={[1, 1]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  )
}

export function Scene({ ktx2Url }: { ktx2Url?: string | null }) {
  return (
    <div className="absolute inset-0 h-full w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={['#1d1d1d']} />
        <Plane ktx2Url={ktx2Url} />
      </Canvas>
    </div>
  )
}
