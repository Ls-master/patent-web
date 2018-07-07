// @flow
export default {
  getType(v: any): string {
    return Object.prototype.toString.call(v)
  },
  toKebab(v: string): string {
    return v.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()
  },
  isArray(v: any): boolean {
    return this.getType(v) === '[object Array]'
  },
  isObject(v: any): boolean {
    return this.getType(v) === '[object Object]'
  }
}
