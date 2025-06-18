const ADD_USER = () => {
    return( async (dispatch) => {
        try{
            let data = await fetch(`http://localhost:8000`, {
                method : 'POST',
                headers: {
                    'vontent-type' : 'application/json'
                },
                body: JSON.stringify(record)
            })
            let res = await data.json();
            dispatch({
                type: 'adduser',
                payload : res
            })
        }catch(err){
             dispatch({
                type: 'addusererr',
                payload : err
            })
        }
    })
}
 
// const GET_USER = () => {
//     return( async (dispatch) => {
//         try {
//             let data = await fetch (`http://localhost:8000`, {
//                 method: 'GET'
//             })
//             let res = await data.json();
//         }catch(err) {
//             console.log(err)
//             return false
//         }
//     })
// }

export default {ADD_USER}; 