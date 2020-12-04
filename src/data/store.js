import dialogsPageReducer from "./dialogsPage-reducer";
import navBarReducer from "./navBar-reducer";
import profilePageReducer from "./profilePage-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "It's my first post. How are you?", likesCount: 25 },
                { id: 2, message: "Second post", likesCount: 15 },
                { id: 3, message: "Third post", likesCount: 10 }
            ],
            newPostText: 'new post'
        },
        dialogsPage: {
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
        },
        navBar: {
            navbarItems: [
                {path: "/profile", title: "Profile"},
                {path: "/dialogs", title: "Messages"},
                {path: "/newspage", title: "News"},
                {path: "/music", title: "Music"},
                {path: "/settings", title: "Settings"},
                {path: "/friends", title: "FRIENDS"}
            ]
        }
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) { // { type: 'ADD-POST' }

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.navBar = navBarReducer(this._state.navBar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;