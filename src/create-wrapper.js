
class Wrapper {
  constructor(comp, options) {
    this.comp = comp
    this.options = {}
  }
  attributes() {
    return this.comp.attributes
  }
  classes() {

  }
  contains() {

  }
  destroy() {

  }
  emitted() {

  }
  emittedByOrder() {

  }
  exists() {

  }
  find() {

  }
  findAll() {

  }
  findComponent() {

  }
  findAllComponent() {

  }
  html() {

  }
  get() {

  }
  is () {

  }
  isEmpty() {

  }
  isVisible() {

  }
  isVueInstance() {

  }
  name() {

  }
  props() {

  }
  setChecked() {

  }
  setData() {

  }
  setMethods() {

  }
  setProps() {

  }
  setSelected() {

  }
  setValue() {

  }
  text() {

  }
  trigger() {

  }
}

export default function createWrapper(comp, options = {}) {
  const componentInstance = comp.instance
  const wrapper = new Wrapper(comp, options)
  return wrapper
}
