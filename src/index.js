import { GraphQLServer } from 'graphql-yoga';

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
})

server.start(() => {
	console.log('GraphQL server is now running! @ http://localhost:4000');
});
