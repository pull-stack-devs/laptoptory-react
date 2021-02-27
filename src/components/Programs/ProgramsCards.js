import React, { useContext, useEffect, useState, useRef } from 'react';
import ProgramItems from './ProgramItems';
import { connect, useDispatch } from 'react-redux';
import { getRemoteData, addProgram } from '../../rtk/ProgramsSlicer';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';


function ProgramCard(props) {

    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const [name, setName] = useState('');
    const [department, setDepartment] = useState('');
    const [version, setVersion] = useState('');
    const [is_active, setIs_active] = useState();

    const radioGroupRef = useRef(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen('');
    };
    const handleName = (e) => {
        setName(e.target.value)
    }

    const handleDepartmen = (e) => {
        setDepartment(e.target.value)
    }
    const handleVersion = (e) => {
        setVersion(e.target.value)
    }

    const handleSelect = (e) => {
        setIs_active(e.target.value)
    }
    const handleAdd = (e) => {
        let object = {
            name: name,
            department: department,
            version: version,
            is_active: is_active,
        };
        dispatch(addProgram(object));
    }

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getRemoteData());
        };
        fetchData();
    }, [dispatch]);

    return (
        <>
            {props.myPrograms.map((item) => (
                <ProgramItems items={item} />
            ))}

            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open form dialog
     </Button>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Add Program</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {/* To subscribe to this website, please enter your email address here. We will send updates
                        occasionally. */}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Name"
                        type="name"
                        fullWidth
                        onChange={handleName}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Department"
                        type="department"
                        fullWidth
                        onChange={handleDepartmen}
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Version"
                        type="version"
                        fullWidth
                        onChange={handleVersion}
                    />
                    <RadioGroup
                        ref={radioGroupRef}
                        aria-label="ringtone"
                        name="ringtone"
                        label="Is_Active"
                        onChange={handleSelect}
                    >
                        Is_Active
                            <FormControlLabel value="true" key="true" control={<Radio />} label="Yes" />
                        <FormControlLabel value="''" key="''" control={<Radio />} label="No" />

                    </RadioGroup>

                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                        </Button>
                    <Button onClick={handleAdd} color="primary">
                        Add
          </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

const mapStateToProps = state => ({
    myPrograms: state.programs.programs,
});

export default connect(mapStateToProps)(ProgramCard);