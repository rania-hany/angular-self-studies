import { AddPostAction, POSTS_ACTIONS } from "./posts.actions";

const initialState = {
    posts: [
        {
            title: 'first post',
            userId: 'rania',
            body: 'kalam kteeer kteeer gowa albi'
        }
    ]
};

export function PostsReducer(
    state = initialState,
    action: AddPostAction
) {
    switch (action.type) {
        case POSTS_ACTIONS.ADD:
            return {
                ...state,
                posts: [...state.posts, action.payload]
            }
        case POSTS_ACTIONS.DELETE:
            const newPosts = state.posts.filter((obj=> { return JSON.stringify(obj) !== JSON.stringify(action.payload)}));

            return {
                ...state,
                posts: newPosts
            }
        case POSTS_ACTIONS.GET:
            return {
                ...state
            }
        default: 
            return {
            ...state
        }
    }
}