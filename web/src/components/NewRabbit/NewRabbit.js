import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RabbitForm from 'src/components/RabbitForm'

const CREATE_POST_MUTATION = gql`
  mutation CreateRabbitMutation($input: RabbitInput!) {
    createRabbit(input: $input) {
      id
    }
  }
`

const NewRabbit = () => {
  const [createRabbit, { loading, error }] = useMutation(CREATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.rabbits())
    },
  })

  const onSave = (input) => {
    createRabbit({ variables: { input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">New Rabbit</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <RabbitForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRabbit
