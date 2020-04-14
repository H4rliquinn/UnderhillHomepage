import RabbitsLayout from 'src/layouts/RabbitsLayout'
import FrameLayout from 'src/layouts/FrameLayout'
import NewRabbit from 'src/components/NewRabbit'

const NewRabbitPage = () => {
  return (
    <FrameLayout>
      <RabbitsLayout>
        <NewRabbit />
      </RabbitsLayout>
    </FrameLayout>
  )
}

export default NewRabbitPage
