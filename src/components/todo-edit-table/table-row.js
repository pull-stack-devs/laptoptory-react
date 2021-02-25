import React, {useState, useEffect} from 'react'
import Show from "./Show";
import { Table, TableBody, TableHead, TableRow, TableCell, TableContainer, TextField, Button} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import SaveIcon from '@material-ui/icons/Save';
import RemoveCircleSharpIcon from '@material-ui/icons/RemoveCircleSharp';
import { green } from '@material-ui/core/colors';
import axios from 'axios';

const apiUrl = 'https://husam278-api-server.herokuapp.com/api/todo';

export default function TableRows(props) {
    const [state, setState] = useState(false);
    const [record, setRecord] = useState(props.items);


    const changeType = () =>{
        setState(true);
        setRecord(props.items);
        console.log("state>>>>>>", state)
    }

    const updateChange = async () =>{
        setState(false);
        console.log("record>>>>", record)
        let data = await axios.put(
            `${apiUrl}/record._id`, {
                data: JSON.stringify(record),
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }
        );
        console.log("data>>>>>", data)
    }

    const onChangeItem = (e) =>{
        setRecord({...record, [e.target.name]: e.target.value})
    }

    console.log("props>>>>", props)
    
        return (
            <>
            <Show condition={state}>
                    {/* <form> */}
                    <TableRow>
                        <TableCell>
                            <Button onClick={() => {updateChange()}}>
                                <SaveIcon color ="primary"/>
                            </Button>
                        </TableCell>
                        <TableCell>
                            <TextField onChange={onChangeItem} name="difficulty" defaultValue={props.items.difficulty}/>
                        </TableCell>
                        <TableCell>
                            <TextField name="text" defaultValue={props.items.text} onChange={onChangeItem}/>
                        </TableCell>
                        <TableCell>
                            <TextField name="_id" defaultValue={props.items._id} onChange={onChangeItem}/>
                        </TableCell>
                        <TableCell>
                            <TextField name="assignee" defaultValue={props.items.assignee} onChange={onChangeItem}/>
                        </TableCell>
                    </TableRow>
                    {/* </form> */}
                </Show>

                <Show condition={!state}>
                    <TableRow>
                        <TableCell>
                            <Button onClick={changeType}>
                                <EditIcon style={{ color: green[500] }}/>
                            </Button>
                            <Button onClick={changeType}>
                                <RemoveCircleSharpIcon color ="error"/>
                            </Button>
                        </TableCell>
                        <TableCell>
                            {props.items.difficulty}
                        </TableCell>
                        <TableCell>
                            {props.items.text}
                        </TableCell>
                        <TableCell>
                            {props.items._id}
                        </TableCell>
                        <TableCell>
                            {props.items.assignee}
                        </TableCell>
                        <TableCell>Hiiiiiiiiiiiiiii</TableCell>
                        <TableCell>Hiiiiiiiiiiiiiii</TableCell>
                        <TableCell>Hiiiiiiiiiiiiiii</TableCell>
                        <TableCell>Hiiiiiiiiiiiiiii</TableCell>
                        <TableCell>Hiiiiiiiiiiiiiii</TableCell>
                        <TableCell>Hiiiiiiiiiiiiiii</TableCell>
                        <TableCell>Hiiiiiiiiiiiiiii</TableCell>
                    </TableRow>
                </Show>
            </>
        )
    
}
