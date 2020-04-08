import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {Link} from 'react-router-dom';

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
          <Typography className={classes.heading}>Introduction</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.guidePanel}>
          <Typography className={classes.buttonDiv}>
           <Link to="/Welcome" className={classes.guideButton}>Welcome.</Link>
           <Link to="/Learn" className={classes.guideButton}>What you will learn.</Link>
           <Link to="/WhoAreWe" className={classes.guideButton}>Who are we?</Link>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

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
           <Link to="/Aiming" className={classes.guideButton}>Let's talking Aiming</Link>
           <Link to="/Pugging" className={classes.guideButton}>Pugging</Link>
           <Link to="/Matchmaking" className={classes.guideButton}>Matchmaking</Link>
           <Link to="/ImprovingUtility" className={classes.guideButton}>Utility</Link>
           <Link to="/League" className={classes.guideButton}>Getting into League Play</Link>
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
           <Link className={classes.guideButton} to='/IGLIntroduction'>Introduction</Link>
           <Link className={classes.guideButton} to='/RoundAwareness'>Round Awareness</Link>
           <button className={classes.guideButton}>Economical Awareness</button>
           <button className={classes.guideButton}>In Game "LEADING"</button>
           <button className={classes.guideButton}>Strategies</button>
           <button className={classes.guideButton}>Demos</button>
           <button className={classes.guideButton}>IGL doesn't mean not fragging</button>
           <button className={classes.guideButton}>Understanding Team Strenghts/Weaknesses</button>
           <button className={classes.guideButton}>Understanding Teammates Strenghts/Weaknesses</button>
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
           <button className={classes.guideButton}>Timings</button>
           <button className={classes.guideButton}>Angles</button>
           <button className={classes.guideButton}>Spacing</button>
           <button className={classes.guideButton}>Understanding Round Pace</button>
           <button className={classes.guideButton}>Communication</button>
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
           <button className={classes.guideButton}>Utility</button>
           <button className={classes.guideButton}>Spacing</button>
           <button className={classes.guideButton}>Round Pace</button>
           <button className={classes.guideButton}>How to correctly bait</button>
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
           <button className={classes.guideButton}>Timings</button>
           <button className={classes.guideButton}>Communicating</button>
           <button className={classes.guideButton}>Awareness</button>
           <button className={classes.guideButton}>Lurking doesn't mean silence</button>
           <button className={classes.guideButton}>Regrouping</button>
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
           <button className={classes.guideButton}>Positioning</button>
           <button className={classes.guideButton}>Angles</button>
           <button className={classes.guideButton}>Timings</button>
           <button className={classes.guideButton}>Awareness</button>
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
           <button className={classes.guideButton}>Surf, KZ and other fun activites</button>
           <button className={classes.guideButton}>Personal Thoughts by Gatr</button>
           <button className={classes.guideButton}>Personal Thoughts by ?</button>
           <button className={classes.guideButton}>Personal Thoughts by ?</button>
           <button className={classes.guideButton}>Personal Thoughts by ?</button>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}