"use client"

import { AlertCircle, RefreshCw } from "lucide-react"
import { ReactNode } from "react"

interface ErrorBoundaryProps {
  error: Error & { digest?: string }
  reset: () => void
  fallback?: ReactNode
}

export function ErrorFallback({ error, reset, fallback }: ErrorBoundaryProps) {
  if (fallback) {
    return <>{fallback}</>
  }

  return (
    <div className="flex flex-col items-center justify-center py-12 px-4">
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 max-w-md w-full">
        <div className="flex items-center justify-center mb-4">
          <AlertCircle className="w-12 h-12 text-red-600" />
        </div>
        <h2 className="text-xl font-bold text-red-900 mb-2 text-center">Something went wrong</h2>
        <p className="text-red-700 text-sm mb-4 text-center">
          We encountered an error while loading this content. Please try again.
        </p>
        {process.env.NODE_ENV === "development" && (
          <details className="mb-4 text-xs text-red-600 bg-red-100 p-2 rounded">
            <summary className="cursor-pointer font-semibold">Error details</summary>
            <pre className="mt-2 overflow-auto text-red-600">{error.message}</pre>
          </details>
        )}
        <button
          onClick={reset}
          className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          Try again
        </button>
      </div>
    </div>
  )
}
