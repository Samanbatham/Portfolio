import { Card, CardContent } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import ecommerce from "../asset/ecommerce-bg.png";
import chatapp from '../asset/bg.png'
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

function Projects() {
  const [fadeIn, setFadeIn] = useState(false);
  const location = useLocation();

  function handleEcommerce() {
    window.location.href = "https://github.com/Samanbatham/E-Commerce";
  }
  function handleChatApp() {
    window.location.href = "https://github.com/Samanbatham/Chat-App-Latest";
  }
  useEffect(() => {
    setFadeIn(false); 
    const timer = setTimeout(() => {
      setFadeIn(true); 
    }, 100); 
    return () => clearTimeout(timer); 
  }, [location]);

  const navigate = useNavigate();
  return (
    <div className="flex flex-col lg:w-full items-center lg:h-screen xs:h-full lg:pb-0 xs:pb-2 gap-12 bg-black font-raleway lg:ml-[15%] xs:ml-0 xs:w-[430px]  ">
      <h1 className="text-2xl text-white font-bold underline pt-7">Projects</h1>
      <div
        className={`grid lg:grid-cols-3 xs:grid-cols-1 lg:gap-[100px]  xs:gap-[20px] transition-all duration-700 transform ${
          fadeIn ? "lg:translate-y-0 " : "lg:translate-y-full "
        } ${fadeIn ? "lg:opacity-100 xs:opacity-100" : "lg:opacity-0 xs:opacity-100"}`}
      >
        <Card className="lg:h-[400px] lg:w-[350px] xs:h-[400px] xs:w-[350px] bg-transparent rounded-sm hover:cursor-pointer hover:scale-105 hover:bg-gray-200 text-white hover:text-black transition-all  shadow-[3px_3px_5px_0px_rgb(60,68,73,.2)] ">
          <CardContent className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-lg p-4  underline">Ecommerce</h1>
            <img
              src={ecommerce}
              className="shadow-[3px_3px_5px_0px_rgb(60,68,73,.7)]"
            />
            <p className="pt-3 text-[16px]">
              Built a fully functional e-commerce web application enabling users
              to browse products, manage carts, and complete payments and many
              more features.
            </p>
            <div className="flex gap-5">
              <Button
                className="bg-green-500 p-3 mt-2 font-bold"
                onClick={handleEcommerce}
              >
                Github
              </Button>
              <Button
                className="bg-green-500 p-3 mt-2 font-bold"
                onClick={() => navigate("/ecommerce")}
              >
                View Detail
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card className="lg:h-[400px] lg:w-[350px] xs:h-[400px] xs:w-[350px] bg-transparent rounded-sm hover:cursor-pointer hover:scale-105 hover:bg-gray-200 text-white hover:text-black transition-all shadow-[3px_3px_5px_0px_rgb(60,68,73,.2)] ">
          <CardContent className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-lg  p-4 underline">Chat-App</h1>
            <img
              src={chatapp}
              className="shadow-[3px_3px_5px_0px_rgb(60,68,73,.7)]"
            />
            <p className="pt-3 text-[16px]">
              Developed a real-time messaging platform enabling users to connect
              instantly. The app supports multiple chat rooms and many other
              features
            </p>
            <div className="flex gap-5">
              <Button
                className="bg-green-500 p-3 mt-2 font-bold"
                onClick={handleEcommerce}
              >
                Github
              </Button>
              <Button
                className="bg-green-500 p-3 mt-2 font-bold"
                onClick={() => navigate("/chatapp")}
              >
                View Detail
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default Projects;
