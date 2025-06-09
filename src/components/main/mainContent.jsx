import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageSquareCode, ShoppingBasketIcon, StoreIcon } from "lucide-react";
import img from "../../asset/main.jpg";

function MainContent() {
  const navigate = useNavigate();
  const [cv, setCv] = useState("scale-0");
  const location = useLocation();
  const [currentText, setCurrentText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);
  const fileUrl = "/SamanDeepBatham_Developer.pdf";

  const [ecommerceVisible, setEcommerceVisible] = useState(false);
  const [chatAppVisible, setChatAppVisible] = useState(false);

  const texts = [
    "I am a Self-Taught MERN Stack Developer.....",
    "I have 7 years of experience in animation...",
    "Looking for exciting opportunity to start my career!",
  ];
  useEffect(() => {
    const handleTyping = () => {
      const currentParagraph = texts[textIndex];
      if (isDeleting) {
        setCurrentText((prev) =>
          currentParagraph.substring(0, prev.length - 1)
        );
        if (currentText == "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setCharIndex(0);
        }
      } else {
        setCurrentText((prev) =>
          currentParagraph.substring(0, prev.length + 1)
        );
        if (currentText == currentParagraph) {
          setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
        }
      }
    };
    const typingDelay = isDeleting ? 50 : 100;
    const timer = setTimeout(handleTyping, typingDelay);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts]);

  useEffect(() => {
    setCv("scale-0");
    const timer = setTimeout(() => {
      setCv("scale-100");
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target.id === "ecommerce") {
          setEcommerceVisible(entry.isIntersecting);
        } else if (entry.target.id === "chatapp") {
          setChatAppVisible(entry.isIntersecting);
        }
      });
    }, options);

    const ecommerceSection = document.getElementById("ecommerce");
    const chatAppSection = document.getElementById("chatapp");

    if (ecommerceSection) observer.observe(ecommerceSection);
    if (chatAppSection) observer.observe(chatAppSection);

    return () => {
      if (ecommerceSection) observer.unobserve(ecommerceSection);
      if (chatAppSection) observer.unobserve(chatAppSection);
    };
  }, []);

  return (
    <div className="font-raleway lg:ml-[200px] md:ml-[150px] h-screen pt-20 ">
      <div className="bg-black grid grid-cols-1 md:grid-cols-2 w-full">
        <div className="flex flex-col justify-center items-start pl-10">
          <h1 className="text-white  font-bold xl:text-3xl lg:text-xl ">
            FullStack Developer
          </h1>
          <h1 className="text-white xl:text-4xl lg:text-2xl ">
            Hi,I am{" "}
            <span className="text-white font-extrabold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              Saman Batham
            </span>
          </h1>
          <h1 className="text-white  font-extrabold xl:text-xl lg:text-md">
            {currentText}
          </h1>

          <div className="w-[85%]">
            <p className="text-white xl:text-lg lg:text-sm text-[13px]">
              I am an aspiring MERN Stack Developer.I have prior experience of 7
              Years in animation.I am eager to start my career.If you have any
              opportunity for me Pls contact me.
            </p>
          </div>
          <div className="flex gap-2 pt-5">
            <Button
              className={`lg:p-5 bg-green-400 text-black font-extrabold rounded-[2px] shadow-lg lg:text-sm xs:text-[15px] xs:p-3 hover:text-white transform transition-transform duration-500 ${cv}`}
            >
              <a href={fileUrl} download={"SamanDeepBatham_Developer.pdf"}>
                {" "}
                Download CV
              </a>
            </Button>
            <Button
              onClick={() => navigate("/contact")}
              className={`lg:p-5 bg-white text-black font-bold shadow-lg-sdpan rounded-[2px] lg:text-sm xs:text-[15px] xs:p-3 hover:text-white transform transition-transform duration-500 ${cv}`}
            >
              Contact
            </Button>
          </div>
        </div>
        <div className="flex item-center justify-center px-4  md:aspect-[4/3]">
          <img
            src={img}
            className="rounded-[50%] lg:w-[80%] hidden md:block"
          />
        </div>
      </div>
      <div className="flex flex-col md:mt-24 mt-10 gap-10">
        <div className="bg-black flex items-center justify-center ">
          <h1 className="font-bold underline underline-offset-8 text-white">
            What I Did
          </h1>
        </div>
        <div className="bg-black grid md:grid-cols-2 grid-cols-1 items-stretch gap-5 ">
          <div className=" flex justify-center   p-5 ">
            <div
              id="ecommerce"
              className={`flex items-start justify gap-5 pb-10 w-full lg:w-[80%] px-4 bg-gray-700 p-5 rounded-xl
             `}
            >
              <ShoppingBasketIcon className="h-10 w-10  text-blue-500 p-2 rounded-sm bg-gray-100" />
              <div className="w-full flex flex-col gap-1 ">
                <h1 className="font-bold text-white text-sm">E-Commerce</h1>
                <p className="text-white text-[12px]">
                  Built a fully functional e-commerce web application enabling
                  users to browse products, manage carts, and complete payments
                  and many more features.
                </p>
                <Button
                  onClick={() => navigate("/ecommerce")}
                  className=" m-2 hover:bg-green-400 hover:text-black font-bold"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
          <div className=" flex justify-center p-5 ">
            <div
              id="chatapp"
              className={`flex items-start justify gap-5 pb-10 w-full lg:w-[80%] px-4  bg-gray-700 p-5 rounded-xl`}
            >
              <MessageSquareCode className="h-10 w-10 text-blue-500 p-2 rounded-sm bg-gray-100" />
              <div className="w-full flex flex-col gap-1">
                <h1 className="font-bold text-white">Chat-App</h1>
                <p className="text-white text-[12px]">
                  Developed a real-time messaging platform enabling users to
                  connect instantly. The app supports multiple chat rooms and
                  many other features
                </p>
                <Button
                  onClick={() => navigate("/chatapp")}
                  className="m-2 hover:bg-green-400 hover:text-black font-bold"
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
