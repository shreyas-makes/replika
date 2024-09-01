'use client'

import { useState, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

function ParticleAnimation(props) {
  const ref = useRef()
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.5 }))

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10
      ref.current.rotation.y -= delta / 15
    }
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#ffa0e0"
          size={0.005}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function Hero() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Submitted email:', email)
  }

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gray-900">
      <Canvas className="absolute inset-0">
        <ParticleAnimation />
      </Canvas>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-8 bg-gray-800 bg-opacity-80 rounded-xl backdrop-blur-sm">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-white">
              Generate Amazing Text Prompts
            </h2>
            <p className="mt-2 text-sm text-gray-300">
              Sign up now and unlock the power of AI-generated text prompts
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <Input
              type="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign Up
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}