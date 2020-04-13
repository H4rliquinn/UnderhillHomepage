import RabbitsLayout from 'src/layouts/RabbitsLayout'
import EditRabbitCell from 'src/components/EditRabbitCell'

const EditRabbitPage = ({ id }) => {
  return (
    <RabbitsLayout>
      <EditRabbitCell id={id} />
    </RabbitsLayout>
  )
}

export default EditRabbitPage
