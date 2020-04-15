import { Link, routes } from '@redwoodjs/router'
import Rabbits from 'src/components/Rabbits'

export const QUERY = gql`
  query POSTS {
    rabbits {
      id
      eartag
      name
      color
      parents
      status
      pending
      price
      picture
    }
  }
`

export const beforeQuery = (props) => {
  return { variables: props, fetchPolicy: 'cache-and-network' }
}

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="text-center">
      {'No rabbits yet. '}
      <Link
        to={routes.newRabbit()}
        className="text-blue-500 underline hover:text-blue-700"
      >
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Success = ({ rabbits }) => {
  return <Rabbits rabbits={rabbits} />
}
