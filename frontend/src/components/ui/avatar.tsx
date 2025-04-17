import React from "react"
import { cn } from "@/lib/utils"

interface AvatarProps {
  className?: string
  children?: React.ReactNode
}

export function Avatar({ className, children }: AvatarProps) {
  return (
    <div className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}>
      {children}
    </div>
  )
}

export function AvatarImage({ src, alt }: { src: string; alt?: string }) {
  return <img src={src} alt={alt} className="aspect-square h-full w-full" />
}

export function AvatarFallback({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-full w-full items-center justify-center rounded-full bg-gray-100">
      {children}
    </div>
  )
} 