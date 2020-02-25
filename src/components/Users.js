import React from 'react';
import {connect} from 'react-redux'
import {getUsers} from '../actions/actions'

const Users = props => {
    console.log(props);
    return(
        <div>
            <h2>Users:</h2>
            {props.users.map(user=>{
                return <p>{user.name}</p>
            })}
            <button onClick={()=> props.getUsers()}>Get Users</button>
        </div>
    )
}

const mapStateToProps = state => {
    return{
        users: state.users,
    }
}
// export default Users;
export default connect(mapStateToProps, {getUsers})(Users)