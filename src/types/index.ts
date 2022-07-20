import { GraphQLResolveInfo } from 'graphql'
import { IUserSchema, IPaymentMethodSchema } from './mongoModels'
import { Context } from './other'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Addons = {
  __typename?: 'Addons'
  type?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
}

export type Booking = {
  __typename?: 'Booking'
  _id: Scalars['ID']
  category?: Maybe<Scalars['String']>
  checkoutId: Scalars['ID']
  commissioned?: Maybe<Scalars['Boolean']>
  createdAt: Scalars['String']
  customerFeedback?: Maybe<Scalars['String']>
  eventDetails?: Maybe<EventDetails>
  listingId: Scalars['ID']
  ownCommission: Scalars['Int']
  paid?: Maybe<Scalars['Boolean']>
  priceForOneUsd: Scalars['Int']
  rating?: Maybe<Scalars['Int']>
  status?: Maybe<BookingStatus>
  supplierCommission?: Maybe<SupplierCommission>
  total?: Maybe<Total>
  updatedAt?: Maybe<Scalars['String']>
}

export enum BookingStatus {
  Canceled = 'CANCELED',
  Completed = 'COMPLETED',
  NotResponded = 'NOT_RESPONDED',
  Pending = 'PENDING'
}

export type Capacity = {
  __typename?: 'Capacity'
  adults: Scalars['Int']
  children?: Maybe<Scalars['Int']>
  infants?: Maybe<Scalars['Int']>
}

export type Commission = {
  __typename?: 'Commission'
  commissionRate: Scalars['Int']
  commissioned?: Maybe<Scalars['Boolean']>
  owner?: Maybe<Scalars['Boolean']>
  supplierId: Scalars['ID']
}

export type Concerns = {
  __typename?: 'Concerns'
  dietaryConcerns?: Maybe<Scalars['String']>
  medicalConcerns?: Maybe<Scalars['String']>
}

export type Coordinates = {
  __typename?: 'Coordinates'
  lat: Scalars['Int']
  lng: Scalars['Int']
}

export type EventDetails = {
  __typename?: 'EventDetails'
  concerns?: Maybe<Concerns>
  productTypeId: Scalars['ID']
  snapshot?: Maybe<Snapshot>
  vehicleId?: Maybe<Scalars['ID']>
}

export type Interest = {
  __typename?: 'Interest'
  id: Scalars['ID']
  name: Scalars['String']
}

export type Local = {
  __typename?: 'Local'
  currencyId: Scalars['ID']
  total: Scalars['Int']
}

export type Location = {
  __typename?: 'Location'
  address: Scalars['String']
  city?: Maybe<Scalars['String']>
  coordinates: Coordinates
  country?: Maybe<Scalars['String']>
}

export type Media = {
  __typename?: 'Media'
  type?: Maybe<Scalars['String']>
  url?: Maybe<Scalars['String']>
}

export type MeetingPoint = {
  __typename?: 'MeetingPoint'
  address: Scalars['String']
  notes?: Maybe<Scalars['String']>
  reference?: Maybe<Scalars['String']>
  time: Scalars['String']
}

export type Mutation = {
  __typename?: 'Mutation'
  createPaymentMethod: PaymentMethod
}

export type MutationCreatePaymentMethodArgs = {
  paymentMethodName: Scalars['String']
}

export type Password = {
  __typename?: 'Password'
  app: Scalars['String']
  password: Scalars['String']
}

export type Payment = {
  __typename?: 'Payment'
  _id: Scalars['ID']
  bookingsId?: Maybe<Array<Scalars['ID']>>
  createdAt?: Maybe<Scalars['String']>
  currencyId: Scalars['ID']
  paymentMethod?: Maybe<PaymentMethod>
  provider: Scalars['ID']
  supplierId: Scalars['ID']
  updatedAt?: Maybe<Scalars['String']>
}

export type PaymentMethod = {
  __typename?: 'PaymentMethod'
  _id: Scalars['ID']
  createdAt?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  title: Scalars['String']
  updatedAt?: Maybe<Scalars['String']>
}

export type Query = {
  __typename?: 'Query'
  me: User
  paymentMethods: Array<Maybe<PaymentMethod>>
}

