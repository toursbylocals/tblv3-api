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

  type User {
    _id: ID!
    firstName: String!
    lastName: String!
    createdAt: String
    updatedAt: String
  }

  input UserInput {
    _id: ID!
    firstName: String!
    lastName: String!
  }

  type Payment {
    _id: ID!
    supplierId: ID!
    bookingsId: [ID!]
    paymentMethod: PaymentMethod
    currencyId: ID!
    provider: ID!
    createdAt: String
    updatedAt: String
  }

  type PaymentMethod {
    _id: ID!
    title: String!
    createdAt: String
    description: String
    updatedAt: String
  }

  type UserSettings {
    _id: ID!
    userId: ID!
    preferredLanguage: ID
    preferredCurrency: ID
    timeIn24HrFormat: Boolean
    lightMode: Boolean
    createdAt: String
    updatedAt: String
  }

  type Booking {
    _id: ID!
    paid: Boolean
    status: BookingStatus
    commissioned: Boolean
    supplierCommission: SupplierCommission
    total: Total
    checkoutId: ID!
    ownCommission: Int!
    rating: Int
    listingId: ID!
    category: String
    customerFeedback: String
    priceForOneUsd: Int!
    eventDetails: EventDetails
    createdAt: String!
    updatedAt: String
  }

  type Total {
    ttv: TTV
    local: Local
    exchangeRate: Int!
  }

  type TTV {
    total: Int!
    currencyId: ID!
  }

  type Local {
    total: Int!
    currencyId: ID!
  }

  type SupplierCommission {
    supplierOwner: ID!
    commissionRate: Int!
    total: TotalCommission
    percentualAddons: [Commission]
  }

  type Commission {
    supplierId: ID!
    commissionRate: Int!
    commissioned: Boolean
    owner: Boolean
  }

  type TotalCommission {
    total: Int!
    currencyId: ID!
  }

  type EventDetails {
    productTypeId: ID!
    snapshot: Snapshot

    
    
    vehicleId: ID
    concerns: Concerns
  }

  type Snapshot {
    leadCustomer: ID!
    location: Location
    meetingPoint: MeetingPoint
    startTime: String!
    endTime: String!
    date: String!
    duration: Int!
    capacity: Capacity
    addOns: Addons
    concerns: Concerns
  }

  type Addons {
    type: String
    value: String
  }

  type Location {
    coordinates: Coordinates!
    address: String!
  }

  type MeetingPoint {
    address: String!
    time: String!
    reference: String
    notes: String
  }

  type Capacity {
    adults: Int!
    children: Int
    infants: Int
  }

  type Concerns {
    medicalConcerns: String
    dietaryConcerns: String
  }

  type Coordinates {
    lat: Int!
    lng: Int!
  }

  enum BookingStatus {
    CANCELED
    COMPLETED
    PENDING
    NOT_RESPONDED
  }
`
