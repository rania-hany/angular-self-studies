import { Action } from "@ngrx/store"
import { Post } from "../posts/posts.component";

export const POSTS_ACTIONS = {
    GET: "GET_POSTS",
    ADD: "ADD_POST",
    DELETE: "DELETE_POST"
}

export class AddPostAction implements Action {
    readonly type: string = POSTS_ACTIONS.ADD;
    constructor(public payload: Post){ }
}

export class DeletePostAction implements Action {
    readonly type: string = POSTS_ACTIONS.DELETE;
    constructor(public payload: Post){ }
}


export class GetPostsAction implements Action {
    readonly type: string = POSTS_ACTIONS.GET;
    payload: Array<Post>;
}
