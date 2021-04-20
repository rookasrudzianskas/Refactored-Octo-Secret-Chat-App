import {createContext, useContextSelector} from "use-context-selector";
import React from "react";

const CurrentRoomContext = createContext();

export const CurrentRoomProvider = ({children, data}) => {
    return (
        <CurrentRoomContext.Provider value={(data)}>
            {children}
        </CurrentRoomContext.Provider>
    );
};

export const useCurrentRoom = (selector) => useContextSelector(CurrentRoomContext, selector);