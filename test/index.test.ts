import defaultConfig from './defaultConfig'
import { rem2px } from '@/util'
const preset = require('..')

describe('[Default]', () => {
  function createRem2px (fontSize: number) {
    return (input: any) => {
      return rem2px(input, fontSize)
    }
  }

  const rem2px14 = createRem2px(14)
  const rem2px12 = createRem2px(12)
  const rem2px32 = createRem2px(32)
  const preset32 = preset.createPreset({
    fontSize: 32
  })
  test('default preset', () => {
    expect(preset.content).toEqual(['src/**/*.{vue,js,ts,jsx,tsx}'])

    expect(preset.theme.borderRadius).toEqual(
      rem2px(defaultConfig.theme?.borderRadius)
    )
    expect(preset.theme.columns).toEqual(rem2px(defaultConfig.theme?.columns))
    expect(preset.theme.lineHeight).toEqual(
      rem2px(defaultConfig.theme?.lineHeight)
    )
    // expect(preset.theme.maxWidth).toEqual(defaultConfig.theme?.maxWidth)
    expect(preset.theme.spacing).toEqual(rem2px(defaultConfig.theme?.spacing))
    expect(preset.theme.fontSize).toEqual(rem2px(defaultConfig.theme?.fontSize))
  })

  test('custom fontSize preset', () => {
    expect(preset32.theme.borderRadius).toEqual(
      rem2px32(defaultConfig.theme?.borderRadius)
    )
    expect(preset32.theme.columns).toEqual(
      rem2px32(defaultConfig.theme?.columns)
    )
    expect(preset32.theme.lineHeight).toEqual(
      rem2px32(defaultConfig.theme?.lineHeight)
    )
    expect(preset32.theme.spacing).toEqual(
      rem2px32(defaultConfig.theme?.spacing)
    )
    expect(preset32.theme.fontSize).toEqual(
      rem2px32(defaultConfig.theme?.fontSize)
    )
  })

  test('not equal', () => {
    const p16 = preset.theme.borderRadius
    const p14 = rem2px14(defaultConfig.theme?.borderRadius)
    const p12 = rem2px12(defaultConfig.theme?.borderRadius)
    expect(p16).not.toEqual(p14)
    expect(p16).not.toEqual(p12)
  })
})
