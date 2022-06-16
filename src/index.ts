import type { Config } from 'tailwindcss'
import { rem2px } from './util'
import type { UserDefinedOptions } from './type'
const defaultTheme = require('tailwindcss/defaultTheme')

const defaultOptions: Required<UserDefinedOptions> = {
  fontSize: 16,
  unit: 'px'
}

export function createRem2px (option: UserDefinedOptions = {}) {
  return (input: any) => {
    return rem2px(input, option.fontSize, option.unit)
  }
}

export { rem2px }

export function createPreset (option: UserDefinedOptions = {}) {
  const opt = Object.assign<
    UserDefinedOptions,
    Required<UserDefinedOptions>,
    UserDefinedOptions
  >({}, defaultOptions, option)
  const customRem2px = createRem2px(opt)
  const config: Config = {
    content: ['src/**/*.{vue,js,ts,jsx,tsx}'],
    theme: {
      borderRadius: customRem2px(defaultTheme.borderRadius) as Record<
        string,
        string
      >,
      columns: customRem2px(defaultTheme.columns) as Record<string, string>,
      fontSize: customRem2px(defaultTheme.fontSize) as Record<string, string>,
      lineHeight: customRem2px(defaultTheme.lineHeight) as Record<
        string,
        string
      >,
      maxWidth: ({ theme, breakpoints }) => ({
        ...(customRem2px(
          defaultTheme.maxWidth({ theme, breakpoints })
        ) as Record<string, string>)
      }),
      spacing: customRem2px(defaultTheme.spacing) as Record<string, string>
    }
  }
  return config
}

exports = module.exports = createPreset()
