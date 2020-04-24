import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import '../guidenav.scss'
import { Link } from 'react-router-dom'

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
    // '&:focus': {
    //   backgroundColor: theme.palette.primary.main,
    //   '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
    //     color: theme.palette.common.white,
    //   },
    // },
  },
}))(MenuItem);

export default function CustomizedMenu2() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
        <div>
            <Button className="GuideBarButton" aria-controls="customized-menu" aria-haspopup="true" variant="contained" color="primary"onClick={handleClick}>Understanding Your Role</Button>
            <StyledMenu id="customized-menu2" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>

                <StyledMenuItem>
                <Link to='/AWP'>AWP</Link>
                </StyledMenuItem>

                <StyledMenuItem>
                <Link to='/Support'>Support</Link>
                </StyledMenuItem>

                <StyledMenuItem>
                <Link to='/Lurker'>Lurk</Link>
                </StyledMenuItem>

                <StyledMenuItem>
                <Link to='/Entry'>Entry</Link>
                </StyledMenuItem>

                <StyledMenuItem>
                <Link to='/IGL'>IGL</Link>
                </StyledMenuItem>

            </StyledMenu>
        </div>
  );
}
