import Header from "../component/Header";
import Navbar from "../component/Navbar";

import Footer from "../component/Footer";
import Home from "../page/Home";
function Index() {
  return (
    <div>
      {/*  */}
      <Navbar />
      {/*  */}
      <div
        className={`w-full 
         bg-[#FEFBEA]
         h-full`}
      >
        <div className=" w-full md:w-[80%] mx-auto h-full p-3">
          <div className="h-full w-full">
            <Header />
          </div>
        </div>
      </div>
      <Home />
      <div className="h-full w-full bg-[#013220] pt-[7%] ">
        <div className="w-full md:w-[75%] mx-auto h-full pt-[1%] ">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Index;
