export default {
  clone(v) {
    return JSON.parse(JSON.stringify(v))
  },
  getType(v) {
    return Object.prototype.toString.call(v)
  },
  toKebab(v) {
    return v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  },
  isArray(v) {
    return getType(v) === '[object Array]'
  },
  isObject(v) {
    return getType(v) === '[object Object]'
  }
}
