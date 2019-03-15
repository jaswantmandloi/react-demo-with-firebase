import NotFound from "../NotFound";
import SignIn from "../SignIn";

import UserDashboard from "../UserDashboard";
import Posts from "../Posts";
import Post from "../Posts/Post";

import Config from "../../Shared/Config";

const prefixUrl = Config.prefixUrl;

const routes = {
  rootPath: {
    path: prefixUrl + "/",
    component: SignIn,
    linkName: "Home",
    routeType: "NoAuthRoute"
  },
  signin: {
    path: prefixUrl + "/signin",
    component: SignIn,
    linkName: "Sign In",
    routeType: "NoAuthRoute"
  },
  signup: {
    path: prefixUrl + "/signup",
    component: SignIn,
    linkName: "Sign Up",
    routeType: "NoAuthRoute"
  },
  forgotPass: {
    path: prefixUrl + "/forgot-password",
    linkName: "Forgot Password",
    component: SignIn,
    routeType: "NoAuthRoute"
  },
  dashboard: {
    path: prefixUrl + "/dashboard",
    component: UserDashboard,
    linkName: "Dashboard",
    routeType: "PrivateRoute"
  },
  posts: {
    path: prefixUrl + "/posts",
    component: Posts,
    linkName: "Posts",
    routeType: "PublicRoute"
  },

  post: {
    path: prefixUrl + "/posts/:id",
    component: Post,
    linkName: "Post",
    routeType: "PublicRoute"
  },

  all: {
    path: "**",
    component: NotFound,
    linkName: "",
    routeType: "PublicRoute"
  }
};

export default routes;
