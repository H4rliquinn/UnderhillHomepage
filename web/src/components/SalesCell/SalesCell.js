export const QUERY = gql`
  query {
    sales {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ sales }) => {
  return JSON.stringify(sales)
}
