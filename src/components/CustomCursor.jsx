import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const isHoveringRef = useRef(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      return
    }

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0
    let dotX = 0
    let dotY = 0
    let animationId
    let isVisible = false

    const ring = ringRef.current
    const cursor = cursorRef.current

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible) {
        isVisible = true
        if (ring) ring.style.opacity = '1'
        if (cursor) cursor.style.opacity = '1'
      }
    }

    const handleMouseLeave = () => {
      isVisible = false
      if (ring) ring.style.opacity = '0'
      if (cursor) cursor.style.opacity = '0'
    }

    const handleHoverStart = (e) => {
      const target = e.target
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        if (!isHoveringRef.current) {
          isHoveringRef.current = true
          if (ring) ring.classList.add('hovering')
          if (cursor) cursor.classList.add('hovering')
        }
      }
    }

    const handleHoverEnd = () => {
      if (isHoveringRef.current) {
        isHoveringRef.current = false
        if (ring) ring.classList.remove('hovering')
        if (cursor) cursor.classList.remove('hovering')
      }
    }

    const animate = () => {
      const ringLerp = 0.12
      const dotLerp = 0.6

      ringX += (mouseX - ringX) * ringLerp
      ringY += (mouseY - ringY) * ringLerp
      dotX += (mouseX - dotX) * dotLerp
      dotY += (mouseY - dotY) * dotLerp

      if (ring) {
        ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      }
      if (cursor) {
        cursor.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`
      }

      animationId = requestAnimationFrame(animate)
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseover', handleHoverStart)
    document.addEventListener('mouseout', handleHoverEnd)

    animationId = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseover', handleHoverStart)
      document.removeEventListener('mouseout', handleHoverEnd)
      cancelAnimationFrame(animationId)
    }
  }, [])

  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  return (
    <>
      <style>{`
        .cursor-ring {
          position: fixed;
          top: 0;
          left: 0;
          width: 40px;
          height: 40px;
          border: 1px solid rgba(245, 245, 240, 0.5);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          opacity: 0;
          will-change: transform;
          transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                      height 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      border-color 0.3s cubic-bezier(0.4, 0, 0.2, 1),
                      background-color 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cursor-ring.hovering {
          width: 60px;
          height: 60px;
          border-color: rgba(201, 169, 98, 0.5);
          background-color: rgba(201, 169, 98, 0.1);
        }
        .cursor-dot {
          position: fixed;
          top: 0;
          left: 0;
          width: 6px;
          height: 6px;
          background-color: #f5f5f0;
          border-radius: 50%;
          pointer-events: none;
          z-index: 10000;
          opacity: 0;
          will-change: transform;
          transition: width 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                      height 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                      background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .cursor-dot.hovering {
          width: 10px;
          height: 10px;
          background-color: #c9a962;
        }
      `}</style>

      <div ref={ringRef} className="cursor-ring" />
      <div ref={cursorRef} className="cursor-dot" />
    </>
  )
}
