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
  const fileUrl = "/SamanDeepBatham_Developer.pdf";

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
  }, []);
  const buttonData = [
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

  return (
    <div className="flex flex-col w-full min-h-[100vh] bg-black font-raleway lg:pl-[200px] md:pl-[150px]">
      <div className="w-full flex flex-col">
        <div className="flex flex-col items-center">
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
                <a href={fileUrl} download={"SamanDeepBatham_Developer.pdf"}>
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 mt-10 gap-20">
          <div className="md:w-[80%] md:ml-20 ml-5">
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
              <div className="flex flex-col lg:pl-[50px] xs:pl-0 pt-3 w-full max-w-[800px] text-white">
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
          <div className="md:w-[60%] md:ml-0 ml-5 mr-5">
            <div>
              <h1 className="font-bold text-xl text-white md:pt-0 pt-10">
                Coding Skill
              </h1>
              <Progress value={33} className="h-1 w-20" />
            </div>
            <div className="pt-10 ">
              <div className="flex justify-between">
                <h1 className="font-bold text-sm text-white">JavaScript</h1>
                <h1 className="font-bold text-white">{javascript}</h1>
              </div>
              <Progress value={javascript} className="h-1 " />
              <div className="flex justify-between pt-4">
                <h1 className="font-bold text-sm text-white">Node.Js</h1>
                <h1 className="font-bold text-white">{nodejs}</h1>
              </div>
              <Progress value={nodejs} className="h-1 " />
              <div className="flex justify-between pt-4">
                <h1 className="font-bold text-white text-sm">React</h1>
                <h1 className="font-bold text-white">{react}</h1>
              </div>
              <Progress value={react} className="h-1 " />
              <div className="flex justify-between pt-4">
                <h1 className="font-bold text-white text-sm">Express</h1>
                <h1 className="font-bold text-white">{express}</h1>
              </div>
              <Progress value={express} className="h-1 " />
              <div className="flex justify-between pt-4">
                <h1 className="font-bold text-white text-sm">MongoDB</h1>
                <h1 className="font-bold text-white">{mongodb}</h1>
              </div>
              <Progress value={mongodb} className="h-1 " />
            </div>
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 mt-10 mb-10 gap-20">
        <div className="md:w-[80%] md:ml-20 ml-5">
          <div>
            <h1 className="font-bold text-xl text-white">Experience</h1>
            <Progress value={33} className="h-1 w-20" />
          </div>
          <div className="pt-8">
            <div className="flex items-center gap-5">
              <Button className="bg-gray-800 text-white shadow-[3px_3px_0px_0px_rgb(60,68,73,.2)]">
                2025-Present
              </Button>
              <h1 className="text-sm font-bold text-white opacity-85">
                Juego Studios
              </h1>
            </div>
            <div className="flex flex-col lg:pl-[50px] xs:pl-0 pt-3 w-full max-w-[500px] text-white">
              <h1 className="font-bold text-white">Senior-Fx Artist</h1>

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
                <p>Gained expertise in Unreal engine,Unity and Houdini.</p>
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
        <div className="md:w-[50%] md:ml-0 ml-5">
          <div>
            <h1 className="font-bold text-xl text-white">Knowledges</h1>
            <Progress value={33} className="h-1 w-20" />
          </div>
          <div className="flex flex-wrap gap-2 pt-5 ">
            {buttonData.map((button, index) => (
              <Button
                key={index}
                className={`bg-green-400 text-black font-bold transform  transition-transform duration-700 ease-out`}
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
