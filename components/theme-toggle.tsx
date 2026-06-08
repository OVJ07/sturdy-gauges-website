'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip'
import { motion } from 'framer-motion'

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return <Button variant="ghost" size="icon" aria-hidden />

  const isDark = resolvedTheme === 'dark'
  const label = isDark ? 'Switch to light theme' : 'Switch to dark theme'

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(isDark ? 'light' : 'dark')}
          aria-label={label}
        >
          <motion.span
            key={String(isDark)}
            initial={{ rotate: 0, scale: 0.95, opacity: 0 }}
            animate={{ rotate: isDark ? 360 : -360, scale: 1, opacity: 1 }}
            whileHover={{ y: -6, scale: 1.08 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex items-center justify-center"
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </motion.span>
        </Button>
      </TooltipTrigger>
      <TooltipContent sideOffset={6}>{label}</TooltipContent>
    </Tooltip>
  )
}
