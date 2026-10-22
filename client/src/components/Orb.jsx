import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Stars } from '@react-three/drei';
import { Suspense, useRef } from 'react';

function LivingOrb() {
  const mesh = useRef();
  useFrame((state, delta) => {
    if (!mesh.current) return;
    mesh.current.rotation.y += delta * 0.13;
    mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.22) * 0.12;
  });
  return <Float speed={1.15} rotationIntensity={0.24} floatIntensity={0.5}>
    <Sphere ref={mesh} args={[1.23, 64, 64]} scale={1.05}>
      <MeshDistortMaterial color="#9cff6b" emissive="#204b1e" emissiveIntensity={0.55} roughness={0.22} metalness={0.5} distort={0.34} speed={1.5} />
    </Sphere>
  </Float>;
}

export default function Orb() {
  return <div className="orb-canvas" aria-label="Animated abstract 3D green orb" role="img">
    <Canvas camera={{ position: [0, 0, 4.5], fov: 45 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: true }}>
      <ambientLight intensity={0.9} />
      <pointLight position={[3, 2, 4]} intensity={30} color="#d7ffb5" />
      <pointLight position={[-3, -2, 1]} intensity={12} color="#40e68a" />
      <Suspense fallback={null}><LivingOrb /><Stars radius={7} depth={2} count={75} factor={1.4} saturation={0} fade speed={0.3} /></Suspense>
    </Canvas>
    <div className="orb-ring orb-ring-one" /><div className="orb-ring orb-ring-two" />
  </div>;
}
