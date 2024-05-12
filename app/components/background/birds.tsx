import React, { useState, useEffect, useRef } from 'react'
//@ts-expect-error$ impot
import BIRDS from 'vanta/dist/vanta.birds.min'
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag
import * as THREE from 'three'
const BirdsBackground = () => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        BIRDS({
          el: myRef.current,
          THREE: THREE,
        }),
      )
    }
    return () => {
      //@ts-expect-error destry
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div ref={myRef}>Foreground content goes here</div>
}

export default BirdsBackground
