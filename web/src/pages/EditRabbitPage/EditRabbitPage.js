import RabbitsLayout from 'src/layouts/RabbitsLayout'
import FrameLayout from 'src/layouts/FrameLayout'
import EditRabbitCell from 'src/components/EditRabbitCell'

const EditRabbitPage = ({ id }) => {
  return (
    <FrameLayout>
      <RabbitsLayout>
        <EditRabbitCell id={id} />
      </RabbitsLayout>
    </FrameLayout>
  )
}

export default EditRabbitPage
