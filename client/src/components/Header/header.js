import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import styles from './headerStyle';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/core/Icon';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Toolbar } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';





class Header extends React.Component {
    state={
        mobileMoreAnchorEl: null,
    };

    handleMobileMenuOpen = event => {
        this.setState({
            mobileMoreAnchorEl: event.currentTarget
        })
    };

    handleMobileMenuClose = () => {
        this.setState({mobileMoreAnchorEl: null})
    }

    Test = () => {
        console.log('hi')
    }

    render() {
        const {classes} = this.props;
        const {mobileMoreAnchorEl } = this.state;
        const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

        const renderMobileMenu = (
            <Menu anchorEl={mobileMoreAnchorEl}
                  anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                  transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                  open={isMobileMenuOpen}
                  onClose={this.handleMobileMenuClose}>
                <ul className={classes.ul}>
                    <li className={classes.li}><NavLink className={classes.mobileLink} color="inherit" to="/" onClick={this.handleMobileMenuClose}>View Calendar</NavLink></li>
                    <li className={classes.li}><NavLink className={classes.mobileLink} to="/event" onClick={this.handleMobileMenuClose} >Add Event</NavLink></li>
                </ul>
            </Menu>
        )
        return (
            <div className={classes.root} >
                <AppBar position="static" className={classes.nav}>
                    <Toolbar>
                        <Typography variant="h6" color="inherit" className={classes.grow}>
                            Big Calendar Application
                            <Icon className={classNames(classes.icon, 'fas fa-calendar-alt')} color="action" />
                        </Typography>
                        <div className={classes.sectionDesktop}>
                            <NavLink color="inherit" to="/" className={classes.link}>View Calendar</NavLink>
                            <NavLink to="/event" className={classes.link}>Add Event</NavLink>
                        </div>
                        <div className={classes.sectionMobile}>
                            <IconButton color="inherit" aria-label="Menu" aria-haspopup="true" onClick={this.handleMobileMenuOpen}>
                                <MenuIcon />
                            </IconButton>
                        </div>
                        
                    </Toolbar>
                </AppBar>
                {renderMobileMenu}
            </div>
        )
    }

}
// const Header = (props) => {
//     const {classes} = props;
//     return (
//       <AppBar position="static" className={classes.nav}>
//          <Toolbar>
//             <Typography variant="h6" color="inherit" className={classes.typography}>
//                 Big Calendar Application
//                 <Icon className={classNames(classes.icon, 'fas fa-calendar-alt')} color="action" />
//             </Typography>
//             <IconButton color="inherit" aria-label="Menu">
//                 <MenuIcon />
//             </IconButton>
//          </Toolbar>
            
//        </AppBar>

//     )
    
// }

export default withStyles(styles)(Header);