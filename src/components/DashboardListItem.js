import React from 'react';
import {ListItemText, ListItemIcon, ListItem} from '@material-ui/core';

function DashboardListItem(props) {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          {props.children}
        </ListItemIcon>
        <ListItemText primary={props.listItemName} />
      </ListItem>
    </div>
  );
}

export default DashboardListItem;
