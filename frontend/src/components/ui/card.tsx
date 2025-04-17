import React from "react"
import { cn } from "@/lib/utils"

interface CardProps {
  className?: string
  children?: React.ReactNode
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children }: CardProps) {
  return <div className={cn("flex flex-col space-y-1.5 p-6", className)}>{children}</div>
}

export function CardContent({ className, children }: CardProps) {
  return <div className={cn("p-6 pt-0", className)}>{children}</div>
}

export function CardDescription({ className, children }: CardProps) {
  return <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
} 