export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  ISO8601DateTime: any
}

export type User = {    
  id: Scalars['ID']    
  name: Scalars['String']    
  email: Scalars['String']    
  age: Scalars['Int']   
}

// export type Query = {
//   users: Array<User>
//   user: User
// }