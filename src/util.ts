// https://github.com/tailwindlabs/tailwindcss/issues/1232

function rem2px (
  input: string | string[] | Record<string, string> | any,
  fontSize = 16,
  unit = 'px'
): string | string[] | Record<string, string> {
  if (input == null) {
    return input
  }
  switch (typeof input) {
    case 'object':
      if (Array.isArray(input)) {
        return input.map((val) => rem2px(val, fontSize, unit)) as string[]
      } else {
        const ret: Record<string, string> = {}
        for (const key in input) {
          ret[key] = rem2px(input[key], fontSize, unit) as string
        }
        return ret
      }
    case 'string':
      return input.replace(
        /(\d*\.?\d+)rem$/,
        (_, val) => parseFloat(val) * fontSize + unit
      )
    default:
      return input
  }
}

export { rem2px }
