import "./App.css";
import Login from "./components/login";
import Profile from "./components/profile";
import UserContextProvider from './context/userContextProvider'


function App() {
  return (
    <UserContextProvider>
      <h2>Hello this is demo app for react CONTEXT API!</h2>
      <Login/>
      <Profile/>
    </UserContextProvider>
  );
}

export default App;
