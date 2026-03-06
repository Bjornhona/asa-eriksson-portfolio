"use client"
import { useEffect, useState } from "react"

interface SafeDropdownProps {
  children: React.ReactNode
}

export default function SafeDropdown({ children }: SafeDropdownProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  return <>{children}</>
}
