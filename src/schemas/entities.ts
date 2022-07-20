import { gql } from 'apollo-server-express'

export default gql`
  schema {
    query: Query
    mutation: Mutation
  }

  type Query {
    me(userInput: UserInput!): User!
    paymentMethods: [PaymentMethod]!
  }

  type Mutation {
    createPaymentMethod(paymentMethodName: String!): PaymentMethod!
  }

  type Location {
    city: String
    country: String
  }

  type Interest {
    id: ID!
    name: String!
  }

  type Squad {
    squad: String!
    role: String!
  }

  type Password {
    app: String!
    password: String!
  }

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    email: String!
    password: [Password]!
    squad: [Squad]!
    status: String!
    location: Location
    phone: String!
    lastLogin: String
    description: String
    createdAt: String
    updatedAt: String
    language: String
  }

  input UserInput {
    _id: ID!
    firstName: String!
    lastName: String!
  }

  type PaymentMethod {
    _id: ID!
    title: String!
    createdAt: String
    description: String
    updatedAt: String
  }

  type Media {
    type: String
    url: String
  }

  type ProductType {
    product: ID!
    customTour: Boolean
    shareExcursion: Int
    tickets: Int
    transportation: String
  }

  type Listing {
    _id: ID!
    productType: ProductType
    title: String
    description: String
    seller: ID
    price: Int
    addons: [Addons]
    location: String
    startTime: String
    status: ListingStatus
    promoCodes: String
    category: String
    trait: String
    definition: Definitions
  }

  type Addons {
    seller: String
    rules: String
    type: String
    price: Int
  }

  enum ListingStatus {
    CANCELED
    COMPLETED
    PENDING
  }

  type Definitions {
    stops: String
    title: String
    description: String
    photoUrl: String
  }

  type Trait {
    traits: String
  }

  type StoreCredit {
    credit: String
  }

  type Category {
    category: String
  }
`
