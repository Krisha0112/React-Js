const GET_POSTS = () => {
    type : 'getpost'
    return async (dispatch) => {
        try {
            let data = await fatch(`https://dummyjson.com/posts`)
            method : 'GET'
        }
        catch(err) {
            console.log(err);
            return false
        }
    }
}

export default {GET_POSTS}
