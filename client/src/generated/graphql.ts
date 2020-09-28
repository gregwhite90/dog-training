export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
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
  dogs: UserToDogConnection;
  pending_invitations_sent: PendingInvitationConnection;
  pending_invitations_received: PendingInvitationConnection;
  training_sessions: UserToTrainingSessionConnection;
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


export type UserTraining_SessionsArgs = {
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
  user_role: UserDogRole;
};

export type Dog = Node & {
  __typename?: 'Dog';
  /** The ID of an object */
  id: Scalars['ID'];
  users: DogToUserConnection;
  behaviors: BehaviorConnection;
  trainingSessions: TrainingSessionConnection;
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


export type DogTrainingSessionsArgs = {
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
  user_role: UserDogRole;
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
  dog: Dog;
  trainingStages: TrainingStageConnection;
  trainingSessions: TrainingSessionConnection;
  name: Scalars['String'];
  /** Explanation of the desired behavior in clear, plain language. */
  explanation?: Maybe<Scalars['String']>;
  /** The method of incentivizing used to entice behavior before commands or hand signals are used. */
  incentive_method?: Maybe<IncentiveMethod>;
  /** Description of the incentive method used in training. */
  incentive_description?: Maybe<Scalars['String']>;
  /** The verbal command used to cue this behavior. */
  verbal_command?: Maybe<Scalars['String']>;
  /** The hand signal used to cue this behavior. */
  hand_signal?: Maybe<Scalars['String']>;
  /** Whether this behavior has a duration component. */
  has_duration: Scalars['Boolean'];
  /** The verbal command used to release this behavior. */
  release_command?: Maybe<Scalars['String']>;
};


export type BehaviorTrainingStagesArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type BehaviorTrainingSessionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type TrainingStageConnection = {
  __typename?: 'TrainingStageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TrainingStageEdge>>>;
};

/** An edge in a connection. */
export type TrainingStageEdge = {
  __typename?: 'TrainingStageEdge';
  /** The item at the end of the edge */
  node?: Maybe<TrainingStage>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export type TrainingStage = Node & {
  __typename?: 'TrainingStage';
  /** The ID of an object */
  id: Scalars['ID'];
  behavior: Behavior;
  trainingSessions?: Maybe<TrainingStageToTrainingSessionConnection>;
  /** The order within the sequence of training stages for this behavior */
  seq: Scalars['Int'];
  /** Whether this stage includes an incentive method */
  incentive: Scalars['Boolean'];
  /** Whether this stage includes a verbal command */
  verbal: Scalars['Boolean'];
  /** Whether this stage includes a hand signal */
  hand: Scalars['Boolean'];
  /** How frequently successful behavior is rewarded. */
  reward_frequency: RewardFrequency;
};


export type TrainingStageTrainingSessionsArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type TrainingStageToTrainingSessionConnection = {
  __typename?: 'TrainingStageToTrainingSessionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TrainingStageToTrainingSessionEdge>>>;
};

/** An edge in a connection. */
export type TrainingStageToTrainingSessionEdge = {
  __typename?: 'TrainingStageToTrainingSessionEdge';
  /** The item at the end of the edge */
  node?: Maybe<TrainingSession>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** Order within the sequence of training progresses in this training session */
  seq: Scalars['Int'];
  /** The number of successful attempts of this training stage */
  successes?: Maybe<Scalars['Int']>;
  /** The number of total attempts of this training stage */
  attempts?: Maybe<Scalars['Int']>;
  /** A qualitative assessment of the distance between human and dog while training this stage */
  distance?: Maybe<QualitativeLevel>;
  /** A qualitative assessment of the duration of the behavior attempted while training this stage */
  duration?: Maybe<QualitativeLevel>;
  /** A qualitative assessment of the amount of distractions for the dog while training this stage */
  distractions?: Maybe<QualitativeLevel>;
};

export type TrainingSession = Node & {
  __typename?: 'TrainingSession';
  /** The ID of an object */
  id: Scalars['ID'];
  dog: Dog;
  trainingStages: TrainingSessionToTrainingStageConnection;
  users: TrainingSessionToUserConnection;
  /** The length of the training session, in minutes */
  minutes_long?: Maybe<Scalars['Int']>;
  /** When this training session was started */
  start_timestamp: Scalars['DateTime'];
};


export type TrainingSessionTrainingStagesArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};


export type TrainingSessionUsersArgs = {
  after?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Int']>;
  before?: Maybe<Scalars['String']>;
  last?: Maybe<Scalars['Int']>;
};

/** A connection to a list of items. */
export type TrainingSessionToTrainingStageConnection = {
  __typename?: 'TrainingSessionToTrainingStageConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TrainingSessionToTrainingStageEdge>>>;
};

/** An edge in a connection. */
export type TrainingSessionToTrainingStageEdge = {
  __typename?: 'TrainingSessionToTrainingStageEdge';
  /** The item at the end of the edge */
  node?: Maybe<TrainingStage>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** Order within the sequence of training progresses in this training session */
  seq: Scalars['Int'];
  /** The number of successful attempts of this training stage */
  successes?: Maybe<Scalars['Int']>;
  /** The number of total attempts of this training stage */
  attempts?: Maybe<Scalars['Int']>;
  /** A qualitative assessment of the distance between human and dog while training this stage */
  distance?: Maybe<QualitativeLevel>;
  /** A qualitative assessment of the duration of the behavior attempted while training this stage */
  duration?: Maybe<QualitativeLevel>;
  /** A qualitative assessment of the amount of distractions for the dog while training this stage */
  distractions?: Maybe<QualitativeLevel>;
};

export enum QualitativeLevel {
  Low = 'LOW',
  Medium = 'MEDIUM',
  High = 'HIGH'
}

/** A connection to a list of items. */
export type TrainingSessionToUserConnection = {
  __typename?: 'TrainingSessionToUserConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TrainingSessionToUserEdge>>>;
};

/** An edge in a connection. */
export type TrainingSessionToUserEdge = {
  __typename?: 'TrainingSessionToUserEdge';
  /** The item at the end of the edge */
  node?: Maybe<User>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The role the user plays for the training session. */
  user_role: UserTrainingSessionRole;
};

export enum UserTrainingSessionRole {
  Maintainer = 'MAINTAINER',
  Participant = 'PARTICIPANT'
}


export enum RewardFrequency {
  Continuous = 'CONTINUOUS',
  Intermittent = 'INTERMITTENT'
}

/** A connection to a list of items. */
export type TrainingSessionConnection = {
  __typename?: 'TrainingSessionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<TrainingSessionEdge>>>;
};

/** An edge in a connection. */
export type TrainingSessionEdge = {
  __typename?: 'TrainingSessionEdge';
  /** The item at the end of the edge */
  node?: Maybe<TrainingSession>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
};

export enum IncentiveMethod {
  Lure = 'LURE',
  Shape = 'SHAPE'
}

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
  dog: Dog;
};

