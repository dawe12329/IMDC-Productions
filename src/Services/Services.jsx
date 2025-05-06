import * as THREE from 'three'
import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment } from '@react-three/drei'
import './Services.css'

function RotatingModel({ onSpinEnd, ...props }) {
  const ref = useRef()
  const { scene } = useGLTF('/scene.gltf')
  const START = -Math.PI / 2
  const END = START + 1.5 * Math.PI
  const [finished, setFinished] = useState(false)

  useEffect(() => {
    if (ref.current) {
      ref.current.rotation.y = START
      setFinished(false)
    }
  }, [])

  useFrame(() => {
    if (ref.current && !finished) {
      if (ref.current.rotation.y < END) {
        ref.current.rotation.y += 0.015
        if (ref.current.rotation.y > END) ref.current.rotation.y = END
      } else {
        setFinished(true)
        if (onSpinEnd) onSpinEnd()
      }
    }
  })

  return <primitive ref={ref} object={scene} {...props} />
}

export default function Services() {
  const [showText, setShowText] = useState(false)

  return (
    <div className="services" style={{ width: "100vw", height: "100vh" }}>
       <h1 style={{
        opacity: showText ? 1 : 0,
        transition: "opacity 1s",
      }}>Tell your story</h1>
      <Canvas
        camera={{ position: [0, 2, 10], fov: 40 }}
        gl={{
          toneMapping: THREE.LinearToneMapping,
        }}
        onCreated={({ gl }) => {
          gl.toneMappingExposure = 1
        }}
      >
        <Environment preset="city" background={false} />
        <ambientLight intensity={0.53} color={0xffffff} />
        <directionalLight intensity={1.2} color={0xffffff} position={[10, 10, 10]} />

        {/* Pass callback */}
        <RotatingModel scale={3} onSpinEnd={() => setShowText(true)} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}