import { Socket } from "socket.io-client";

export interface User {
    _id: string;
    email: string;
    fullName: string;
    password: string;
    profilePic: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface Message {
    _id: string;
    senderId: string;
    receiverId: string;
    text: string;
    image: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ChatStore {
    messages: Message[];
    users: User[];
    selectedUser: User | null;
    isUsersLoading: boolean;
    isMessagesLoading: boolean;
    getUsers: () => Promise<void>;
    getMessages: (userId: string) => Promise<void>;
    subscribeToMessages: () => void;
    unsubscribeFromMessages: () => void;
    sendMessage: (messageData: { text: string; image: string | null}) => Promise<void>;
    setSelectedUser: (selectedUser: User | null) => void;
}

export interface AuthStore {
    authUser: User | null
    isSigningUp: boolean
    isLogingIn: boolean
    isUpdatingProfile: boolean
    isCheckingAuth: boolean
    onlineUsers: string[]
    socket: Socket | null

    checkAuth: () => Promise<void>
    signup: (data: {
        email: string
        fullName: string
        password: string
    }) => Promise<void>
    logout: () => Promise<void>
    login: (data: { email: string; password: string }) => Promise<void>
    updateProfile: (data: Partial<User>) => Promise<void>
    connectSocket: () => void
    disconnectSocket: () => void
}

export interface ThemeStore {
  theme: string;
  setTheme: (theme: string) => void;
};

export { }