/** A connection to a list of items. */
export type UserToTrainingSessionConnection = {
  __typename?: 'UserToTrainingSessionConnection';
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserToTrainingSessionEdge>>>;
};

/** An edge in a connection. */
export type UserToTrainingSessionEdge = {
  __typename?: 'UserToTrainingSessionEdge';
  /** The item at the end of the edge */
  node?: Maybe<TrainingSession>;
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The role the user plays for the training session. */
  user_role: UserTrainingSessionRole;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Create a new dog with the currently logged in user as an 'owner'. */
  createDog?: Maybe<CreateDogPayload>;
  editDog?: Maybe<EditDogPayload>;
  /** Invite an email address to collaborate training a dog */
  inviteUserByEmail?: Maybe<InviteUserByEmailPayload>;
  /** Accept an invitation to collaborate training a dog */
  acceptInvitation?: Maybe<AcceptInvitationPayload>;
  /** Create a new desired behavior for the specified dog */
  createBehavior?: Maybe<CreateBehaviorPayload>;
  /** Create the training stages for the specified desired behavior */
  createTrainingStages?: Maybe<CreateTrainingStagesPayload>;
  /** Create a training session for the specified dog */
  createTrainingSession?: Maybe<CreateTrainingSessionPayload>;
  /** Create logs of training progress achieved on the specified training stage in the specified training session */
  createTrainingProgresses?: Maybe<CreateTrainingProgressesPayload>;
};


