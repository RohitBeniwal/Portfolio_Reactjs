import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

const ParticleField = () => {
  const ref = useRef();
  const particleCount = 2000;
  
  const [positions, connections] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const conn = [];
    
    // Generate random particle positions
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    
    // Create neural network-like connections
    for (let i = 0; i < particleCount; i += 3) {
      for (let j = i + 1; j < Math.min(i + 10, particleCount); j += 2) {
        const distance = Math.sqrt(
          Math.pow(pos[i * 3] - pos[j * 3], 2) +
          Math.pow(pos[i * 3 + 1] - pos[j * 3 + 1], 2) +
          Math.pow(pos[i * 3 + 2] - pos[j * 3 + 2], 2)
        );
        
        if (distance < 3) {
          conn.push([
            [pos[i * 3], pos[i * 3 + 1], pos[i * 3 + 2]],
            [pos[j * 3], pos[j * 3 + 1], pos[j * 3 + 2]]
          ]);
        }
      }
    }
    
    return [pos, conn];
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.15) * 0.1;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.05) * 0.05;
    }
  });

  return (
    <>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00ff88"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      
      {/* Neural connections */}
      {connections.slice(0, 50).map((connection, index) => (
        <Line
          key={index}
          points={connection}
          color="#00ff8840"
          lineWidth={1}
          transparent
          opacity={0.3}
        />
      ))}
    </>
  );
};

const FloatingGeometry = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.5;
    }
  });

  return (
    <mesh ref={meshRef} position={[5, 0, -5]}>
      <octahedronGeometry args={[1]} />
      <meshStandardMaterial
        color="#667eea"
        transparent
        opacity={0.4}
        wireframe
      />
    </mesh>
  );
};

const Background3D = () => {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(135deg, #0c0c0c 0%, #1a1a2e 50%, #16213e 100%)'
    }}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <FloatingGeometry />
        
        {/* Additional floating elements */}
        <mesh position={[-6, 3, -3]}>
          <tetrahedronGeometry args={[0.8]} />
          <meshStandardMaterial color="#ff6b6b" transparent opacity={0.3} wireframe />
        </mesh>
        
        <mesh position={[4, -2, -4]}>
          <icosahedronGeometry args={[0.6]} />
          <meshStandardMaterial color="#4ecdc4" transparent opacity={0.4} wireframe />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Background3D;