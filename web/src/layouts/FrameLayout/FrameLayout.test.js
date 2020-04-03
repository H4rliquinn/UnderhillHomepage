import { render, cleanup } from '@testing-library/react'

import FrameLayout from './FrameLayout'

describe('FrameLayout', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<FrameLayout />)
    }).not.toThrow()
  })
})
