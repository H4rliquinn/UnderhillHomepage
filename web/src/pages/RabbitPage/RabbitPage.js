import RabbitsLayout from 'src/layouts/RabbitsLayout'
import FrameLayout from 'src/layouts/FrameLayout'
import RabbitCell from 'src/components/RabbitCell'

const RabbitPage = ({ id }) => {
  return (
    <FrameLayout>
      <RabbitsLayout>
        <RabbitCell id={id} />
      </RabbitsLayout>
    </FrameLayout>
  )
}

export default RabbitPage
