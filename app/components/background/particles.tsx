'use client'
import React, { useEffect, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim' // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { options } from '@/app/components/background/config/particles'
import { Container } from '@tsparticles/engine'
const ParticlesBackground = React.memo(() => {
  const [init, setInit] = useState(false)

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  const particlesLoaded = async (container?: Container) => {
    console.log(container)
  }

  if (init) {
    return (
      <Particles
        id='tsparticles'
        particlesLoaded={particlesLoaded}
        options={options as any}
      />
    )
  }

  return <></>
})

ParticlesBackground.displayName = 'ParticlesBackground'

export default ParticlesBackground
