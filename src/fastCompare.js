/* eslint-disable */
let isArray = Array.isArray
let keyList = Object.keys
let hasProp = Object.prototype.hasOwnProperty

export default function equal (a, b) {
  if (a === b) return true

  if (a && b && typeof a === 'object' && typeof b === 'object') {
    let arrA = isArray(a)
    let arrB = isArray(b)
    let i
    let length
    let key

    if (arrA && arrB) {
      length = a.length
      if (length !== b.length) return false
      for (i = length; i-- !== 0;) if (!equal(a[i], b[i])) return false
      return true
    }

    // eslint-disable-next-line eqeqeq
    if (arrA !== arrB) return false

    let dateA = a instanceof Date
    let dateB = b instanceof Date
    if (dateA !== dateB) return false
    if (dateA && dateB) return a.getTime() === b.getTime()

    let regexpA = a instanceof RegExp
    let regexpB = b instanceof RegExp
    if (regexpA !== regexpB) return false
    if (regexpA && regexpB) return a.toString() === b.toString()

    let keys = keyList(a)
    length = keys.length

    if (length !== keyList(b).length) return false

    for (i = length; i-- !== 0;) if (!hasProp.call(b, keys[i])) return false

    for (i = length; i-- !== 0;) {
      key = keys[i]
      if (!equal(a[key], b[key])) return false
    }

    return true
  }

  return a !== a && b !== b
}
