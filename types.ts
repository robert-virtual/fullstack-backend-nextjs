export {}
declare module 'express-session' {
    interface SessionData {
        _userId: string;
    }
}