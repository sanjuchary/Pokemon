import "./App.css";
// import AuthProvider from "./context/AuthProvider";
// import Navigation from "./Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MainStack from "./Navigation/mainStack";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        {/* <AuthProvider> */}
        <MainStack />
        {/* </AuthProvider> */}
      </Provider>
    </QueryClientProvider>
  );
}

export default App;
