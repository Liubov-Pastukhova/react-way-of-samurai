let initialState = {
    navbarItems: [
        {path: "/profile", title: "Profile"},
        {path: "/dialogs", title: "Messages"},
        {path: "/newspage", title: "News"},
        {path: "/music", title: "Music"},
        {path: "/users", title: "Users"},
        {path: "/settings", title: "Settings"},
        {path: "/friends", title: "FRIENDS"}
    ]
}

const navBarReducer = (state = initialState, action) => {


    return state;
}

export default navBarReducer;