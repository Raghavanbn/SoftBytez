import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Typography } from '@mui/material';
import { Link  } from 'react-router-dom';


export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <p className='normal-case text-black'>
          <Typography>
            <span className="font-righteous">Menu</span>
          </Typography>
        </p>
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}        
      >
        <MenuItem onClick={handleClose}>
            <Typography>
                <Link to="/"><span className="font-righteous">Home</span></Link> 
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Typography>
                <Link to="/who-we-are"><span className="font-righteous">Who We Are</span></Link> 
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Typography>
                <Link to="/what-we-do"><span className="font-righteous">What We Do</span></Link> 
            </Typography>
        </MenuItem>
        <MenuItem onClick={handleClose}>
            <Typography>
                <Link to="/contact-us"><span className="font-righteous">Contact US</span></Link>  
            </Typography>
        </MenuItem>        
      </Menu>
    </div>
  );
}