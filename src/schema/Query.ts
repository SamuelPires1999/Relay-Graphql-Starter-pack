import { GraphQLObjectType, GraphQLString } from "graphql";

const QueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'The root of all queries',
    fields: () => ({
        hello: {
            type: GraphQLString,
            resolve: () => {
                return "World..."
            }
        }
    })
})

export default QueryType