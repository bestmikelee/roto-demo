import React, { Component } from "react";
import PropTypes from "prop-types";
// material-ui styling
import { withStyles } from "material-ui/styles";
import { ListItem, ListItemText } from "material-ui/List";
import Avatar from "material-ui/Avatar";
import Typography from "material-ui/Typography";
// more styling
const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

class PlayerListItem extends Component {
  // imageUrl not required as it is not 100% available
  static propTypes = {
    fullName: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    eligiblePositions: PropTypes.array.isRequired,
    isStarting: PropTypes.bool.isRequired
  };
  render() {
    const { classes } = this.props;
    return (
      <ListItem key={this.props.key} dense button className={classes.listItem}>
        <Avatar src={this.props.imageUrl} alt={this.props.fullName} />
        <ListItemText
          primary={this.props.fullName}
          secondary={
            this.props.eligiblePositions.length
              ? this.props.eligiblePositions.join(",").toUpperCase()
              : this.props.eligiblePositions[0].toUpperCase()
          }
        />
        <Typography variant="subheading" color="inherit">
          <span>{this.props.isStarting ? "Starter" : "Bench"}</span>
        </Typography>
      </ListItem>
    );
  }
}
// wrap component with styles
export default withStyles(styles)(PlayerListItem);
