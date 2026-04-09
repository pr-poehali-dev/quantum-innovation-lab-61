import type { ReactNode } from "react"

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  customContent?: ReactNode
  showButton?: boolean
  buttonText?: string
  label?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}
