import Likes from "./components/Likes";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContextProvider";
import PostContextProvider from "./context/PostContextProvider";
import MainRoutes from "./MainRoutes";
function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <PostContextProvider>
          <Navbar />
          {/* <Likes /> */}
          <MainRoutes />
        </PostContextProvider>
      </AuthContextProvider>
    </div>
  );
}

export default App;
