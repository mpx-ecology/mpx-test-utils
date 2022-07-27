
class Wrapper {
  constructor(comp, options) {
    this.comp = comp
  }
  attributes() {
    
  }
}

export default function createWrapper(comp, options = {}) {
  const componentInstance = comp.instance
  const wrapper = new Wrapper(comp, options)
  return wrapper
}