export type MutationCreateDogArgs = {
  input: CreateDogInput;
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


export type MutationCreateTrainingStagesArgs = {
  input: CreateTrainingStagesInput;
};


export type MutationCreateTrainingSessionArgs = {
  input: CreateTrainingSessionInput;
};


export type MutationCreateTrainingProgressesArgs = {
  input: CreateTrainingProgressesInput;
};

export type CreateDogPayload = {
  __typename?: 'CreateDogPayload';
  dogEdge: UserToDogEdge;
  viewer: User;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateDogInput = {
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
  /** The ID of the user inviting the other user to collaborate */
  invited_by: Scalars['ID'];
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
  /** The method of incentivizing used to entice behavior before commands or hand signals are used. */
  incentive_method?: Maybe<IncentiveMethod>;
  /** Description of the incentive method used in training. */
  incentive_description?: Maybe<Scalars['String']>;
  /** The verbal command used to cue this behavior. */
  verbal_command?: Maybe<Scalars['String']>;
  /** The hand signal used to cue this behavior. */
  hand_signal?: Maybe<Scalars['String']>;
  /** Whether this behavior has a duration component. */
  has_duration: Scalars['Boolean'];
  /** The verbal command used to release this behavior. */
  release_command?: Maybe<Scalars['String']>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTrainingStagesPayload = {
  __typename?: 'CreateTrainingStagesPayload';
  trainingStageEdges: Array<TrainingStageEdge>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTrainingStagesInput = {
  behavior_id: Scalars['ID'];
  training_stages: Array<TrainingStageScalarFields>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TrainingStageScalarFields = {
  /** The order within the sequence of training stages for this behavior */
  seq: Scalars['Int'];
  /** Whether this stage includes an incentive method */
  incentive: Scalars['Boolean'];
  /** Whether this stage includes a verbal command */
  verbal: Scalars['Boolean'];
  /** Whether this stage includes a hand signal */
  hand: Scalars['Boolean'];
  /** How frequently successful behavior is rewarded. */
  reward_frequency: RewardFrequency;
};

export type CreateTrainingSessionPayload = {
  __typename?: 'CreateTrainingSessionPayload';
  trainingSessionEdge?: Maybe<TrainingSessionEdge>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTrainingSessionInput = {
  user_id: Scalars['ID'];
  dog_id: Scalars['ID'];
  /** The length of the training session, in minutes */
  minutes_long?: Maybe<Scalars['Int']>;
  /** When this training session was started */
  start_timestamp: Scalars['DateTime'];
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTrainingProgressesPayload = {
  __typename?: 'CreateTrainingProgressesPayload';
  trainingStageEdges: Array<TrainingSessionToTrainingStageEdge>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type CreateTrainingProgressesInput = {
  training_session_id: Scalars['ID'];
  training_progresses: Array<TrainingProgress>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TrainingProgress = {
  training_stage_id: Scalars['ID'];
  /** Order within the sequence of training progresses in this training session */
  seq: Scalars['Int'];
  /** The number of successful attempts of this training stage */
  successes?: Maybe<Scalars['Int']>;
  /** The number of total attempts of this training stage */
  attempts?: Maybe<Scalars['Int']>;
  /** A qualitative assessment of the distance between human and dog while training this stage */
  distance?: Maybe<QualitativeLevel>;
  /** A qualitative assessment of the amount of distractions for the dog while training this stage */
  distractions?: Maybe<QualitativeLevel>;
  /** A qualitative assessment of the duration of the behavior attempted while training this stage */
  duration?: Maybe<QualitativeLevel>;
};

export type BehaviorBreadcrumb_BehaviorFragment = (
  { __typename?: 'Behavior' }
  & Pick<Behavior, 'id' | 'name'>
  & { dog: (
    { __typename?: 'Dog' }
    & Pick<Dog, 'name' | 'id'>
  ) }
);

export type BehaviorCard_BehaviorFragment = (
  { __typename?: 'Behavior' }
  & Pick<Behavior, 'name' | 'explanation' | 'incentive_method' | 'incentive_description' | 'verbal_command' | 'hand_signal' | 'release_command'>
);

export type BehaviorDetailQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BehaviorDetailQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | { __typename?: 'Dog' } | (
    { __typename?: 'Behavior' }
    & BehaviorCard_BehaviorFragment
    & BehaviorBreadcrumb_BehaviorFragment
  ) | { __typename?: 'TrainingStage' } | { __typename?: 'TrainingSession' } | { __typename?: 'PendingInvitation' }> }
);

export type BehaviorName_BehaviorFragment = (
  { __typename?: 'Behavior' }
  & Pick<Behavior, 'name'>
);

export type BehaviorTrainingStagesApp_BehaviorFragment = (
  { __typename?: 'Behavior' }
  & Pick<Behavior, 'id' | 'name'>
  & BehaviorTrainingStagesList_BehaviorFragment
);

export type BehaviorTrainingStagesCreatorQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BehaviorTrainingStagesCreatorQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | { __typename?: 'Dog' } | (
    { __typename?: 'Behavior' }
    & BehaviorBreadcrumb_BehaviorFragment
    & CreateTrainingStagesForm_BehaviorFragment
  ) | { __typename?: 'TrainingStage' } | { __typename?: 'TrainingSession' } | { __typename?: 'PendingInvitation' }> }
);

export type BehaviorTrainingStagesList_BehaviorFragment = (
  { __typename?: 'Behavior' }
  & Pick<Behavior, 'id'>
  & { trainingStages: (
    { __typename?: 'TrainingStageConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'TrainingStageEdge' }
      & { node?: Maybe<(
        { __typename?: 'TrainingStage' }
        & Pick<TrainingStage, 'id'>
        & TrainingStageCard_TrainingStageFragment
      )> }
    )>>> }
  ) }
);

export type BehaviorTrainingStagesPageQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type BehaviorTrainingStagesPageQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | { __typename?: 'Dog' } | (
    { __typename?: 'Behavior' }
    & BehaviorTrainingStagesApp_BehaviorFragment
    & BehaviorBreadcrumb_BehaviorFragment
  ) | { __typename?: 'TrainingStage' } | { __typename?: 'TrainingSession' } | { __typename?: 'PendingInvitation' }> }
);

export type CreateTrainingStagesForm_BehaviorFragment = (
  { __typename?: 'Behavior' }
  & Pick<Behavior, 'id' | 'name' | 'incentive_method' | 'verbal_command'>
  & { trainingStages: (
    { __typename?: 'TrainingStageConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'TrainingStageEdge' }
      & { node?: Maybe<(
        { __typename?: 'TrainingStage' }
        & Pick<TrainingStage, 'id'>
      )> }
    )>>> }
  ) }
);

export type CreateBehaviorForm_DogFragment = (
  { __typename?: 'Dog' }
  & Pick<Dog, 'id' | 'name'>
);

export type CreateTrainingSessionForm_DogFragment = (
  { __typename?: 'Dog' }
  & Pick<Dog, 'id' | 'name'>
);

export type DogBehaviorCreatorQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DogBehaviorCreatorQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | (
    { __typename?: 'Dog' }
    & CreateBehaviorForm_DogFragment
    & DogBreadcrumb_DogFragment
  ) | { __typename?: 'Behavior' } | { __typename?: 'TrainingStage' } | { __typename?: 'TrainingSession' } | { __typename?: 'PendingInvitation' }> }
);

