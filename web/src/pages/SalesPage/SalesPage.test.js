import { render, cleanup } from '@testing-library/react'

import SalesPage from './SalesPage'

describe('SalesPage', () => {
  afterEach(() => {
    cleanup()
  })
  it('renders successfully', () => {
    expect(() => {
      render(<SalesPage />)
    }).not.toThrow()
  })
})
