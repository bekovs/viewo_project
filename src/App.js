import AuthContextProvider from "./AuthContextProvider";
import Likes from "./components/Likes";

import Navbar from "./components/Navbar";
import MainRoutes from "./MainRoutes";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Navbar />
        {/* <Likes /> */}
        <MainRoutes />
      </AuthContextProvider>
    </div>
  );
}

export default App;
