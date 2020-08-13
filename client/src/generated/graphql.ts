export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID */
  node?: Maybe<Node>;
  /** The currently logged in user. */
  viewer?: Maybe<User>;
};


export type QueryNodeArgs = {
  id: Scalars['ID'];
};

/** An object with an ID */
export type Node = {
  /** The id of the object. */
  id: Scalars['ID'];
};

export type User = Node & {
  __typename?: 'User';
  /** The ID of an object */
  id: Scalars['ID'];
  name: Scalars['String'];
  /** URL of the profile image of this user. */
  picture?: Maybe<Scalars['String']>;
  dogs?: Maybe<UserToDogConnection>;
  pending_invitations_sent?: Maybe<PendingInvitationConnection>;
  pending_invitations_received?: Maybe<PendingInvitationConnection>;
};


export type UserDogsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPending_Invitations_SentArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type UserPending_Invitations_ReceivedArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type UserToDogConnection = {
  __typename?: 'UserToDogConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserToDogEdge>>>;
};

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']>;
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']>;
};

/** An edge in a connection. */
export type UserToDogEdge = {
  __typename?: 'UserToDogEdge';
  /** The item at the end of the edge */
  node?: Maybe<Dog>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The role the user plays for the dog. */
  user_role?: Maybe<UserDogRole>;
};

export type Dog = Node & {
  __typename?: 'Dog';
  /** The ID of an object */
  id: Scalars['ID'];
  users?: Maybe<DogToUserConnection>;
  behaviors?: Maybe<BehaviorConnection>;
  name: Scalars['String'];
  /** URL of the profile image of this dog. */
  picture?: Maybe<Scalars['String']>;
};


export type DogUsersArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type DogBehaviorsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type DogToUserConnection = {
  __typename?: 'DogToUserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<DogToUserEdge>>>;
};

/** An edge in a connection. */
export type DogToUserEdge = {
  __typename?: 'DogToUserEdge';
  /** The item at the end of the edge */
  node?: Maybe<User>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The role the user plays for the dog. */
  user_role?: Maybe<UserDogRole>;
};

export enum UserDogRole {
  Owner = 'OWNER',
  Trainer = 'TRAINER',
  Viewer = 'VIEWER'
}

/** A connection to a list of items. */
export type BehaviorConnection = {
  __typename?: 'BehaviorConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<BehaviorEdge>>>;
};

