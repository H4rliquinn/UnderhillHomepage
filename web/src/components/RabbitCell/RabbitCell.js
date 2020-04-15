import Rabbit from 'src/components/Rabbit'

export const QUERY = gql`
  query FIND_POST_BY_ID($id: Int!) {
    rabbit: rabbit(id: $id) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Rabbit not found</div>

export const Success = ({ rabbit }) => {
  return <Rabbit rabbit={rabbit} />
}
