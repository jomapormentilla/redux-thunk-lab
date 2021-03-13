// write and export your action creator function here
const url = `https://learn-co-curriculum.github.io/cat-api/cats.json`

export const fetchCats = () => {
    return (dispatch) => {
        dispatch({ type: 'LOADING_CATS' })
        fetch(url)
        .then(res => res.json())
        .then(data => {
            dispatch({ type: 'ADD_CATS', cats: data.images })
        })
    }
}