export type DogBehaviorsApp_DogFragment = (
  { __typename?: 'Dog' }
  & Pick<Dog, 'id' | 'name'>
  & DogBehaviorsList_DogFragment
);

export type DogBehaviorsList_DogFragment = (
  { __typename?: 'Dog' }
  & Pick<Dog, 'id'>
  & { behaviors: (
    { __typename?: 'BehaviorConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'BehaviorEdge' }
      & { node?: Maybe<(
        { __typename?: 'Behavior' }
        & Pick<Behavior, 'id'>
        & BehaviorCard_BehaviorFragment
      )> }
    )>>> }
  ) }
);

export type DogBehaviorsPageQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DogBehaviorsPageQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | (
    { __typename?: 'Dog' }
    & DogBehaviorsApp_DogFragment
    & DogBreadcrumb_DogFragment
  ) | { __typename?: 'Behavior' } | { __typename?: 'TrainingStage' } | { __typename?: 'TrainingSession' } | { __typename?: 'PendingInvitation' }> }
);

export type DogBreadcrumb_DogFragment = (
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
    & DogBreadcrumb_DogFragment
  ) | { __typename?: 'Behavior' } | { __typename?: 'TrainingStage' } | { __typename?: 'TrainingSession' } | { __typename?: 'PendingInvitation' }> }
);

export type DogTrainingSessionCreatorQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DogTrainingSessionCreatorQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | (
    { __typename?: 'Dog' }
    & CreateTrainingSessionForm_DogFragment
    & DogBreadcrumb_DogFragment
  ) | { __typename?: 'Behavior' } | { __typename?: 'TrainingStage' } | { __typename?: 'TrainingSession' } | { __typename?: 'PendingInvitation' }> }
);

export type DogTrainingSessionsApp_DogFragment = (
  { __typename?: 'Dog' }
  & Pick<Dog, 'id' | 'name'>
  & DogTrainingSessionsList_DogFragment
);

