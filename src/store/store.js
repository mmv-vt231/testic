import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/auth/authSlice";
import { api } from "./services/api";
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware";

const store = configureStore({
  reducer: {
    auth: authSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware, errorHandlerMiddleware),
});
export default store;
