const graphql = require('graphql');

const { GraphQLObjectType, GraphQLString } = graphql

const UserType = require('./types/user_type')

const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        signup: { 
            type: UserType,
            args: {
                email: GraphQLString,
                password: GraphQLString
            }
        }
    }
})

module.exports = mutation