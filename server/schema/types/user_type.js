const graphql = require('graphql');

const {
    GraphQLObjectType,
    GraphQLString
}

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        email: { type: GraphQLString }
    }
})

module.exports = UserType