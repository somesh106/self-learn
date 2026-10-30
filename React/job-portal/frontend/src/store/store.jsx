import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import savedJobReducer from "./slices/savedJobSlice";
import { persistStore, persistReducer } from "redux-persist";

const storage = {
    getItem: (key) => Promise.resolve(localStorage.getItem(key)),

    setItem: (key, value) => {
        localStorage.setItem(key, value);
        return Promise.resolve();
    },

    removeItem: (key) => {
        localStorage.removeItem(key);
        return Promise.resolve();
    },
};

const authPersistConfig = {
    key: "auth",
    storage
};
const persistedAuthReducer = persistReducer(
    authPersistConfig,
    authReducer
);

const savedJobsPersistConfig = {
    key: "savedJobs",
    storage
};
const persistedSavedJobsReducer = persistReducer(
    savedJobsPersistConfig,
    savedJobReducer
)

export const store = configureStore({
    reducer: {
        // auth: authReducer,
        auth: persistedAuthReducer,
        savedJobs: persistedSavedJobsReducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    "persist/PERSIST",
                    "persist/REHYDRATE",
                    "persist/PAUSE",
                    "persist/PURGE",
                    "persist/REGISTER",
                    "persist/FLUSH",
                ],
            },
        })
});

export const persistor = persistStore(store);