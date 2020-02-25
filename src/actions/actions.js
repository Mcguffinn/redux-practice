import axios from 'axios';

export const getUsers = () => dispatch =>{

        axios
            .get('https://cors-anywhere.herokuapp.com/https://jdo-user-post-api.herokuapp.com/api/users')
            .then(result =>{
                console.log(result)
                dispatch({ type: "GET_USERS", payload: result.data })
            })
            .catch(err => console.log("error getting users:" `${err}`))
}