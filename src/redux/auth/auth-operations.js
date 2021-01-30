import axios from 'axios';
import authActions from './auth-actions';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const token = {
    set(token){
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset(){
        axios.defaults.headers.common.Authorization = '';
    }
}

const register = credential => async dispatch => {

    dispatch(authActions.registerRequest());

    try{
        const res = await axios.post('/users/signup', credential);
        token.set(res.data.token);
        dispatch(authActions.registerSuccess(res.data));
    }catch (err){
        dispatch(authActions.registerError(err.message));

    }
}

const login = credential => async dispatch => {
    dispatch(authActions.loginRequest());

    try{
        const res = await axios.post('/users/login', credential);
        token.set(res.data.token);
        dispatch(authActions.loginSuccess(res.data));
    }catch (err){
        dispatch(authActions.loginError(err.message));

    }
}

const logout = () => async dispatch => {
    dispatch(authActions.logoutRequest());

    try{
        await axios.post('/users/logout')
        token.unset();
        dispatch(authActions.logoutSuccess());
    }catch (err){
        dispatch(authActions.logoutError(err.message));

    }
}

const getCurrentUser = () => async (dispatch, getState) => {

    console.log(getState())

    const {auth:{token:getToken}} = getState();

    if(!getToken){
        return;
    }

    token.set(getToken);

    dispatch(authActions.getCurrentUserRequest());

    try{
        const res = await axios.get('/users/current')
        dispatch(authActions.getCurrentUserSuccess(res.data));
    }catch (err){
        dispatch(authActions.getCurrentUserError(err.message));

    }
}

export default {
    register,
    login,
    logout,
    getCurrentUser
}