/** An edge in a connection. */
export type BehaviorEdge = {
  __typename?: 'BehaviorEdge';
  /** The item at the end of the edge */
  node?: Maybe<Behavior>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type Behavior = Node & {
  __typename?: 'Behavior';
  /** The ID of an object */
  id: Scalars['ID'];
  dog?: Maybe<Dog>;
  name: Scalars['String'];
  /** Explanation of the desired behavior in clear, plain language. */
  explanation?: Maybe<Scalars['String']>;
  /** Description of the lure used in training. */
  lure_description?: Maybe<Scalars['String']>;
  /** Description of the shape used in training. */
  shape_description?: Maybe<Scalars['String']>;
  /** The verbal command used to cue this behavior. */
  verbal_command?: Maybe<Scalars['String']>;
  /** The hand signal used to cue this behavior. */
  hand_signal?: Maybe<Scalars['String']>;
  /** Description of the shape used in training. */
  has_duration: Scalars['Boolean'];
  /** The verbal command used to release this behavior. */
  release_command?: Maybe<Scalars['String']>;
};

/** A connection to a list of items. */
export type PendingInvitationConnection = {
  __typename?: 'PendingInvitationConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PendingInvitationEdge>>>;
};

/** An edge in a connection. */
export type PendingInvitationEdge = {
  __typename?: 'PendingInvitationEdge';
  /** The item at the end of the edge */
  node?: Maybe<PendingInvitation>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type PendingInvitation = Node & {
  __typename?: 'PendingInvitation';
  /** The ID of an object */
  id: Scalars['ID'];
  invitee_email: Scalars['String'];
  invited_by: User;
  user_role: UserDogRole;
  dog?: Maybe<Dog>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new dog with the currently logged in user as an 'owner'. */
  addDog?: Maybe<AddDogPayload>;
  editDog?: Maybe<EditDogPayload>;
  /** Invite an email address to collaborate training a dog */
  inviteUserByEmail?: Maybe<InviteUserByEmailPayload>;
  /** Accept an invitation to collaborate training a dog */
  acceptInvitation?: Maybe<AcceptInvitationPayload>;
  /** Create a new desired behavior for the specified dog */
  createBehavior?: Maybe<CreateBehaviorPayload>;
};


export type MutationAddDogArgs = {
  input: AddDogInput;
};


export type MutationEditDogArgs = {
  input: EditDogInput;
};


export type MutationInviteUserByEmailArgs = {
  input: InviteUserByEmailInput;
};


export type MutationAcceptInvitationArgs = {
  input: AcceptInvitationInput;
};


export type MutationCreateBehaviorArgs = {
  input: CreateBehaviorInput;
};

export type AddDogPayload = {
  __typename?: 'AddDogPayload';
  dogEdge: UserToDogEdge;
  viewer: User;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AddDogInput = {
  name: Scalars['String'];
  /** URL of the profile image of this dog. */
  picture?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type EditDogPayload = {
  __typename?: 'EditDogPayload';
  dog: Dog;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type EditDogInput = {
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  picture?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type InviteUserByEmailPayload = {
  __typename?: 'InviteUserByEmailPayload';
  viewer: User;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type InviteUserByEmailInput = {
  /** The email address of the user to invite */
  invitee_email: Scalars['String'];
  /** The ID of the dog to invite the user to collaborate to train */
  dog_id: Scalars['ID'];
  /** The role the user plays for the dog. */
  user_role: UserDogRole;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AcceptInvitationPayload = {
  __typename?: 'AcceptInvitationPayload';
  dogEdge: UserToDogEdge;
  viewer: User;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type AcceptInvitationInput = {
  invitation_id: Scalars['ID'];
  user_id: Scalars['ID'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBehaviorPayload = {
  __typename?: 'CreateBehaviorPayload';
  behaviorEdge: BehaviorEdge;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBehaviorInput = {
  dog_id: Scalars['ID'];
  name: Scalars['String'];
  /** Explanation of the desired behavior in clear, plain language. */
  explanation?: Maybe<Scalars['String']>;
  /** Description of the lure used in training. */
  lure_description?: Maybe<Scalars['String']>;
  /** Description of the shape used in training. */
  shape_description?: Maybe<Scalars['String']>;
  /** The verbal command used to cue this behavior. */
  verbal_command?: Maybe<Scalars['String']>;
  /** The hand signal used to cue this behavior. */
  hand_signal?: Maybe<Scalars['String']>;
  /** Description of the shape used in training. */
  has_duration: Scalars['Boolean'];
  /** The verbal command used to release this behavior. */
  release_command?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateBehaviorForm_DogFragment = (
  { __typename?: 'Dog' }
  & Pick<Dog, 'id' | 'name'>
);

export type DogCard_DogFragment = (
  { __typename?: 'Dog' }
  & Pick<Dog, 'name' | 'picture'>
);

export type DogDetailQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DogDetailQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | (
    { __typename?: 'Dog' }
    & DogCard_DogFragment
    & InviteUserByEmailForm_DogFragment
    & CreateBehaviorForm_DogFragment
  ) | { __typename?: 'Behavior' } | { __typename?: 'PendingInvitation' }> }
);

export type DogsApp_ViewerFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id'>
  & DogsList_ViewerFragment
);

export type DogsList_ViewerFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id'>
  & { dogs?: Maybe<(
    { __typename?: 'UserToDogConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'UserToDogEdge' }
      & Pick<UserToDogEdge, 'user_role'>
      & { node?: Maybe<(
        { __typename?: 'Dog' }
        & Pick<Dog, 'id'>
        & DogCard_DogFragment
      )> }
    )>>> }
  )> }
);

export type DogsPageQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type DogsPageQueryQuery = (
  { __typename?: 'Query' }
  & { viewer?: Maybe<(
    { __typename?: 'User' }
    & DogsApp_ViewerFragment
    & PendingInvitations_ViewerFragment
  )> }
);

export type InviteUserByEmailForm_DogFragment = (
  { __typename?: 'Dog' }
  & Pick<Dog, 'id' | 'name' | 'picture'>
);

export type PendingInvitations_ViewerFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id'>
  & { pending_invitations_received?: Maybe<(
    { __typename?: 'PendingInvitationConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'PendingInvitationEdge' }
      & { node?: Maybe<(
        { __typename?: 'PendingInvitation' }
        & Pick<PendingInvitation, 'id' | 'invitee_email' | 'user_role'>
        & { dog?: Maybe<(
          { __typename?: 'Dog' }
          & Pick<Dog, 'name' | 'picture' | 'id'>
        )>, invited_by: (
          { __typename?: 'User' }
          & Pick<User, 'name'>
        ) }
      )> }
    )>>> }
  )> }
);
