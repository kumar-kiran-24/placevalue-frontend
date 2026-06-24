import { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Points, PointMaterial, Line, Html } from "@react-three/drei";
import * as THREE from "three";

const BLUE = "#019ad8";
const BLUE_HI = "#3ec3f0";
const ORANGE = "#e88504";
const ORANGE_HI = "#ffb04a";

function ParticleField({ count = 1800, color, radius, speed }: { count?: number; color: string; radius: number; speed: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = (() => {
    const a = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = radius * (0.85 + Math.random() * 0.4);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      a[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      a[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      a[i * 3 + 2] = r * Math.cos(phi);
    }
    return a;
  })();
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * speed;
    ref.current.rotation.x += dt * speed * 0.35;
  });
  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color={color} size={0.022} sizeAttenuation depthWrite={false} opacity={0.85} blending={THREE.AdditiveBlending} />
    </Points>
  );
}

function WireSphere() {
  const ref = useRef<THREE.Group>(null);
  const { pointer } = useThree();
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.12;
    const tx = pointer.y * 0.25;
    const ty = pointer.x * 0.35;
    ref.current.rotation.x += (tx - ref.current.rotation.x) * 0.04;
    ref.current.position.x += (pointer.x * 0.15 - ref.current.position.x) * 0.05;
    ref.current.position.y += (pointer.y * 0.1 - ref.current.position.y) * 0.05;
    void ty;
  });
  return (
    <group ref={ref}>
      {/* Core glow */}
      <mesh>
        <sphereGeometry args={[1.05, 64, 64]} />
        <meshBasicMaterial color={BLUE} transparent opacity={0.06} />
      </mesh>
      {/* Inner wire */}
      <mesh>
        <icosahedronGeometry args={[1.25, 3]} />
        <meshBasicMaterial color={BLUE_HI} wireframe transparent opacity={0.35} />
      </mesh>
      {/* Outer wire */}
      <mesh rotation={[0.4, 0.2, 0]}>
        <icosahedronGeometry args={[1.55, 1]} />
        <meshBasicMaterial color={ORANGE_HI} wireframe transparent opacity={0.18} />
      </mesh>
      {/* Equator rings */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.6, i * 0.4, 0]}>
          <torusGeometry args={[1.8 + i * 0.08, 0.004, 16, 128]} />
          <meshBasicMaterial color={i % 2 ? ORANGE : BLUE_HI} transparent opacity={0.55} />
        </mesh>
      ))}
    </group>
  );
}

type NodeDef = { pos: [number, number, number]; label: string; color: string };

function CapabilityNodes() {
  const nodes: NodeDef[] = [
    { pos: [2.4, 1.2, 0.3], label: "Assess", color: BLUE_HI },
    { pos: [-2.5, 0.6, -0.4], label: "Practice", color: ORANGE_HI },
    { pos: [1.6, -1.7, 0.8], label: "Analyze", color: BLUE_HI },
    { pos: [-1.9, -1.4, 0.6], label: "Recommend", color: ORANGE_HI },
    { pos: [0.4, 2.2, -0.5], label: "Verify", color: BLUE_HI },
    { pos: [0.1, -2.3, -0.2], label: "Hire", color: ORANGE_HI },
  ];
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (group.current) group.current.rotation.y += dt * 0.04;
  });
  return (
    <group ref={group}>
      {nodes.map((n, i) => (
        <Float key={n.label} speed={1.2 + i * 0.15} rotationIntensity={0.2} floatIntensity={0.8}>
          <group position={n.pos}>
            <Line points={[[0, 0, 0], [-n.pos[0] * 0.42, -n.pos[1] * 0.42, -n.pos[2] * 0.42]]} color={n.color} lineWidth={0.6} transparent opacity={0.35} />
            <mesh>
              <sphereGeometry args={[0.07, 24, 24]} />
              <meshBasicMaterial color={n.color} />
            </mesh>
            <mesh>
              <sphereGeometry args={[0.16, 24, 24]} />
              <meshBasicMaterial color={n.color} transparent opacity={0.18} />
            </mesh>
            <Html distanceFactor={9} position={[0.18, 0.14, 0]} style={{ pointerEvents: "none" }}>
              <div className="whitespace-nowrap rounded-md border border-white/10 bg-black/60 backdrop-blur px-2 py-1 text-[0.62rem] font-mono uppercase tracking-[0.14em]" style={{ color: n.color }}>
                {n.label}
              </div>
            </Html>
          </group>
        </Float>
      ))}
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#00000000"]} />
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} color={BLUE} />
      <pointLight position={[-5, -3, -2]} intensity={0.8} color={ORANGE} />
      <Suspense fallback={null}>
        <WireSphere />
        <CapabilityNodes />
        <ParticleField count={1400} color={BLUE_HI} radius={3.2} speed={0.02} />
        <ParticleField count={900} color={ORANGE_HI} radius={4.2} speed={-0.015} />
      </Suspense>
    </>
  );
}

export function CapabilitySphere({ className = "" }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* radial glow backdrop */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, oklch(0.68 0.16 230 / 0.18), transparent 55%), radial-gradient(circle at 65% 60%, oklch(0.72 0.17 55 / 0.14), transparent 60%)",
        }}
      />
      {mounted && (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true }}
        >
          <Scene />
        </Canvas>
      )}
      {/* subtle vignette */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, transparent 55%, oklch(0.12 0.02 250 / 0.6) 100%)" }}
      />
    </div>
  );
}
