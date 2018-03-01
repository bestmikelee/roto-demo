import React, { Component } from "react";
import PropTypes from "prop-types";
import PlayerListItem from "./PlayerListItem";
// material-ui styling
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import List from "material-ui/List";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
// generate unique keys since all imageUrls are not available
import uuidv4 from "uuid/v4";
// more styling
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  }
});

class PlayerList extends Component {
  static propTypes = {
    fantasyPlayers: PropTypes.array.isRequired,
    teamName: PropTypes.string.isRequired
  };
  // obtain playerIds as keys from imageUrl
  // if not available, generate uuid
  getKeyFromImageUrl(imgUrl) {
    if (!imgUrl) {
      return uuidv4();
    }
    const slicedUrl = imgUrl.split("/");
    const lastIndex = slicedUrl.length - 1;
    const keyWithExt = slicedUrl[lastIndex];
    return keyWithExt.slice(0, keyWithExt.indexOf("."));
  }

  render() {
    // styling
    const { classes } = this.props;
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              TEAM | {this.props.teamName}
            </Typography>
          </Toolbar>
        </AppBar>
        <List className={classes.list}>
          {this.props.fantasyPlayers
            .sort((p1, p2) => {
              // sort by starters and bench players
              if (p1.isStarting) {
                return -1;
              } else {
                return 1;
              }
            })
            .map(player => {
              return (
                <PlayerListItem
                  key={this.getKeyFromImageUrl(player.realPlayer.imageUrl)}
                  fullName={player.realPlayer.fullName}
                  imageUrl={player.realPlayer.imageUrl}
                  isStarting={player.isStarting}
                  eligiblePositions={player.eligiblePositions}
                />
              );
            })}
        </List>
      </div>
    );
  }
}
// wrap component with styles
export default withStyles(styles)(PlayerList);