export type DogTrainingSessionsList_DogFragment = (
  { __typename?: 'Dog' }
  & Pick<Dog, 'id'>
  & { trainingSessions: (
    { __typename?: 'TrainingSessionConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'TrainingSessionEdge' }
      & { node?: Maybe<(
        { __typename?: 'TrainingSession' }
        & Pick<TrainingSession, 'id'>
        & TrainingSessionCard_TrainingSessionFragment
      )> }
    )>>> }
  ) }
);

export type DogTrainingSessionsPageQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type DogTrainingSessionsPageQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | (
    { __typename?: 'Dog' }
    & DogTrainingSessionsApp_DogFragment
    & DogBreadcrumb_DogFragment
  ) | { __typename?: 'Behavior' } | { __typename?: 'TrainingStage' } | { __typename?: 'TrainingSession' } | { __typename?: 'PendingInvitation' }> }
);

export type DogsApp_ViewerFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id'>
  & DogsList_ViewerFragment
);

export type DogsList_ViewerFragment = (
  { __typename?: 'User' }
  & Pick<User, 'id'>
  & { dogs: (
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
  ) }
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
  & { pending_invitations_received: (
    { __typename?: 'PendingInvitationConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'PendingInvitationEdge' }
      & { node?: Maybe<(
        { __typename?: 'PendingInvitation' }
        & Pick<PendingInvitation, 'id' | 'invitee_email' | 'user_role'>
        & { dog: (
          { __typename?: 'Dog' }
          & Pick<Dog, 'name' | 'picture' | 'id'>
        ), invited_by: (
          { __typename?: 'User' }
          & Pick<User, 'name'>
        ) }
      )> }
    )>>> }
  ) }
);

export type TrainingProgressTrainingSessionCard_TrainingSessionToTrainingStageEdgeFragment = (
  { __typename?: 'TrainingSessionToTrainingStageEdge' }
  & Pick<TrainingSessionToTrainingStageEdge, 'seq' | 'successes' | 'attempts' | 'distance' | 'distractions' | 'duration'>
  & { node?: Maybe<(
    { __typename?: 'TrainingStage' }
    & Pick<TrainingStage, 'id'>
    & { behavior: (
      { __typename?: 'Behavior' }
      & Pick<Behavior, 'id'>
      & BehaviorName_BehaviorFragment
    ) }
    & TrainingStageName_TrainingStageFragment
  )> }
);

export type CreateTrainingProgressesForm_TrainingSessionFragment = (
  { __typename?: 'TrainingSession' }
  & Pick<TrainingSession, 'id'>
  & { dog: (
    { __typename?: 'Dog' }
    & Pick<Dog, 'id'>
    & { behaviors: (
      { __typename?: 'BehaviorConnection' }
      & { edges?: Maybe<Array<Maybe<(
        { __typename?: 'BehaviorEdge' }
        & { node?: Maybe<(
          { __typename?: 'Behavior' }
          & Pick<Behavior, 'id' | 'name'>
          & { trainingStages: (
            { __typename?: 'TrainingStageConnection' }
            & { edges?: Maybe<Array<Maybe<(
              { __typename?: 'TrainingStageEdge' }
              & { node?: Maybe<(
                { __typename?: 'TrainingStage' }
                & Pick<TrainingStage, 'id'>
                & TrainingStageName_TrainingStageFragment
              )> }
            )>>> }
          ) }
        )> }
      )>>> }
    ) }
  ), trainingStages: (
    { __typename?: 'TrainingSessionToTrainingStageConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'TrainingSessionToTrainingStageEdge' }
      & { node?: Maybe<(
        { __typename?: 'TrainingStage' }
        & Pick<TrainingStage, 'id'>
      )> }
    )>>> }
  ) }
);

export type TrainingSessionBreadcrumb_TrainingSessionFragment = (
  { __typename?: 'TrainingSession' }
  & Pick<TrainingSession, 'id'>
  & { dog: (
    { __typename?: 'Dog' }
    & Pick<Dog, 'name' | 'id'>
  ) }
  & TrainingSessionName_TrainingSessionFragment
);

export type TrainingSessionCard_TrainingSessionFragment = (
  { __typename?: 'TrainingSession' }
  & { dog: (
    { __typename?: 'Dog' }
    & Pick<Dog, 'id' | 'name'>
  ) }
  & TrainingSessionName_TrainingSessionFragment
);

