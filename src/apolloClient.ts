import { ApolloClient, InMemoryCache } from "@apollo/client";
const graphqlUrl = process.env.REACT_APP_GRAPHQL_URL;

const apolloClient = new ApolloClient({
    uri: graphqlUrl,
    cache: new InMemoryCache()
});
export default apolloClient;