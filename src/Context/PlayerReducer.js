
const playerReducer = (state,action) =>{
    switch(action.type){
        case "SET_SONGS_ARRAY" :
            return {
                ...state,
                songsList : action.data,

            }
        case "SET_CURRENT_SONG" :
            return {
                ...state,
                currentSong : action.data,
                isPlaying : true,
            }

        case "TOGGLE_PLAYING" :
            return {
                ...state,
                isPlaying : action.data,
            }
        
        case "PROGRESS_BAR":
            return {
                ...state,
                progress : action.data.progress,
                duration : action.data.total,
            }
        default :
            return state
    }
}

export default playerReducer;