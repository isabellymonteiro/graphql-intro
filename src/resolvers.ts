import { users } from './db'
import { User } from './types'

interface QueryUserArgs {
  id: User['id']
}

const resolvers = {    
  Query: {    
    user: (
      parent: User, // not being used, how to pass?
      { id }: QueryUserArgs // or Pick<User, 'id'>
    ) => {
      return users.find(user => user.id === id)   
    },    
    users: () => {    
      return users    
    }     
  },
  Mutation: {    
    createUser: (
      parent: User, // not being used, how to pass?
      { id, name, email, age }: User
    ) => {    
      const newUser = { id, name, email, age } 
      users.push(newUser)

      return newUser 
    },   
    updateUser: (
      parent: User, // not being used, how to pass?
      { id, name, email, age }: User
    ) => {    
      const newUser = users.find(user => user.id === id)

      if (!newUser) throw new Error('User not found.')

      newUser.name = name 
      newUser.email = email  
      newUser.age = age

      return newUser
    },    
    deleteUser: (
      parent: User, // not being used, how to pass?
      { id }: Pick<User, 'id'>
     ) => {
      const userIndex = users.findIndex(user => user.id === id)

      if (userIndex === -1) throw new Error('User not found.')

      const deletedUsers = users.splice(userIndex, 1)

      return deletedUsers[0]  
    }    
  }
}

export default resolvers