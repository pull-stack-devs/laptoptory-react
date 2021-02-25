import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { lighten, makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer, TextField, Paper} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios';
import TableRows from "./table-row";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const apiUrl = 'https://husam278-api-server.herokuapp.com/api/todo';



const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 650,
  },
  addBtn: {
      position: 'absolute',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
  },
  root : {
    width: '100%',
    overflowX: 'auto'
  }
}));

export default function EnhancedTableHead(props) {
  const classes = useStyles();
  const [values, setValues] = useState([])

  const getData = async () =>{
      let results = await axios.get(
          apiUrl      
     )
     console.log("results>>>", results.data.result)
     setValues(results.data.result)
     return results.data.result;
  }  

  useEffect(()=>{
      getData();
  }, [])

  console.log("values>>>", values)
  return (
    <TableContainer>
        <Paper className={classes.root}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Serial Number</TableCell>
              <TableCell align="left">Brand</TableCell>
              <TableCell align="left">CPU</TableCell>
              <TableCell align="left">RAM</TableCell>
              <TableCell align="left">Storage</TableCell>
              <TableCell align="left">Storage Type</TableCell>
              <TableCell align="left">Power Cable</TableCell>
              <TableCell align="left">Display Resolution</TableCell>
              <TableCell align="left">Model</TableCell>
              <TableCell align="left">Availability</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              {values.map((item, indx) =>{
                  {console.log("item", item)}
                  return (
                      <TableRows items={item} key={indx}/>
                  )
              })} 
          </TableBody>
          </Table>
          <Fab color="primary" aria-label="add" className={classes.addBtn}>
              <AddIcon />
          </Fab>
      </Paper>
      </TableContainer>
  );
}




