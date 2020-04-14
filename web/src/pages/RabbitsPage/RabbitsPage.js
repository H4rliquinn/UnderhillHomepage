import RabbitsLayout from 'src/layouts/RabbitsLayout'
import FrameLayout from 'src/layouts/FrameLayout'
import RabbitsCell from 'src/components/RabbitsCell'

const RabbitsPage = () => {
  return (
    <FrameLayout>
      <RabbitsLayout>
        <RabbitsCell />
      </RabbitsLayout>
    </FrameLayout>
  )
}

export default RabbitsPage
