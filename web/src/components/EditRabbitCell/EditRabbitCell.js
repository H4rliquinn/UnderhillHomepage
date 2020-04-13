import { useMutation } from '@redwoodjs/web'
import { navigate, routes } from '@redwoodjs/router'
import RabbitForm from 'src/components/RabbitForm'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    rabbit: rabbit(id: $id) {
      id
      eartag
      name
      color
      parents
      status
      price
      picture
    }
  }
`
const UPDATE_POST_MUTATION = gql`
  mutation UpdateRabbitMutation($id: Int!, $input: RabbitInput!) {
    updateRabbit(id: $id, input: $input) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Success = ({ rabbit }) => {
  const [updateRabbit, { loading, error }] = useMutation(UPDATE_POST_MUTATION, {
    onCompleted: () => {
      navigate(routes.rabbits())
    },
  })

  const onSave = (input, id) => {
    updateRabbit({ variables: { id, input } })
  }

  return (
    <div className="bg-white border rounded-lg overflow-hidden">
      <header className="bg-gray-300 text-gray-700 py-3 px-4">
        <h2 className="text-sm font-semibold">Edit Rabbit {rabbit.id}</h2>
      </header>
      <div className="bg-gray-100 p-4">
        <RabbitForm rabbit={rabbit} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
