import { render } from '@testing-library/react'

import { RenderOptions } from '@testing-library/react'

const customRender = (ui: React.ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: ({ children }) => children, ...options })

export * from '@testing-library/react'
export { customRender as render }
