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
    <div className="flex flex-col items-center  bg-black font-raleway md:h-screen h-full lg:ml-[200px] md:ml-[150px] gap-10">
     <div>
       <h1 className="text-2xl text-white font-bold underline pt-7">Projects</h1>
     </div>
      <div
        className={`grid md:grid-cols-2 xs:grid-cols-1 gap-[20px] transition-all duration-700 transform ${
          fadeIn ? "lg:translate-y-0 " : "lg:translate-y-full "
        } ${fadeIn ? "lg:opacity-100 xs:opacity-100" : "lg:opacity-0 xs:opacity-100"}`}
      >
        <Card className=" md:ml-16 m-2 max-w-[400px]   bg-transparent rounded-sm hover:cursor-pointer hover:scale-105 hover:bg-gray-200 text-white hover:text-black transition-all  shadow-[3px_3px_5px_0px_rgb(60,68,73,.2)] ">
          <CardContent className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-lg p-4  underline">Ecommerce</h1>
            <div class="w-full aspect-video overflow-hidden">
              <img
              src={ecommerce}
              className="shadow-[3px_3px_5px_0px_rgb(60,68,73,.7)] w-full h-full object-cover"
            />
            </div>
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
        <Card className=" md:mr-16 m-2 max-w-[400px]  bg-transparent rounded-sm hover:cursor-pointer hover:scale-105 hover:bg-gray-200 text-white hover:text-black transition-all shadow-[3px_3px_5px_0px_rgb(60,68,73,.2)] ">
          <CardContent className="flex flex-col items-center justify-center">
            <h1 className="font-bold text-lg  p-4 underline">Chat-App</h1>
            <div class="w-full aspect-video overflow-hidden">
              <img
              src={chatapp}
              className="shadow-[3px_3px_5px_0px_rgb(60,68,73,.7)] w-full h-full object-cover"
            />
            </div>
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
