// TODO: custom sync event emitter coz today I'm lazy and I can't decide what I want for data
// maybe it's even worse then any other solution, but I just want to made it

type EventData = {
    [params: string]: any,
}

type MethodData = {
    [params: string]: any,
}

type Method = (eventData: EventData, methodData: MethodData) => void;

type Events = {
    [eventKey: string]: Record<any, any>; // must be Map with functions as key and value
}

const events: Events = {};

function on(eventArray = [], method: Method, methodArgs?: MethodData) {
    eventArray.forEach((event) => {
        if (!events[event]) {
            events[event] = new Map();
        }

        events[event].set(method, (eventData: EventData) => {
            method(eventData, methodArgs);
        })
    })
}

function off(eventArray = [], method) {
    eventArray.forEach((event) => {
        events[event]?.delete(method);
    })
}

function emit(event: string, eventData = {}) {
    let eventsMap = events[event] ?? new Map();
    eventsMap.forEach((methodValue) => {
        // @ts-ignore
        methodValue(eventData);
    });
}

export const eventEmitter = {
    on,
    off,
    emit,
}
