import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import routes from './../../routes';
import {authSelectors} from './../../redux/auth'

function Navigation({isAuthenticated}){

    console.log(routes);

    return(
        <>
            <NavLink exact to={routes.home} className="NavLink" activeClassName="NavLink--active">Home</NavLink>
            {isAuthenticated && <NavLink to={routes.contacts} className="NavLink" activeClassName="NavLink--active">Contacts</NavLink>}
        </>
    )
}

const mapStateToProps = (state) =>({
    isAuthenticated:authSelectors.getIsAuthenticated(state)
})


export default connect(mapStateToProps)(Navigation)