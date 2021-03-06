//all axios req will go otherUserId// all action creator
//EVERY FN MUST RETURN AN OBJECT
import axios from "./axios";

export async function getFriendsAndWannabes() {
    const friendsAndWannabes = await axios.get("/friends-wannabes");
    console.log("friendsAndWannabes: ", friendsAndWannabes.data);
    return {
        type: "GET_FRIENDS_WANNABES",
        friendsWannabes: friendsAndWannabes.data
    };
    //axios GET req to get friends and receiveFriendsWannabes.
    // RES = return object with type key and all the list
    //you need friends to see that
}

export async function unfriend(otherId) {
    const unfriended = await axios.post("/new-friendship-status", {
        action: "cancel",
        otherId: otherId
    });
    console.log("unfriended: ", unfriended);
    return {
        type: "UNFRIEND",
        otherId: otherId
    };
}

export async function accept(otherId) {
    const accepted = await axios.post("/new-friendship-status", {
        action: "accept",
        otherId: otherId
    });
    console.log("accepted: ", accepted);

    return {
        type: "ACCEPT",
        otherId: otherId
    };
}

export async function onlineUsers(data) {
    console.log("data in onlineUsers", data);
    return {
        type: "ONLINE_USERS",
        user: data
    };
}

export async function userJoined(data) {
    console.log("data in userJoined: ", data);
    return {
        type: "USER_JOINED",
        user: data
    };
}
export async function userLeft(data) {
    console.log("data in userLeft: ", data);
    return {
        type: "USER_LEFT",
        id: data
    };
}

export function chatroomMessages(data) {
    return {
        type: "CHATROOM_MESSAGES",
        chatroom_messages: data
    };
}

export function newChatroomMessage(data) {
    console.log("data in newChatroomMessage: ", data);
    return {
        type: "NEW_CHATROOM_MESSAGE",
        message_info: data
    };
}
