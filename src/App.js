import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import{ Route,Routes } from "react-router-dom"

function App() {
  return (
    <>
   <Navbar />
   <Routes>
   <Route path='/' element={<Home />} />

   </Routes>
   
    </>
  );
}

export default App;
