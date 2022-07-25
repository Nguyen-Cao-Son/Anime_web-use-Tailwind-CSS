import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom"
import { AuthContextProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Account from "./pages/Account";
import PretecteRoute from "./Components/PretecteRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/account" element={
          <PretecteRoute>
            <Account/>
          </PretecteRoute>
          }/>

        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
