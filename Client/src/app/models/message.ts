export interface MessageModel {
    id: string,
    from: string,
    to: string,
    sentTime: Date;
    deliveredTime: Date;
    readTime: Date;
    message: string
}