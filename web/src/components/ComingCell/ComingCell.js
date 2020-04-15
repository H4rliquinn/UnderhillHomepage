import RabbitCard from 'src/components/RabbitCard'

export const QUERY = gql`
  query SALES {
    rabbits(status: "COMING") {
      id
      name
      color
      pending
      price
      picture
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ rabbits }) => {
  return <RabbitCard rabbits={rabbits} />
}
