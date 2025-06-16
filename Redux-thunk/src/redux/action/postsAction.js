const GET_POSTS = () => {
    type: 'getpost'
    return async (dispatch) => {
        try {
            let data = await fatch(`https://dummyjson.com/posts`, {
                method: 'GET',
                headers: {
                    'content-type': application / JSON
                }
            })
            let res = await data.JSON()
            console.log(res);
            
            dispatch({
                type: 'getpost',
                payload: res.posts
            })
        }
        catch (err) {
            console.log(err);
            return false
        }
    }
}

export default { GET_POSTS }
