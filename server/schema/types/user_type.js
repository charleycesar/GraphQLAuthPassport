const graphql = require('graphql');

const { GraphQLID } = graphql;

const {
    GraphQLObjectType,
    GraphQLString
} = graphql

const UserType = new GraphQLObjectType({
    name: 'user',
    fields: {
        id: {type: GraphQLID },
        email: { type: GraphQLString }
    }
})

module.exports = UserType