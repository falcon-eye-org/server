export interface IEvent {
    idDevice: string;
    timestamp: string;
    userAgent: string;
};

export interface IParsedEvent extends IEvent {
    browser: {
        name: string;
        version: string;
        major: string;
    };
    device: {
        name: string;
        version: string;
    };
}