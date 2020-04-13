export const schema = gql`
  type Rabbit {
    id: Int!
    eartag: String
    name: String
    color: String!
    parents: String!
    status: Status!
    price: Float
    picture: String!
  }

  type Query {
    rabbits: [Rabbit]
    rabbit(id: Int!): Rabbit
  }

  input RabbitInput {
    eartag: String
    name: String
    color: String
    parents: String
    status: Status
    price: Float
    picture: String
  }

  type Mutation {
    createRabbit(input: RabbitInput!): Rabbit
    updateRabbit(id: Int!, input: RabbitInput!): Rabbit
    deleteRabbit(id: Int!): Rabbit
  }
`
