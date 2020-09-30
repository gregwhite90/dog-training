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
  training_progress: TrainingProgress;
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
  training_progress: TrainingProgress;
};

export type TrainingProgress = {
  __typename?: 'TrainingProgress';
  /** Order within the sequence of training progresses in this training session */
  seq: Scalars['Int'];
  /** The number of successful attempts of this stage in this session */
  successes?: Maybe<Scalars['Int']>;
  /** The number of total attempts of this stage in this session */
  attempts?: Maybe<Scalars['Int']>;
  /** A qualitative assessment of the distance between human and dog while training this stage in this session */
  distance?: Maybe<QualitativeLevel>;
  /** A qualitative assessment of the amount of distractions for the dog while training this stage in this session */
  distractions?: Maybe<QualitativeLevel>;
  /** A qualitative assessment of the duration of the behavior attempted while training this stage in this session */
  duration?: Maybe<QualitativeLevel>;
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
  training_progresses: Array<TrainingProgressInput>;
  clientMutationId?: Maybe<Scalars['String']>;
};

export type TrainingProgressInput = {
  training_stage_id: Scalars['ID'];
  /** Order within the sequence of training progresses in this training session */
  seq: Scalars['Int'];
  /** The number of successful attempts of this stage in this session */
  successes?: Maybe<Scalars['Int']>;
  /** The number of total attempts of this stage in this session */
  attempts?: Maybe<Scalars['Int']>;
  /** A qualitative assessment of the distance between human and dog while training this stage in this session */
  distance?: Maybe<QualitativeLevel>;
  /** A qualitative assessment of the amount of distractions for the dog while training this stage in this session */
  distractions?: Maybe<QualitativeLevel>;
  /** A qualitative assessment of the duration of the behavior attempted while training this stage in this session */
  duration?: Maybe<QualitativeLevel>;
};
