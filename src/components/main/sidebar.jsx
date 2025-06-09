import React, { useState } from "react";
import { Label } from "../ui/label";
import { useNavigate } from "react-router-dom";
import profile from "../../asset/Profile.webp";
import {
  Briefcase,
  Contact,
  FileUser,
  Github,
  Home,
  HomeIcon,
  Linkedin,
  Mail,
  Menu,
  Paperclip,
  ProjectorIcon,
} from "lucide-react";
import { Progress } from "../ui/progress";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";

const homePageHeaderItems = [
  {
    id: "home",
    label: "Home",
    path: "/main",
    icon: <HomeIcon />,
  },
  {
    id: "projects",
    label: "Projects",
    path: "/projects",
    icon: <Briefcase />,
  },
  {
    id: "resumne",
    label: "Resume",
    path: "/resume",
    icon: <FileUser />,
  },
  {
    id: "contact ",
    label: "Contact ",
    path: "/contact",
    icon: <Contact />,
  },
];


function Sidebar() {
  const [bar,setBar] = useState(0);
  const [hoveredItem,setHoveredItem] = useState(null)
  const[sheetOpen,setSheetOpen] = useState(false);
  const navigate = useNavigate();
 
  const handleHover = (id) => {
    setHoveredItem(id);
    setBar(100);
  };

  
  const handleLeave = () => {
    setHoveredItem(null);
    setBar(0);
  };
  function handleChange (item){
    setSheetOpen(false);
    navigate(item.path)
  }



  return (
    <>
    <div className=" h-[40px] md:hidden p-2 pt-6 pl-5 ">
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen} >
          <SheetTrigger asChild>
            <Button>
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent className='w-[200px]'>
            <div className="flex flex-col items-center justify-center">
              <img
                src={profile}
                width={80}
                height={80}
                className="rounded-full"
                alt="Profile"
              />
              <h1 className="pt-2 text-white">Saman Batham</h1>
              <h1 className="text-[12px] text-white ">Developer</h1>
              <div className="flex gap-4 pt-1">
                <a href="https://github.com/Samanbatham">
                  <Github className="h-4 w-4 text-white hover:text-gray-700" />
                </a>
                <a href="https://www.linkedin.com/in/saman-deep-batham-3b186614b/">
                  <Linkedin className="h-4 w-4 text-white hover:text-gray-700" />
                </a>
                <Mail
                  className="h-4 w-4 text-white hover:text-gray-700 hover:cursor-pointer"
                  onClick={() => handleChange({path:"/contact"})}
                />
              </div>
            </div>
            <div className="flex flex-col items-end gap-3 m-2 pt-[180px] pr-[30px]">
              {homePageHeaderItems.map((item) => (
                <div
                  key={item.id}
                  onMouseOver={() => handleHover(item.id)}
                  onMouseLeave={handleLeave}
                  onClick={() => handleChange(item)}
                >
                  <div className="flex gap-2">
                    <Label className="hover:cursor-pointer">
                      <h1 className="font-bold text-xl text-end text-white">
                        {item.label}
                      </h1>
                    </Label>
                    <h1 className="text-white hover:cursor-pointer">
                      {item.icon}
                    </h1>
                  </div>
                  <div>
                    <Progress
                      value={hoveredItem === item.id ? bar : 0}
                      className="h-1 w-25 bg-transparent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    <div className=" flex flex-col fixed h-screen  gap-[250px] font-[poppins] lg:min-w-[200px] md:min-w-[150px] border-r-2 xs:hidden md:flex p-5 mr-2 shadow-xl bg-black">
      <div className="flex flex-col items-center justify-center">
        <img src={profile} width={80} height={80} className="rounded-full" />
        <h1 className="pt-2 text-white">Saman Batham</h1>
        <h1 className="text-[12px] text-white ">Developer</h1>
        <div className="flex gap-4 pt-1">
          <a href="https://github.com/Samanbatham"><Github className="h-4 w-4 text-white hover:text-gray-700"  /></a>
          <a href="https://www.linkedin.com/in/saman-deep-batham-3b186614b/"><Linkedin className="h-4 w-4  text-white hover:text-gray-700" /></a>
         <Mail className="h-4 w-4  text-white hover:text-gray-700 hover:cursor-pointer" onClick={()=>navigate("/contact")}  />
        </div>
      </div>
      <div className="flex flex-col items-end  gap-3 m-2">
        {homePageHeaderItems.map((item) => (
          <div key={item.id}  onMouseOver={()=>handleHover(item.id)} onMouseLeave={handleLeave} onClick={() => navigate(item.path)}>
            <div className="flex gap-2">
              <Label
                className="hover:cursor-pointer"
                
              >
                <h1 className="font-bold text-xl text-end text-white">
                  {item.label}
                </h1>
              </Label>
              <h1 className="text-white hover:cursor-pointer">{item.icon}</h1>
            </div>
            <div>
            <Progress value={hoveredItem === item.id ? bar : 0}  className="h-1 w-25 bg-transparent" />
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Sidebar;
