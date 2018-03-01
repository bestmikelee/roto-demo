import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

// Taken from Apollo Docs.

const GET_PLAYERS = gql`
  query test {
    auth(
      token: "f1432e0d-557d-466f-877c-8fc6631e7594 1209600.DXI9Xg.hJQWCPmhzOyCBMWPXRAj2mutuaA"
    ) {
      fantasyTeam(id: "118f812b-6505-4d01-8d62-4d9aab7592d4") {
        name
        fantasyPlayers {
          isStarting
          eligiblePositions
          realPlayer {
            fullName
            imageUrl
          }
        }
      }
    }
  }
`;

// Merely stringifying results to see if responses were coming through
const App = () => (
  <Query query={GET_PLAYERS}>
    {({ loading, error, data }) => {
      if (loading) return <div>Loading...</div>;
      if (error) return <div>Error :(</div>;

      return <div>{JSON.stringify(data)}</div>;
    }}
  </Query>
);

export default App;
