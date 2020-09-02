const initialState = {
    listContact: [],
    detailContact: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case "GET_DATA":
            return {
                ...state,
                listContact: action.datas,
                detailContact: action.datas[0]
            }
        case "GET_DETAIL":
            return {
                ...state,
                detailContact: action.data
            }
        case "GET_UPDATE_DETAIL":
            return {
                ...state,
                listContact: action.datas,
                detailContact: action.data
            }
        default:
            return {
                listContact: [],
                detailContact: {}
            }
    }
}