import { RECEIVE_DATA } from '../actions'

function footballinfo (state = {}, action) {
    switch (action.type) {
        case RECEIVE_DATA: 
            return {
                leagueInfo: action.footballData
            }
            

        default:
            return state
    }

}

export default footballinfo