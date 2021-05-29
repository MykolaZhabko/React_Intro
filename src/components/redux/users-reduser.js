const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";

let initialState = {
    users: [
        { id: 1, followed: false, fullNmae: "Mykola", status: "I am a student", location: { city: "Seinajoki", country: "Finland" } },
        { id: 2, followed: false, fullNmae: "Ivan", status: "I am a footbal player", location: { city: "Myhoshkvar", country: "Russia" } },
        { id: 3, followed: false, fullNmae: "Taras", status: "I am a progra,,er", location: { city: "Kiev", country: "Ukraine" } },
        { id: 4, followed: false, fullNmae: "John", status: "I am a teacher", location: { city: "California", country: "USA" } },
        { id: 5, followed: false, fullNmae: "Simon", status: "I am a bus driver", location: {city:"Stockoverflow", country:"Sweden"}}
        
    ],

}

const usersReduser = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            
        default:
            return state;
    }
}


export const followAC = (userId) => ( { type: FOLLOW, uid: userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW , uid: userId});