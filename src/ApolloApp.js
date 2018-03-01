import React from "react";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import App from "./App";
// This was a component meant to use the Apollo GraphQL Client
// Cors issuses stopped further progress.
// using data.json now as a mock data set
// plugging in ./SimpleApp.js as the top-level container

/**
 * Thought manually customizing fetch would help with cors
 * Can delete. only here for documentation purposes
 *
 * @param {string} uri
 * @param {object} options
 * @returns
 */
const customFetch = (uri, options) => {
  uri =
    "https://api-qa.squadql.com/graphql?query=query%20test%20%7B%0A%20%20auth(token%3A%20%22f1432e0d-557d-466f-877c-8fc6631e7594%201209600.DXI9Xg.hJQWCPmhzOyCBMWPXRAj2mutuaA%22)%20%7B%0A%20%20%20%20fantasyTeam(id%3A%20%22118f812b-6505-4d01-8d62-4d9aab7592d4%22)%20%7B%0A%20%20%20%20%20%20name%0A%20%20%20%20%20%20fantasyPlayers%20%7B%0A%20%20%20%20%20%20%20%20isStarting%0A%20%20%20%20%20%20%20%20eligiblePositions%0A%20%20%20%20%20%20%20%20realPlayer%20%7B%0A%20%20%20%20%20%20%20%20%20%20fullName%0A%20%20%20%20%20%20%20%20%20%20imageUrl%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D%0A&operationName=test&raw";
  options.headers.Accept = "application/json";
  return fetch(uri, options);
};

// using Apollo's beta release
const client = new ApolloClient({
  link: new HttpLink({
    uri: "https://api-qa.squadql.com/graphql",
    headers: {
      Accept: "application/json"
    }
    //fetch: customFetch
  }),
  cache: new InMemoryCache()
});

const ApolloApp = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

export default ApolloApp;
