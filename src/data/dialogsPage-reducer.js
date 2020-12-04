const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How are you?' }
    ],
    newMessageText: 'new message',
    dialogsData: [
        { id: 1, name: 'Илья', img: 'https://whatsism.com/uploads/posts/2018-07/1530545833_il2zmvzx9py.jpg' },
        { id: 2, name: 'Света', img: 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg' },
        { id: 3, name: 'E M', img: 'https://cdn66.printdirect.ru/cache/product/9d/39/8392279/tov/all/480z480_front_35_0_0_0_d764b3424a2d7f37ad1341720f99.jpg?rnd=1550819450' }
    ]
}

const dialogsPageReducer = (state = initialState, action) => {

    switch(action.type) {
        case SEND_MESSAGE: {
            return {
                ...state,
                newMessageText: '',
                messagesData: [...state.messagesData, {id: 3,  message: state.newMessageText}]
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {...state,
            newMessageText: action.newMessage
            };
        }
        default:
            return state;
    }
}
export const sendMessage = () => {
    return {
        type: SEND_MESSAGE
    }
}
export const updateNewMessageText = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_TEXT, 
        newMessage: text
    }
}
export default dialogsPageReducer;