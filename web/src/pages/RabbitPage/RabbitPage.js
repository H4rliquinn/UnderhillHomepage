import RabbitsLayout from 'src/layouts/RabbitsLayout'
import RabbitCell from 'src/components/RabbitCell'

const RabbitPage = ({ id }) => {
  return (
    <RabbitsLayout>
      <RabbitCell id={id} />
    </RabbitsLayout>
  )
}

export default RabbitPage
