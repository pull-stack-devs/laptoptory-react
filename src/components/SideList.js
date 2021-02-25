import React from 'react';
import DashboardListItem from './DashboardListItem';
import LaptopIcon from '@material-ui/icons/Laptop';
import FaceIcon from '@material-ui/icons/Face';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  sideLink: {
    textDecoration: 'none',
    color: 'rgba(0,0,0,0.87)'
  }
}));

function SideList(props) {
  const classes = useStyles();

  return (
    <div>
      <Link to="/laptops" className={classes.sideLink}>
        <DashboardListItem listItemName="Laptops">
          <LaptopIcon />
        </DashboardListItem>
      </Link>
      <Link to="/students" className={classes.sideLink}>
        <DashboardListItem listItemName="Students">
          <FaceIcon />
        </DashboardListItem>
      </Link>
      <Link to="/programs" className={classes.sideLink}>
        <DashboardListItem listItemName="Programs">
          <SchoolIcon />
        </DashboardListItem>
      </Link>
      <Link to="/users" className={classes.sideLink}>
        <DashboardListItem listItemName="Users">
          <PeopleIcon />
        </DashboardListItem>
      </Link>
    </div>
  );
}

export default SideList;