export type QueryMeArgs = {
  userInput: UserInput
}

export type Snapshot = {
  __typename?: 'Snapshot'
  addOns?: Maybe<Addons>
  capacity?: Maybe<Capacity>
  concerns?: Maybe<Concerns>
  date: Scalars['String']
  duration: Scalars['Int']
  endTime: Scalars['String']
  leadCustomer: Scalars['ID']
  location?: Maybe<Location>
  meetingPoint?: Maybe<MeetingPoint>
  startTime: Scalars['String']
}

export type Squad = {
  __typename?: 'Squad'
  role: Scalars['String']
  squad: Scalars['String']
}

export type SupplierCommission = {
  __typename?: 'SupplierCommission'
  commissionRate: Scalars['Int']
  percentualAddons?: Maybe<Array<Maybe<Commission>>>
  supplierOwner: Scalars['ID']
  total?: Maybe<TotalCommission>
}

export type Ttv = {
  __typename?: 'TTV'
  currencyId: Scalars['ID']
  total: Scalars['Int']
}

export type Total = {
  __typename?: 'Total'
  exchangeRate: Scalars['Int']
  local?: Maybe<Local>
  ttv?: Maybe<Ttv>
}

export type TotalCommission = {
  __typename?: 'TotalCommission'
  currencyId: Scalars['ID']
  total: Scalars['Int']
}

export type User = {
  __typename?: 'User'
  _id: Scalars['ID']
  createdAt?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  email: Scalars['String']
  firstName: Scalars['String']
  language?: Maybe<Scalars['String']>
  lastLogin?: Maybe<Scalars['String']>
  lastName: Scalars['String']
  location?: Maybe<Location>
  password: Array<Maybe<Password>>
  phone: Scalars['String']
  squad: Array<Maybe<Squad>>
  status: Scalars['String']
  updatedAt?: Maybe<Scalars['String']>
}

export type UserInput = {
  _id: Scalars['ID']
  firstName: Scalars['String']
  lastName: Scalars['String']
}

export type UserSettings = {
  __typename?: 'UserSettings'
  _id: Scalars['ID']
  createdAt?: Maybe<Scalars['String']>
  lightMode?: Maybe<Scalars['Boolean']>
  preferredCurrency?: Maybe<Scalars['ID']>
  preferredLanguage?: Maybe<Scalars['ID']>
  timeIn24HrFormat?: Maybe<Scalars['Boolean']>
  updatedAt?: Maybe<Scalars['String']>
  userId: Scalars['ID']
}

export type ResolverTypeWrapper<T> = Promise<T> | T

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>
}
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>

export type NextResolverFn<T> = () => Promise<T>

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Addons: ResolverTypeWrapper<Addons>
  Booking: ResolverTypeWrapper<Booking>
  BookingStatus: BookingStatus
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>
  Capacity: ResolverTypeWrapper<Capacity>
  Commission: ResolverTypeWrapper<Commission>
  Concerns: ResolverTypeWrapper<Concerns>
  Coordinates: ResolverTypeWrapper<Coordinates>
  EventDetails: ResolverTypeWrapper<EventDetails>
  ID: ResolverTypeWrapper<Scalars['ID']>
  Int: ResolverTypeWrapper<Scalars['Int']>
  Interest: ResolverTypeWrapper<Interest>
  Local: ResolverTypeWrapper<Local>
  Location: ResolverTypeWrapper<Location>
  Media: ResolverTypeWrapper<Media>
  MeetingPoint: ResolverTypeWrapper<MeetingPoint>
  Mutation: ResolverTypeWrapper<{}>
  Password: ResolverTypeWrapper<Password>
  Payment: ResolverTypeWrapper<
    Omit<Payment, 'paymentMethod'> & { paymentMethod?: Maybe<ResolversTypes['PaymentMethod']> }
  >
  PaymentMethod: ResolverTypeWrapper<IPaymentMethodSchema>
  Query: ResolverTypeWrapper<{}>
  Snapshot: ResolverTypeWrapper<Snapshot>
  Squad: ResolverTypeWrapper<Squad>
  String: ResolverTypeWrapper<Scalars['String']>
  SupplierCommission: ResolverTypeWrapper<SupplierCommission>
  TTV: ResolverTypeWrapper<Ttv>
  Total: ResolverTypeWrapper<Total>
  TotalCommission: ResolverTypeWrapper<TotalCommission>
  User: ResolverTypeWrapper<IUserSchema>
  UserInput: UserInput
  UserSettings: ResolverTypeWrapper<UserSettings>
}

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Addons: Addons
  Booking: Booking
  Boolean: Scalars['Boolean']
  Capacity: Capacity
  Commission: Commission
  Concerns: Concerns
  Coordinates: Coordinates
  EventDetails: EventDetails
  ID: Scalars['ID']
  Int: Scalars['Int']
  Interest: Interest
  Local: Local
  Location: Location
  Media: Media
  MeetingPoint: MeetingPoint
  Mutation: {}
  Password: Password
  Payment: Omit<Payment, 'paymentMethod'> & {
    paymentMethod?: Maybe<ResolversParentTypes['PaymentMethod']>
  }
  PaymentMethod: IPaymentMethodSchema
  Query: {}
  Snapshot: Snapshot
  Squad: Squad
  String: Scalars['String']
  SupplierCommission: SupplierCommission
  TTV: Ttv
  Total: Total
  TotalCommission: TotalCommission
  User: IUserSchema
  UserInput: UserInput
  UserSettings: UserSettings
}

