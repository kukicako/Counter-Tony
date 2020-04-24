import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import './guidenav.scss'

const StyledMenu = withStyles({
  paper: {
    border: '1px solid #d3d4d5',
  },
})((props) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'center',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'center',
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
      },
    },
  },
}))(MenuItem);

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="GuideNavBar">
        <div>
            <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary" onClick={handleClick}>Introduction</Button>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <StyledMenuItem>
                <ListItemText primary="Introduction" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Awareness" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Timings" />
                </StyledMenuItem>
            </StyledMenu>
        </div>

        <div>
            <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary"onClick={handleClick}>Individual Improvement</Button>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <StyledMenuItem>
                <ListItemText primary="Introduction" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Awareness" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Timings" />
                </StyledMenuItem>
            </StyledMenu>
        </div>

        <div>
            <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary"onClick={handleClick}>Understanding Your Role</Button>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <StyledMenuItem>
                <ListItemText primary="Introduction" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Awareness" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Timings" />
                </StyledMenuItem>
            </StyledMenu>
        </div>

        <div>
            <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary"onClick={handleClick}>Entrying Fragging</Button>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <StyledMenuItem>
                <ListItemText primary="Introduction" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Awareness" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Timings" />
                </StyledMenuItem>
            </StyledMenu>
        </div>

        <div>
            <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary"onClick={handleClick}>Support</Button>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <StyledMenuItem>
                <ListItemText primary="Introduction" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Awareness" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Timings" />
                </StyledMenuItem>
            </StyledMenu>
        </div>

        <div>
            <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary"onClick={handleClick}>Lurking</Button>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <StyledMenuItem>
                <ListItemText primary="Introduction" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Awareness" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Timings" />
                </StyledMenuItem>
            </StyledMenu>
        </div>

        <div>
            <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary"onClick={handleClick}>AWPing</Button>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <StyledMenuItem>
                <ListItemText primary="Introduction" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Awareness" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Timings" />
                </StyledMenuItem>
            </StyledMenu>
        </div>

        <div>
            <Button aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary"onClick={handleClick}>In Game Leading</Button>
            <StyledMenu id="customized-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
                <StyledMenuItem>
                <ListItemText primary="Introduction" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Awareness" />
                </StyledMenuItem>
                <StyledMenuItem>
                <ListItemText primary="Timings" />
                </StyledMenuItem>
            </StyledMenu>
        </div>
    </div>
  );
}
