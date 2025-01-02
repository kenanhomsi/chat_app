import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import { io, Socket } from "socket.io-client";
interface SocketContextProps {
    socket: Socket | null;
    onlineUsers: string[];
}
const SocketContext = createContext<SocketContextProps>({
    socket: null,
    onlineUsers: []
})
export const useSocketContext = () => {
    return useContext(SocketContext)
}
export const SocketContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const { authUser } = useAuthContext();
    useEffect(() => {
        if (authUser) {
            const socket = io("https://chat-app-gph2.onrender.com/", {
                query: {
                    userId: authUser.id,
                },
            });
            setSocket(socket);
            // socket.on() is used to listen to the events. can be used both on client and server side
            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users);
            });
            return () => {
                socket.close();
            }
        } else {
            if (socket) {
                socket.close();
                setSocket(null);
            }
        }
        // Ensure the cleanup function returns void when socket is not defined 
        return () => { };
    }, [authUser]);
    return (
        <SocketContext.Provider value={{ socket, onlineUsers }}>{children}</SocketContext.Provider>
    )
}
