// ==================== USAGE ====================
// Lighten colorConversion("#F06D06", 20)

// Darken colorConversion("#F06D06", -20)

export const get = item => typeof item !== 'undefined'
export const colorConversion = (hexColor, contrast) => {
  let usePound = false
  if (hexColor[0] === '#') {
    hexColor = hexColor.slice(1)
    usePound = true
  }

  let num = parseInt(hexColor, 16)

  let r = (num >> 16) + contrast

  if (r > 255) r = 255
  else if (r < 0) r = 0

  let b = ((num >> 8) & 0x00ff) + contrast

  if (b > 255) b = 255
  else if (b < 0) b = 0

  let g = (num & 0x0000ff) + contrast

  if (g > 255) g = 255
  else if (g < 0) g = 0

  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}

export const isObject = item =>
  item && typeof item === 'object' && !Array.isArray(item)

export const deepMerge = (target, ...sources) => {
  if (!sources.length) {
    return target
  }
  // making sure to not change target (immutable)
  const output = { ...target }
  sources.forEach(source => {
    if (isObject(source)) {
      Object.keys(source).forEach(key => {
        if (isObject(source[key])) {
          if (!output[key]) {
            output[key] = { ...source[key] }
          } else {
            output[key] = deepMerge(output[key], source[key])
          }
        } else {
          output[key] = source[key]
        }
      })
    }
  })
  return output
}

export const isEmpty = list => Array.isArray(list) && list.length === 0
