import { render, cleanup } from '@testing-library/react'

import ComingPage from './ComingPage'

describe('ComingPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<ComingPage />)
    }).not.toThrow()
  })
})
