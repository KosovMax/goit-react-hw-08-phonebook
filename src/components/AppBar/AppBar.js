import Navigation from './../Navigation';
import AuthNav from './../AuthNav';
import UserMenu from './../UserMenu';
import { Nav, Navbar } from 'react-bootstrap';
import {connect} from 'react-redux';
import {authSelectors} from './../../redux/auth'


function AppBar({isAuthenticated}){
    return(
        <Navbar expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/">React 21+22</Navbar.Brand>
            <Nav className="mr-auto">
                <Navigation />
            </Nav>
            <Nav>
                {isAuthenticated ? <UserMenu/> : <AuthNav/>}
            </Nav>
            
        </Navbar>
    )
}

const mapStateToProps = (state) => ({
    isAuthenticated: authSelectors.getIsAuthenticated(state)
})

export default connect(mapStateToProps)(AppBar)