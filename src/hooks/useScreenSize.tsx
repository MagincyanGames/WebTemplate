import { useEffect, useState } from 'react'

interface ScreenSize {
  x: number
  y: number
}

function getRootFontSize(): number {
  const rootElement = document.documentElement

  if (rootElement) {
    const rootStyle = window.getComputedStyle(rootElement)
    return parseFloat(rootStyle.fontSize)
  }

  return 16
}

function getScreenSizePx(): ScreenSize {
  return {
    x: window.innerWidth,
    y: window.innerHeight,
  }
}

function getScreenSizeEM(): ScreenSize {
  const rootFontSize = getRootFontSize()
  const { x, y } = getScreenSizePx()

  return {
    x: x / rootFontSize,
    y: y / rootFontSize,
  }
}
export function useScreenSizePX(): ScreenSize {
  const [size, setSize] = useState<ScreenSize>({ x: 0, y: 0 })

  useEffect(() => {
    function handleResize() {
      setSize(getScreenSizePx())
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return size
}

export function useScreenSizeEm(): ScreenSize {
  const [size, setSize] = useState<ScreenSize>({ x: 0, y: 0 })

  useEffect(() => {
    function handleResize() {
      setSize(getScreenSizeEM())
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return size
}

export function useIsSmallPX(): boolean {
  const SMALL = 40

  const size = useScreenSizePX()

  return size.x <= SMALL
}

export function useIsSmallEM(): boolean {
  const SMALL = 40

  const size = useScreenSizeEm()

  return size.x <= SMALL
}

export function useSmallClassEM() {
  return useIsSmallEM() ? 'small' : ''
}

export function useSmallClassPX() {
  return useIsSmallPX() ? 'small' : ''
}
