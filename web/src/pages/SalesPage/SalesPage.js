import SalesCell from 'src/components/SalesCell'

import FrameLayout from 'src/layouts/FrameLayout/FrameLayout'
const SalePage = () => {
  return (
    <FrameLayout>
      <h1>Sales Page</h1>
      <p>Bunns for sale</p>
      <SalesCell />
    </FrameLayout>
  )
}

export default SalePage
