import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { CornerDownRight } from "lucide-react";
import React, { useEffect, useState } from "react";

function Resume() {
  const [bar, setBar] = useState(0);
  const [javascript, setJavascript] = useState(0);
  const [nodejs, setNodejs] = useState(0);
  const [react, setReactjs] = useState(0);
  const [express, setExpress] = useState(0);
  const [mongodb, setMongodb] = useState(0);
  const [knowledgeButtons, setKnowledgeButtons] = useState([]);
  const [scale, setScale] = useState([]);
  const [cv, setCv] = useState("scale-0");
  const fileUrl = "/Saman_Batham.pdf";

  const animateProgress = (targetValue, setterFunction) => {
    let currentValue = 0;
    const interval = setInterval(() => {
      currentValue += 1;
      setterFunction(currentValue);
      if (currentValue >= targetValue) {
        clearInterval(interval);
      }
    }, 45);
  };
  useEffect(() => {
    animateProgress(85, setJavascript);
    animateProgress(75, setNodejs);
    animateProgress(75, setReactjs);
    animateProgress(85, setExpress);
    animateProgress(65, setMongodb);

    const buttonDelay = [
      "Javascript",
      "NodeJs",
      "MongoDB",
      "MYSQL",
      "React",
      "ExpressJS",
      "Redux",
      "Bcrypt",
      "JWT",
      "Google OAuth",
      "Shadcn",
      "Tailwind",
      "WebDesign",
    ];

    buttonDelay.forEach((button, index) => {
      setTimeout(() => {
        setKnowledgeButtons((prev) => [...prev, button]);
        setScale((prevScale) => [...prevScale, "scale-0"]);
      }, index * 300);
    });
  }, []);
  useEffect(() => {
    if (knowledgeButtons.length > 0) {
      knowledgeButtons.forEach((_, index) => {
        setTimeout(() => {
          setScale((prevScale) => {
            const newScale = [...prevScale];
            newScale[index] = "scale-100";
            return newScale;
          });
        }, index * 200);
      });
    }
  }, [knowledgeButtons]);
  useEffect(() => {
    setCv("scale-0");
    const timer = setTimeout(() => {
      setCv("scale-100");
    }, 100);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="flex flex-col w-full h-full bg-black font-raleway lg:ml-[25%] xs:ml-0">
      <div className="w-full flex flex-col">
        <div className="flex flex-col items-center lg:pr-[150px] xs:pr-[100px]">
          <div className="flex ">
            <div>
              <h1 className="font-extrabold text-3xl text-white  pt-10">
                Resume
              </h1>
              <Progress value={100} className="h-1 w-30" />
            </div>
            <div className="absolute right-10 lg:top-1 xs:top-3">
              <Button
                className={`lg:p-5 xs:p-2 bg-green-400 text-black font-extrabold rounded-[2px] shadow-lg mt-8 hover:text-white transform transition-transform duration-500 ${cv}`}
              >
                <a href={fileUrl} download={"Saman_Batham.pdf"}>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row xs:flex-col justify-evenly lg:p-20 xs:p-10">
          <div className="w-[50%]">
            <div>
              <h1 className="font-bold text-white text-xl ">Education</h1>
              <Progress value={33} className="h-1 w-20" />
            </div>
            <div className="pt-8  ">
              <div className="flex items-center gap-5">
                <Button className="bg-gray-800 text-white shadow-[3px_3px_0px_0px_rgb(60,68,73,.2)]">
                  2016
                </Button>
                <h1 className="text-sm text-white font-bold opacity-85">
                  University Of Lucknow
                </h1>
              </div>
              <div className="flex flex-col lg:pl-[50px] xs:pl-0 pt-3 lg:w-[500px] xs:w-[300px] text-white">
                <h1 className="font-bold text-white">Bachelor in Science</h1>
                <div className="flex pt-2">
                  <div className="w-5 h-5">
                    <CornerDownRight className="h-5 w-5 " />
                  </div>
                  <p>I did my graducation in Science.</p>
                </div>
                <div className="flex pt-2">
                  <div className="w-5 h-5">
                    <CornerDownRight className="h-5 w-5 " />
                  </div>
                  <p>Specialized in Physics, Chemistry,Maths.</p>
                </div>
                <div className="flex pt-2">
                  <div className="w-5 h-5">
                    <CornerDownRight className="h-5 w-5 " />
                  </div>
                  <p>
                    Developed analytical and problem-solving skills through
                    research projects and coursework.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[50%]">
            <div>
              <h1 className="font-bold text-xl text-white lg:pt-0 xs:pt-10">Coding Skill</h1>
              <Progress value={33} className="h-1 w-20" />
            </div>
            <div className="pt-10 lg:w-[400px] xs:w-[300px]">
              <div className="flex justify-between">
                <h1 className="font-bold text-sm text-white">JavaScript</h1>
                <h1 className="font-bold text-white">{javascript}</h1>
              </div>
              <Progress value={javascript} className="h-1 lg:w-[400px] xs:w-[300px]" />
              <div className="flex justify-between pt-4">
                <h1 className="font-bold text-sm text-white">Node.Js</h1>
                <h1 className="font-bold text-white">{nodejs}</h1>
              </div>
              <Progress value={nodejs} className="h-1 lg:w-[400px] xs:w-[300px]" />
              <div className="flex justify-between pt-4">
                <h1 className="font-bold text-white text-sm">React</h1>
                <h1 className="font-bold text-white">{react}</h1>
              </div>
              <Progress value={react} className="h-1 lg:w-[400px] xs:w-[300px]" />
              <div className="flex justify-between pt-4">
                <h1 className="font-bold text-white text-sm">Express</h1>
                <h1 className="font-bold text-white">{express}</h1>
              </div>
              <Progress value={express} className="h-1 lg:w-[400px] xs:w-[300px]" />
              <div className="flex justify-between pt-4">
                <h1 className="font-bold text-white text-sm">MongoDB</h1>
                <h1 className="font-bold text-white">{mongodb}</h1>
              </div>
              <Progress value={mongodb} className="h-1 lg:w-[400px] xs:w-[300px]" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row xs:flex-col  justify-evenly lg:p-20 xs:p-10">
        <div className="w-[50%]">
          <div>
            <h1 className="font-bold text-xl text-white">Experience</h1>
            <Progress value={33} className="h-1 w-20" />
          </div>
          <div className="pt-8">
            <div className="flex items-center gap-5">
              <Button className="bg-gray-800 text-white shadow-[3px_3px_0px_0px_rgb(60,68,73,.2)]">
                2022-2024
              </Button>
              <h1 className="text-sm font-bold text-white opacity-85">
                Mikros Animation
              </h1>
            </div>
            <div className="flex flex-col lg:pl-[50px] xs:pl-0 pt-3 lg:w-[500px] xs:w-[300px] text-white">
              <h1 className="font-bold text-white">Mid-Fx Artist</h1>

              <div className="flex pt-2">
                <div className="w-8 h-8">
                  <CornerDownRight className="h-5 w-5 " />
                </div>
                <p>
                  Collaborated on high-profile animation projects, designing and
                  implementing advanced FX systems.
                </p>
              </div>
              <div className="flex pt-2">
                <div className="w-8 h-8">
                  <CornerDownRight className="h-5 w-5 " />
                </div>

                <p>
                  Worked in a fast-paced production environment, meeting tight
                  deadlines with high-quality output.
                </p>
              </div>
              <div className="flex pt-2">
                <div className="w-5 h-5">
                  <CornerDownRight className="h-5 w-5 " />
                </div>
                <p>Gained expertise in Houdini,Maya and nuke.</p>
              </div>
              <div className="flex pt-2">
                <div className="w-8 h-8">
                  <CornerDownRight className="h-5 w-5 " />
                </div>
                <p>
                  Improved team efficiency by , automating workflows, optimizing
                  FX pipelines.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[50%] lg:[t-0 xs:pt-10">
          <div>
            <h1 className="font-bold text-xl text-white">Knowledges</h1>
            <Progress value={33} className="h-1 w-20" />
          </div>
          <div className="flex flex-wrap w-[300px] gap-2 pt-5 ">
            {knowledgeButtons.map((button, index) => (
              <Button
                key={index}
                className={`bg-green-400 text-black font-bold transform ${scale[index]} transition-transform duration-700 ease-out`}
              >
                {button}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
