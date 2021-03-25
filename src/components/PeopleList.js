import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { getAvatarTitle } from "../user/stils/js";

function PeopleList({ people, follow, unfollow }) {
  return (
    <List>
      {people.map((user) => (
        <ListItem key={user.id}>
          <ListItemAvatar>
            <Avatar alt={user.name}>{getAvatarTitle(user.name)}</Avatar>
          </ListItemAvatar>
          <ListItemText primary={user.name} />
          <ListItemSecondaryAction>
            <IconButton onClick={() => unfollow(user.id)}>
              <PersonAddDisabledIcon />
            </IconButton>
            <IconButton onClick={() => follow(user.id)}>
              <PersonAddIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  );
}

export default PeopleList;
