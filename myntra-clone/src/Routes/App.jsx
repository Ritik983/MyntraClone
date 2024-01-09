import FetchItems from "../components/FetchItems";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer></Footer>
      <FetchItems/>
      
    </>
  );
}

export default App;
