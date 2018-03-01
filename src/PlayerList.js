import React, { Component } from "react";
import PropTypes from "prop-types";
import PlayerListItem from "./PlayerListItem";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import List from "material-ui/List";

import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
const uuidv4 = require("uuid/v4");

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

export default withStyles(styles)(PlayerList);
