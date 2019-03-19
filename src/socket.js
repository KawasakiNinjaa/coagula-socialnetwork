import * as io from "socket.io-client";
import { onlineUsers, userJoined, userLeft, chatroomMessages } from "./actions";
let socket;

export function getSocket(store) {
    if (!socket) {
        socket = io.connect();

        socket.on("onlineUsers", data => {
            store.dispatch(onlineUsers(data));
        });

        socket.on("userJoined", data => {
            store.dispatch(userJoined(data));
        });

        socket.on("userLeft", data => {
            store.dispatch(userLeft(data));
        });

        socket.on("chatroomMessages", data => {
            store.dispatch(chatroomMessages(data));
        });
    }

    return socket;
}
