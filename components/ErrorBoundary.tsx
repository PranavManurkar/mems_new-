"use client"

import { useEffect, useState, ReactNode } from "react"
import { ErrorFallback } from "./ErrorFallback"

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
  onError?: (error: Error) => void
}

export function ErrorBoundary({ children, fallback, onError }: ErrorBoundaryProps) {
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      setError(event.error)
      onError?.(event.error)
    }

    window.addEventListener("error", handleError)
    return () => window.removeEventListener("error", handleError)
  }, [onError])

  if (error) {
    return (
      <ErrorFallback
        error={error}
        reset={() => setError(null)}
        fallback={fallback}
      />
    )
  }

  return <>{children}</>
}
