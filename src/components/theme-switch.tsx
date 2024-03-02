'use client'

import * as React from 'react'
import {useTheme} from 'next-themes'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const ThemeSwitch = () => {
  const [mounted, setMounted] = React.useState(false)
  const {theme, setTheme} = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Select value={theme} onValueChange={(value) => setTheme(value)}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Theme" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="light">Light</SelectItem>
        <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem>
      </SelectContent>
    </Select>
  )
}

export default ThemeSwitch
