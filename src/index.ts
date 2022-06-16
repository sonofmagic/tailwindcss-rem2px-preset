import type { Config } from 'tailwindcss'
import { rem2px } from './util'
const defaultTheme = require('tailwindcss/defaultTheme')

export interface UserDefinedOptions {
  fontSize?: number
}

export { rem2px }

export function createPreset (option: UserDefinedOptions = {}) {
  const { fontSize } = Object.assign({ fontSize: 16 }, option)

  const config: Config = {
    content: ['src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      borderRadius: rem2px(defaultTheme.borderRadius, fontSize) as Record<
        string,
        string
      >,
      columns: rem2px(defaultTheme.columns, fontSize) as Record<string, string>,
      fontSize: rem2px(defaultTheme.fontSize, fontSize) as Record<
        string,
        string
      >,
      lineHeight: rem2px(defaultTheme.lineHeight, fontSize) as Record<
        string,
        string
      >,
      maxWidth: ({ theme, breakpoints }) => ({
        ...(rem2px(
          defaultTheme.maxWidth({ theme, breakpoints }),
          fontSize
        ) as Record<string, string>)
      }),
      spacing: rem2px(defaultTheme.spacing, fontSize) as Record<string, string>
    }
  }
  return config
}

exports = module.exports = createPreset()
