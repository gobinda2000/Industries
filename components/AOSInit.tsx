'use client'

import { useEffect } from 'react'

export default function AOSInit() {
  useEffect(() => {
    // Dynamically import AOS only on client side
    import('aos').then((AOS) => {
      AOS.init({
        duration: 800,
        once: true,
        offset: 100,
      })
    })
  }, [])

  return null
}
