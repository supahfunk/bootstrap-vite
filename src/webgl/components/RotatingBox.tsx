import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Mesh } from 'three'

type RotatingBoxProps = {
  position?: [number, number, number]
}

export function RotatingBox({ position = [0, 0, 0] }: RotatingBoxProps) {
  const meshRef = useRef<Mesh>(null)

  useFrame((_, delta) => {
    if (!meshRef.current) return

    // Rotazione continua
    meshRef.current.rotation.x += delta * 0.5
    meshRef.current.rotation.y += delta * 0.2
  })

  return (
    <mesh ref={meshRef} position={position} castShadow receiveShadow>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#4285f4" roughness={0.3} metalness={0.6} />
    </mesh>
  )
}
