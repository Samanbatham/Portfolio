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
  const fileUrl = "/SamanDeepBatham_WebDeveloper.pdf";

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
    <div className="font-raleway overflow-hidden lg:ml-[15%] md:ml-[15%] xs:h-screen lg:h-full xs:ml-0 xs:pt-20 ">
      <div className="bg-black flex items-center justify-around  lg:p-20 xs:p-4">
        <div>
          <h1 className="text-white sm:text-sm md:text-md lg:text-md xs:text-[15px] font-bold">
            FullStack Developer
          </h1>
          <h1 className="text-white lg:text-4xl sm:text-sm md:text-md  xs:text-[20px] ">
            Hi,I am{" "}
            <span className="text-white lg:text-4xl sm:text-sm md:text-md  xs:text-[20px] font-extrabold">
              Saman Batham
            </span>
          </h1>
          <h1 className="text-white lg:text-xl sm:text-sm md:text-md  xs:text-[12px] font-extrabold pt-2 pb-2">
            {currentText}
            <span className="border-r-2 border-white animate-pulse ml-1"></span>
          </h1>

          <div className="w-[70%]">
            <p className="text-white lg:text-xl sm:text-sm md:text-md  xs:text-[10px]">
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
        <div>
          <img
            src={img}
            width="1400px"
            className="rounded-[50%] lg:w-[1400px] xs:w-[300px]"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <div className="bg-black pt-10 pl-[100px] pb-[50px] xs:-translate-x-6 lg:-translate-x-0">
          <h1 className="font-bold underline underline-offset-8 text-white">
            What I Did
          </h1>
        </div>
        <div className="bg-black flex items-start justify-around">
          <div
            id="ecommerce"
            className={`flex items-start justify gap-5 pb-10 lg:w-[450px] xs:w-[350px]  xs:translate-x-[80px] lg:-translate-x-0 lg:scale-100 xs:scale-50 transition-all duration-1000 ${
              ecommerceVisible ? "opacity-100" : "opacity-0"
            } ${
              ecommerceVisible
                ? "lg:-translate-x-0 xs:translate-x-20"
                : "lg:-translate-x-full xs:translate-x-20"
            }`}
          >
            <ShoppingBasketIcon className="h-10 w-10  text-blue-500 p-2 rounded-sm bg-gray-100" />
            <div className="w-[400px] flex flex-col item">
              <h1 className="font-bold text-white">E-Commerce</h1>
              <p className="text-white">
                Built a fully functional e-commerce web application enabling
                users to browse products, manage carts, and complete payments
                and many more features.
              </p>
              <Button
                onClick={() => navigate("/ecommerce")}
                className="m-2  hover:bg-green-400 hover:text-black font-bold"
              >
                View Details
              </Button>
            </div>
          </div>
          <div
            id="chatapp"
            className={`flex items-start justify gap-5 pb-10 lg:w-[450px] xs:w-[350px] xs:-translate-x-[82px] lg:-translate-x-0 lg:scale-100 xs:scale-50 transition-all duration-1000 ${
              chatAppVisible
                ? "lg:opacity-100 lg:translate-x-0 xs:opacity-100 xs:-translate-x-[82px]"
                : "lg:opacity-0 lg:translate-x-full xs:opacity-0 xs:-translate-x-[82px]"
            } `}
          >
            <MessageSquareCode className="h-10 w-10 text-blue-500 p-2 rounded-sm bg-gray-100" />
            <div className="w-[400px] flex flex-col">
              <h1 className="font-bold text-white">Chat-App</h1>
              <p className="text-white">
                Developed a real-time messaging platform enabling users to
                connect instantly. The app supports multiple chat rooms and many
                other features
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
  );
}

export default MainContent;
