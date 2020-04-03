import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '20%'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  buttonDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    textAlign: 'center'
  },
  guideButton: {
    width: '100%',
    border: 'none',
    margin: '2%',
    background: 'white',
    justifyContent: 'center'
  },
  guidePanel: {
    justifyContent: 'center'
  }

}));

export default function Guidesidebar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Individual Improvement</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.guidePanel}>
          <Typography className={classes.buttonDiv}>
           <button className={classes.guideButton}>Everything and anything Aiming</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Understanding your role</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.guidePanel}>
          <Typography className={classes.buttonDiv}>
           <button className={classes.guideButton}>Entry Fragging</button>
           <button className={classes.guideButton}>Supporting</button>
           <button className={classes.guideButton}>Lurking</button>
           <button className={classes.guideButton}>Awping</button>
           <button className={classes.guideButton}>In Game Leading</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>In Game Leading</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.guidePanel}>
          <Typography className={classes.buttonDiv}>
           <button className={classes.guideButton}>Introduction</button>
           <button className={classes.guideButton}>Demo reviews and Server work</button>
           <button className={classes.guideButton}>Preparing strats</button>
           <button className={classes.guideButton}>Game tells and Counter Strating</button>
           <button className={classes.guideButton}>Final Thoughts</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Entry Fragging</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.guidePanel}>
          <Typography className={classes.buttonDiv}>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Support</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.guidePanel}>
          <Typography className={classes.buttonDiv}>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Lurking</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.guidePanel}>
          <Typography className={classes.buttonDiv}>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>AWPing</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.guidePanel}>
          <Typography className={classes.buttonDiv}>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Other resources</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.guidePanel}>
          <Typography className={classes.buttonDiv}>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
           <button className={classes.guideButton}>?</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}