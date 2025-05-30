import { MeshReflectorMaterial } from '@react-three/drei'

export function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <MeshReflectorMaterial
        mirror={0.5}
        resolution={512}
        blur={[1000, 1000]}
        mixBlur={0.8}
        color="#303030"
        metalness={0.5}
        roughness={0.6}
      />
    </mesh>
  )
}
