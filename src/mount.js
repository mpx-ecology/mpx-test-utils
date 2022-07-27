import simulate from '@mpxjs/miniprogram-simulate'
import createWrapper from "@mpxjs/test-utils/src/create-wrapper";

export default function mount(compPath, renderProps) {
  const id = simulate.loadMpx(compPath)
  let comp = simulate.render(id, renderProps)
  return createWrapper(comp, {})
}
