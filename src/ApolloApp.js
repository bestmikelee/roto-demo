import React from "react";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import App from "./App";

// Pass your GraphQL endpoint to uri
const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api-qa.squadql.com/graphql"
  }),
  cache: new InMemoryCache()
});

console.log(client);

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
