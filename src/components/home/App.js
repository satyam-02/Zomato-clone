import React, {useState} from "react";
import Header from "../../pgComp/header/Header";
import Tabo from "../../pgComp/tabo/Tabo";
import Footer from "../../pgComp/footer/Footer";
import Delivery from "../delivery/app";
import DiningOut from "../diningout/app";
import NightLife from "../nightlife/app";

function App() {

  const [activeTab,setActiveTab]=useState("Delivery");
  return (
    <div>
    <Header />
    <Tabo activeTab={activeTab} setActiveTab={setActiveTab} />
    {GetScreen(activeTab)}
    <Footer />
    </div>
  );
}

function GetScreen(tab){
  switch(tab)
  {
    case "Delivery":
    return <Delivery />;
    case "Dining out":
    return <DiningOut />;
    case "Nightlife":
    return <NightLife />;
    default:
    return <DiningOut/>;
  }

}
export default App;
