# ROTOQL Demo

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

---

Your goal will be to make an application that can list the players on a fantasy football team using the SquadQL API. The application does not need to be more than a single page (or view). The data on the page should contain the following:

* A header that contains the name of their fantasy team
* The name of each player
* A headshot for the player, the image can be found at a URL specified in the data object for each player
* Their eligible positions
* If they are starting or on the bench
* The user must be able to scroll through their players, all the information is not expected to fit on the screen on the same time.

The style and look is up to you - an austere design is fine and will not be counted against you. Scrolling should be smooth however and not choppy.
The API that you will be using is a graphql API, not a RESTFUL api. If you are unfamilar with the graphql interface you can read about it here http://graphql.org. You can use the interactive igraphql documentation to try out the queries, or use the example query directly. The authentication and team id is provided for you at this link
`https://api-qa.squadql.com/graphql?query=query%20test%20{%20%20auth(token%3A%20"f1432e0d-557d-466f-877c-8fc6631e7594%201209600.DXI9Xg.hJQWCPmhzOyCBMWPXRAj2mutuaA")%20{%20%20%20%20fantasyTeam(id%3A%20"118f812b-6505-4d01-8d62-4d9aab7592d4")%20{%20%20%20%20%20%20name%20%20%20%20%20%20fantasyPlayers%20{%20%20%20%20%20%20%20%20isStarting%20%20%20%20%20%20%20%20eligiblePositions%20%20%20%20%20%20%20%20realPlayer%20{%20%20%20%20%20%20%20%20%20%20fullName%20%20%20%20%20%20%20%20%20%20imageUrl%20%20%20%20%20%20%20%20}%20%20%20%20%20%20}%20%20%20%20}%20%20}}&operationName=test`

The data that the API returns will come in several nested parts. The first is a fantasy team which contains general information such as a name and an id that links all the fantasy players. Within the fantasy team there fantasy players which tells what positions in the fantasy league are the players eligible for, if they are starting or benched, or other fantasy information about them. Within a fantasy player is a real player which corresponds to static information about the real player who the fantasy player represents, this contains their full name and their headshot URL.
