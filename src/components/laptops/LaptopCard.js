import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Tooltip from '@material-ui/core/Tooltip';
import './laptop.scss';
import EditableLabel from 'react-inline-editing';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  centerBottom: {
    display: 'flex',
    justifyContent: 'center'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function LaptopCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const _handleFocus =(text) => {
    console.log('Focused with text: ' + text);
  }

  const _handleFocusOut = (text) => {
      console.log('Left editor with text: ' + text);
  }

  return (
    <Card className={classes.root}>
      <CardHeader
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title="Shrimp and Chorizo Paella"
        // subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <EditableLabel text='Hello!'
                labelClassName='myLabelClass'
                inputClassName='myInputClass'
                inputWidth='200px'
                inputHeight='25px'
                inputMaxLength='50'
                labelFontWeight='bold'
                inputFontWeight='bold'
                onFocus={_handleFocus}
                onFocusOut={_handleFocusOut}
                isEditing='false'
            />
      </CardContent>
      <CardActions disableSpacing className={classes.centerBottom}>
        <Tooltip title="Edit a laptop properties">
          <IconButton aria-label="add to favorites">
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete a laptop">
          <IconButton aria-label="share">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Assigne a laptop">
          <IconButton aria-label="share">
            <AssignmentIndIcon />
          </IconButton>
        </Tooltip>
      </CardActions>
    </Card>
  );
}