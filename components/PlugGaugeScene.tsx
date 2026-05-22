'use client'

import { Canvas } from '@react-three/fiber'
import {
  Environment,
  Float,
  OrbitControls,
  useGLTF,
} from '@react-three/drei'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function PlugGaugeModel() {
  const pivotRef = useRef<THREE.Group>(null)

  const { scene } = useGLTF('/models/plug-gauge.glb')

  useEffect(() => {
    // CENTER THE MODEL GEOMETRY
    const box = new THREE.Box3().setFromObject(scene)
    const center = box.getCenter(new THREE.Vector3())

    scene.position.sub(center)

    if (!pivotRef.current) return

    // SCROLL ROTATION
    gsap.to(pivotRef.current.rotation, {
      y: Math.PI * 2,
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })
  }, [scene])

  return (
    <group
      ref={pivotRef}
      position={[0, 0, 0]}
      rotation={[-0.4, 0.8, 0.2]}
    >
      <Float
        speed={1.2}
        rotationIntensity={1}
        floatIntensity={1}
      >
        <primitive
          object={scene}
          scale={0.8}
        />
      </Float>
    </group>
  )
}

export default function PlugGaugeScene() {
  return (
    <div className="fixed inset-0 -z-10 opacity-80">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        {/* LIGHTING */}
        <ambientLight intensity={1.5} />

        <directionalLight
          position={[4, 5, 5]}
          intensity={2}
        />

        <directionalLight
          position={[-5, -5, 2]}
          intensity={1}
        />

        {/* MODEL */}
        <PlugGaugeModel />

        {/* REFLECTIONS */}
        <Environment preset="studio" />

        {/* OPTIONAL CONTROLS */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}