import { connect } from "react-redux"

const getIsAuthenticated = state =>  Boolean(state.auth.token);
const getAuthUserName = state => state.auth.user.name

export default {
    getIsAuthenticated,
    getAuthUserName
}