import UsersView from "../containers/UsersView";
import UserView from "../containers/UserView";
import AlbumView from "../containers/AlbumView";
import PostView from "../containers/PostView";
import PhotoView from "../containers/PhotoView";

export const routes = [
    {
        exact: true,
        path: "/users",
        component: UsersView
    },
    {
        exact: true,
        path: "/users/:id",
        component: UserView
    },
    {
        exact: true,
        path: "/posts/:id",
        component: PostView
    },
    {
        exact: true,
        path: "/albums/:id",
        component: AlbumView
    },
    {
        exact: true,
        path: "/photos/:id",
        component: PhotoView
    }
]