"use client";

import { createContext, useContext } from "react";

// Create the SessionContext with a default value of null.
const SessionContext = createContext(null);

export function SessionProvider({ session, children }: any) {
    return (
        <SessionContext.Provider value={session}>
            {children}
        </SessionContext.Provider>
    );
}

// Custom hook to access the session context.
export function useSession() {
    return useContext(SessionContext);
}


