import logo from "./logo.svg";
import "./App.css";
import Router from "./Pages/Router/Router";
import { DarkModeContextProvider } from "./context/darkModeContext";
import { AuthContextProvider } from "./context/authContext";
function App() {
  return (
    <DarkModeContextProvider>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </DarkModeContextProvider>
  );
}

export default App;