export type TrainingSessionDetailQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TrainingSessionDetailQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | { __typename?: 'Dog' } | { __typename?: 'Behavior' } | { __typename?: 'TrainingStage' } | (
    { __typename?: 'TrainingSession' }
    & TrainingSessionCard_TrainingSessionFragment
    & TrainingSessionBreadcrumb_TrainingSessionFragment
  ) | { __typename?: 'PendingInvitation' }> }
);

export type TrainingSessionName_TrainingSessionFragment = (
  { __typename?: 'TrainingSession' }
  & Pick<TrainingSession, 'start_timestamp' | 'minutes_long'>
);

export type TrainingSessionTrainingProgressesApp_TrainingSessionFragment = (
  { __typename?: 'TrainingSession' }
  & Pick<TrainingSession, 'id'>
  & { dog: (
    { __typename?: 'Dog' }
    & Pick<Dog, 'id' | 'name'>
  ) }
  & TrainingSessionTrainingProgressesList_TrainingSessionFragment
  & TrainingSessionName_TrainingSessionFragment
);

export type TrainingSessionTrainingProgressesCreatorQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TrainingSessionTrainingProgressesCreatorQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | { __typename?: 'Dog' } | { __typename?: 'Behavior' } | { __typename?: 'TrainingStage' } | (
    { __typename?: 'TrainingSession' }
    & TrainingSessionBreadcrumb_TrainingSessionFragment
    & CreateTrainingProgressesForm_TrainingSessionFragment
  ) | { __typename?: 'PendingInvitation' }> }
);

export type TrainingSessionTrainingProgressesList_TrainingSessionFragment = (
  { __typename?: 'TrainingSession' }
  & Pick<TrainingSession, 'id'>
  & { trainingStages: (
    { __typename?: 'TrainingSessionToTrainingStageConnection' }
    & { edges?: Maybe<Array<Maybe<(
      { __typename?: 'TrainingSessionToTrainingStageEdge' }
      & Pick<TrainingSessionToTrainingStageEdge, 'seq'>
      & TrainingProgressTrainingSessionCard_TrainingSessionToTrainingStageEdgeFragment
    )>>> }
  ) }
  & TrainingSessionName_TrainingSessionFragment
);

export type TrainingSessionTrainingProgressesPageQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TrainingSessionTrainingProgressesPageQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | { __typename?: 'Dog' } | { __typename?: 'Behavior' } | { __typename?: 'TrainingStage' } | (
    { __typename?: 'TrainingSession' }
    & TrainingSessionTrainingProgressesApp_TrainingSessionFragment
    & TrainingSessionBreadcrumb_TrainingSessionFragment
  ) | { __typename?: 'PendingInvitation' }> }
);

export type TrainingStageBreadcrumb_TrainingStageFragment = (
  { __typename?: 'TrainingStage' }
  & Pick<TrainingStage, 'id'>
  & { behavior: (
    { __typename?: 'Behavior' }
    & Pick<Behavior, 'name' | 'id'>
    & { dog: (
      { __typename?: 'Dog' }
      & Pick<Dog, 'id' | 'name'>
    ) }
  ) }
  & TrainingStageName_TrainingStageFragment
);

export type TrainingStageCard_TrainingStageFragment = (
  { __typename?: 'TrainingStage' }
  & Pick<TrainingStage, 'incentive' | 'verbal' | 'hand' | 'reward_frequency'>
  & { behavior: (
    { __typename?: 'Behavior' }
    & Pick<Behavior, 'incentive_method' | 'verbal_command'>
  ) }
  & TrainingStageName_TrainingStageFragment
);

export type TrainingStageDetailQueryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TrainingStageDetailQueryQuery = (
  { __typename?: 'Query' }
  & { node?: Maybe<{ __typename?: 'User' } | { __typename?: 'Dog' } | { __typename?: 'Behavior' } | (
    { __typename?: 'TrainingStage' }
    & TrainingStageCard_TrainingStageFragment
    & TrainingStageBreadcrumb_TrainingStageFragment
  ) | { __typename?: 'TrainingSession' } | { __typename?: 'PendingInvitation' }> }
);

export type TrainingStageName_TrainingStageFragment = (
  { __typename?: 'TrainingStage' }
  & Pick<TrainingStage, 'seq' | 'incentive' | 'verbal' | 'hand' | 'reward_frequency'>
  & { behavior: (
    { __typename?: 'Behavior' }
    & Pick<Behavior, 'incentive_method'>
  ) }
);
