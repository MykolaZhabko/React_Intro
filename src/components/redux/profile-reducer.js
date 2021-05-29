const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Hello React and World!", like_count: 33 },
    { id: 2, message: "Hello React and Mykola!", like_count: 40 },
    { id: 3, message: "Passing props from INDEX.js", like_count: 100 },
  ],
  newPostText: "Zhabko Mykola",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 4,
        message: state.newPostText,
        like_count: 0,
      };

      return {
        ...state,
        posts: [newPost, ...state.posts],
        newPostText: "",
      };
    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText,
      };
  }

  return state;
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
