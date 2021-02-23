import React from 'react';
import DashboardListItem from './DashboardListItem';
import LaptopIcon from '@material-ui/icons/Laptop';
import FaceIcon from '@material-ui/icons/Face';
import PeopleIcon from '@material-ui/icons/People';
import SchoolIcon from '@material-ui/icons/School';

function SideList(props) {
  return (
    <div>
      <DashboardListItem listItemName="Laptops">
        <LaptopIcon />
      </DashboardListItem>
      <DashboardListItem listItemName="Students">
        <FaceIcon />
      </DashboardListItem>
      <DashboardListItem listItemName="Programs">
        <SchoolIcon />
      </DashboardListItem>
      <DashboardListItem listItemName="Users">
        <PeopleIcon />
      </DashboardListItem>
    </div>
  );
}

export default SideList;
