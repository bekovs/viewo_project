import AuthContextProvider from "./AuthContextProvider";
import ChatContextProvider from "./ChatContextProvider";
import Likes from "./components/Likes";

import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
function App() {
  return (
    <div className="App">
      <ChatContextProvider>
        <AuthContextProvider>
          <Navbar />
          <MainRoutes />
        </AuthContextProvider>
      </ChatContextProvider>
    </div>
  );
}

export default App;
