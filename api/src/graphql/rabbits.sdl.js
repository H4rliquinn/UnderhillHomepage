export const schema = gql`
  type Rabbit {
    id: Int!
    eartag: String
    name: String
    color: String!
    parents: String!
    status: String!
    pending: String
    price: Float
    picture: String!
  }

  type Query {
    rabbits(status: String): [Rabbit]
    rabbit(id: Int!): Rabbit
  }

  input RabbitInput {
    eartag: String
    name: String
    color: String
    parents: String
    status: String
    pending: String
    price: Float
    picture: String
  }

  type Mutation {
    createRabbit(input: RabbitInput!): Rabbit
    updateRabbit(id: Int!, input: RabbitInput!): Rabbit
    deleteRabbit(id: Int!): Rabbit
  }
`