export type AddonsResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Addons'] = ResolversParentTypes['Addons']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type BookingResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Booking'] = ResolversParentTypes['Booking']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  checkoutId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  commissioned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  createdAt?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  customerFeedback?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  eventDetails?: Resolver<Maybe<ResolversTypes['EventDetails']>, ParentType, ContextType>
  listingId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  ownCommission?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  paid?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  priceForOneUsd?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  rating?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  status?: Resolver<Maybe<ResolversTypes['BookingStatus']>, ParentType, ContextType>
  supplierCommission?: Resolver<
    Maybe<ResolversTypes['SupplierCommission']>,
    ParentType,
    ContextType
  >
  total?: Resolver<Maybe<ResolversTypes['Total']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CapacityResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Capacity'] = ResolversParentTypes['Capacity']
> = {
  adults?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  children?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  infants?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CommissionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Commission'] = ResolversParentTypes['Commission']
> = {
  commissionRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  commissioned?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  owner?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  supplierId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type ConcernsResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Concerns'] = ResolversParentTypes['Concerns']
> = {
  dietaryConcerns?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  medicalConcerns?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type CoordinatesResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Coordinates'] = ResolversParentTypes['Coordinates']
> = {
  lat?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  lng?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type EventDetailsResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['EventDetails'] = ResolversParentTypes['EventDetails']
> = {
  concerns?: Resolver<Maybe<ResolversTypes['Concerns']>, ParentType, ContextType>
  productTypeId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  snapshot?: Resolver<Maybe<ResolversTypes['Snapshot']>, ParentType, ContextType>
  vehicleId?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type InterestResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Interest'] = ResolversParentTypes['Interest']
> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type LocalResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Local'] = ResolversParentTypes['Local']
> = {
  currencyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type LocationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Location'] = ResolversParentTypes['Location']
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  coordinates?: Resolver<ResolversTypes['Coordinates'], ParentType, ContextType>
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MediaResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Media'] = ResolversParentTypes['Media']
> = {
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MeetingPointResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['MeetingPoint'] = ResolversParentTypes['MeetingPoint']
> = {
  address?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  reference?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  time?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type MutationResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = {
  createPaymentMethod?: Resolver<
    ResolversTypes['PaymentMethod'],
    ParentType,
    ContextType,
    RequireFields<MutationCreatePaymentMethodArgs, 'paymentMethodName'>
  >
}

export type PasswordResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Password'] = ResolversParentTypes['Password']
> = {
  app?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  password?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PaymentResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Payment'] = ResolversParentTypes['Payment']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  bookingsId?: Resolver<Maybe<Array<ResolversTypes['ID']>>, ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  currencyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  paymentMethod?: Resolver<Maybe<ResolversTypes['PaymentMethod']>, ParentType, ContextType>
  provider?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  supplierId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type PaymentMethodResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['PaymentMethod'] = ResolversParentTypes['PaymentMethod']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type QueryResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  me?: Resolver<
    ResolversTypes['User'],
    ParentType,
    ContextType,
    RequireFields<QueryMeArgs, 'userInput'>
  >
  paymentMethods?: Resolver<Array<Maybe<ResolversTypes['PaymentMethod']>>, ParentType, ContextType>
}

export type SnapshotResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Snapshot'] = ResolversParentTypes['Snapshot']
> = {
  addOns?: Resolver<Maybe<ResolversTypes['Addons']>, ParentType, ContextType>
  capacity?: Resolver<Maybe<ResolversTypes['Capacity']>, ParentType, ContextType>
  concerns?: Resolver<Maybe<ResolversTypes['Concerns']>, ParentType, ContextType>
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  duration?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  endTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  leadCustomer?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>
  meetingPoint?: Resolver<Maybe<ResolversTypes['MeetingPoint']>, ParentType, ContextType>
  startTime?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SquadResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Squad'] = ResolversParentTypes['Squad']
> = {
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  squad?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type SupplierCommissionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['SupplierCommission'] = ResolversParentTypes['SupplierCommission']
> = {
  commissionRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  percentualAddons?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Commission']>>>,
    ParentType,
    ContextType
  >
  supplierOwner?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  total?: Resolver<Maybe<ResolversTypes['TotalCommission']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type TtvResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['TTV'] = ResolversParentTypes['TTV']
> = {
  currencyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type TotalResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['Total'] = ResolversParentTypes['Total']
> = {
  exchangeRate?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  local?: Resolver<Maybe<ResolversTypes['Local']>, ParentType, ContextType>
  ttv?: Resolver<Maybe<ResolversTypes['TTV']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type TotalCommissionResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['TotalCommission'] = ResolversParentTypes['TotalCommission']
> = {
  currencyId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  total?: Resolver<ResolversTypes['Int'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  language?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lastLogin?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  location?: Resolver<Maybe<ResolversTypes['Location']>, ParentType, ContextType>
  password?: Resolver<Array<Maybe<ResolversTypes['Password']>>, ParentType, ContextType>
  phone?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  squad?: Resolver<Array<Maybe<ResolversTypes['Squad']>>, ParentType, ContextType>
  status?: Resolver<ResolversTypes['String'], ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type UserSettingsResolvers<
  ContextType = Context,
  ParentType extends ResolversParentTypes['UserSettings'] = ResolversParentTypes['UserSettings']
> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  createdAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  lightMode?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  preferredCurrency?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  preferredLanguage?: Resolver<Maybe<ResolversTypes['ID']>, ParentType, ContextType>
  timeIn24HrFormat?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>
  updatedAt?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>
  userId?: Resolver<ResolversTypes['ID'], ParentType, ContextType>
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>
}

export type Resolvers<ContextType = Context> = {
  Addons?: AddonsResolvers<ContextType>
  Booking?: BookingResolvers<ContextType>
  Capacity?: CapacityResolvers<ContextType>
  Commission?: CommissionResolvers<ContextType>
  Concerns?: ConcernsResolvers<ContextType>
  Coordinates?: CoordinatesResolvers<ContextType>
  EventDetails?: EventDetailsResolvers<ContextType>
  Interest?: InterestResolvers<ContextType>
  Local?: LocalResolvers<ContextType>
  Location?: LocationResolvers<ContextType>
  Media?: MediaResolvers<ContextType>
  MeetingPoint?: MeetingPointResolvers<ContextType>
  Mutation?: MutationResolvers<ContextType>
  Password?: PasswordResolvers<ContextType>
  Payment?: PaymentResolvers<ContextType>
  PaymentMethod?: PaymentMethodResolvers<ContextType>
  Query?: QueryResolvers<ContextType>
  Snapshot?: SnapshotResolvers<ContextType>
  Squad?: SquadResolvers<ContextType>
  SupplierCommission?: SupplierCommissionResolvers<ContextType>
  TTV?: TtvResolvers<ContextType>
  Total?: TotalResolvers<ContextType>
  TotalCommission?: TotalCommissionResolvers<ContextType>
  User?: UserResolvers<ContextType>
  UserSettings?: UserSettingsResolvers<ContextType>
}
