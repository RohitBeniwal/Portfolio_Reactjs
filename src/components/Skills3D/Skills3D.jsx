import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Sphere, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import css from './Skills3D.module.scss';

const SkillSphere = ({ position, skill, color, delay }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.2;
    }
  });

  return (
    <group position={position}>
      <Sphere ref={meshRef} args={[0.5]} scale={1}>
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.8}
          roughness={0.2}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </Sphere>
      <Text
        position={[0, 0, 0.6]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
        font="/fonts/courier-prime.woff"
      >
        {skill}
      </Text>
    </group>
  );
};

const Skills3D = () => {
  const skills = [
    { name: 'Python', color: '#3776ab', position: [-3, 2, 0], delay: 0 },
    { name: 'PyTorch', color: '#ee4c2c', position: [0, 3, -1], delay: 1 },
    { name: 'React', color: '#61dafb', position: [3, 2, 0], delay: 2 },
    { name: 'Node.js', color: '#339933', position: [-2, 0, 1], delay: 3 },
    { name: 'MongoDB', color: '#47a248', position: [2, 0, 1], delay: 4 },
    { name: 'AWS', color: '#ff9900', position: [0, -2, 0], delay: 5 },
    { name: 'TensorFlow', color: '#ff6f00', position: [-1, 1, 2], delay: 6 },
    { name: 'Docker', color: '#2496ed', position: [1, 1, 2], delay: 7 },
  ];

  return (
    <motion.section
      className={css.skills3DSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <motion.div
        className={css.sectionHeader}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className={css.title}>
          <span className={css.glitch} data-text="TECH ARSENAL">TECH ARSENAL</span>
        </h2>
        <p className={css.subtitle}>Interactive 3D Technology Stack</p>
      </motion.div>

      <div className={css.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 8], fov: 75 }}>
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#667eea" intensity={0.5} />
          
          {skills.map((skill, index) => (
            <SkillSphere
              key={skill.name}
              position={skill.position}
              skill={skill.name}
              color={skill.color}
              delay={skill.delay}
            />
          ))}
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      <motion.div
        className={css.skillsGrid}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className={css.skillCard}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ 
              scale: 1.05,
              backgroundColor: `${skill.color}20`,
              borderColor: skill.color
            }}
          >
            <div 
              className={css.skillIcon}
              style={{ backgroundColor: skill.color }}
            />
            <span className={css.skillName}>{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className={css.experienceHighlight}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <div className={css.highlightCard}>
          <h3>AI/ML Expertise</h3>
          <p>Vision Transformer (ViT) implementation from scratch</p>
          <p>97% validation accuracy on CIFAR-10 dataset</p>
        </div>
        <div className={css.highlightCard}>
          <h3>Full-Stack Development</h3>
          <p>MERN stack applications with 25% performance boost</p>
          <p>Real-time applications with WebSocket integration</p>
        </div>
        <div className={css.highlightCard}>
          <h3>Data Engineering</h3>
          <p>Python ETL pipelines processing 10M+ Sybase records</p>
          <p>Multi-threaded ingestion with 99% test coverage</p>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Skills3D;