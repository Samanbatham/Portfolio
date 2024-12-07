import React, { useEffect, useState } from "react";

function Ecommerce() {
  const [ecommerceVisible, setEcommerceVisible] = useState(false);
  const [technologyVisible, setTechnologyVisible] = useState(false);
  const [userfriendly, setUserfriendly] = useState(false);
  const [productSeacrh, setProductSearch] = useState(false);
  const [payment, setPayment] = useState(false);
  const [adminDashboard, setAdminDashboard] = useState(false);
  const [cart, setCart] = useState(false);

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
        } else if (entry.target.id === "technology") {
          setTechnologyVisible(entry.isIntersecting);
        } else if (entry.target.id === "userfriendly") {
          setUserfriendly(entry.isIntersecting);
        } else if (entry.target.id === "productsearch") {
          setProductSearch(entry.isIntersecting);
        } else if (entry.target.id === "payment") {
          setPayment(entry.isIntersecting);
        } else if (entry.target.id === "admindashboard") {
          setAdminDashboard(entry.isIntersecting);
        } else if (entry.target.id === "cart") {
          setCart(entry.isIntersecting);
        }
      });
    }, options);

    const ecommerceSection = document.getElementById("ecommerce");
    const technologySection = document.getElementById("technology");
    const userFriendlySection = document.getElementById("userfriendly");
    const productSearchSection = document.getElementById("productsearch");
    const paymentSection = document.getElementById("payment");
    const adminDashboardSection = document.getElementById("admindashboard");
    const cartSection = document.getElementById("cart");

    if (ecommerceSection) observer.observe(ecommerceSection);
    if (technologySection) observer.observe(technologySection);
    if (userFriendlySection) observer.observe(userFriendlySection);
    if (productSearchSection) observer.observe(productSearchSection);
    if (paymentSection) observer.observe(paymentSection);
    if (adminDashboardSection) observer.observe(adminDashboardSection);
    if (cartSection) observer.observe(cartSection);

    return () => {
      if (ecommerceSection) observer.unobserve(ecommerceSection);
      if (technologySection) observer.unobserve(technologySection);
      if (userFriendlySection) observer.unobserve(userFriendlySection);
      if (productSearchSection) observer.unobserve(productSearchSection);
      if (paymentSection) observer.unobserve(paymentSection);
      if (adminDashboardSection) observer.unobserve(adminDashboardSection);
      if (cartSection) observer.unobserve(cartSection);
    };
  }, []);

  return (
    <div className="bg-black lg:w-full xs:w-[450px] font-raleway overflow-clip lg:ml-[18%] xs:ml-0 ">
      <div
        id="ecommerce"
        className={`flex flex-col items-center p-2 transition-all duration-1000 ${
          ecommerceVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="font-extrabold underline text-white lg:text-2xl xs:text-sm w-[200px] lg:translate-x-10 xs:translate-x-16">
          Chat-App
        </h1>
        <div className="lg:w-[700px] xs:w-[350px] pt-4">
          <p className="text-md italic text-white font-bold">
            "The Real-Time Chat Application is a dynamic and interactive
            platform that enables users to communicate in real-time. It supports
            one-on-one messaging and group chats, fostering seamless
            communication with a responsive and user-friendly interface. Built
            with modern web technologies, the application ensures a smooth user
            experience, scalability, and secure data exchange."
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-3 items-center ">
        <div
          id="technology"
          className={`w-[400px] flex flex-col transition-all duration-1000 ${
            technologyVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center">
            <h1 className="font-bold text-white underline lg:text-xl xs:text-lg">
              Technologies
            </h1>
          </div>
          <div className="flex gap-2 pt-1">
            <h1 className="font-bold text-white">Frontend:</h1>
            <p className="text-white">Javascript,React,HTML,CSS</p>
          </div>
          <div className="flex gap-3 pt-1">
            <h1 className="font-bold text-white">Backend:</h1>
            <p className="text-white">NodeJs,ExpressJs</p>
          </div>
          <div className="flex gap-1 pt-1">
            <h1 className="font-bold text-white">Database:</h1>
            <p className="text-white">MongoDB</p>
          </div>
          <div className="flex gap-1 pt-1">
            <h1 className="font-bold text-white">Authentication:</h1>
            <p className="text-white">JWT</p>
          </div>

          <div className="flex gap-1 pt-1">
            <h1 className="font-bold text-white">Other:</h1>
            <p className="text-white">Bcrypt,Cloudinary,Multer,Socket.io</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-full xs:w-[450px] pt-10 pb-10  gap-4">
        <div
          id="userfriendly"
          className={`flex items-center justify-center transition-all duration-1000 ${
            userfriendly ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="font-bold underline text-xl text-white">Features</h1>
        </div>
        <div className="lg:flex lg:flex-row xs:flex-col items-center lg:gap-10 xs:gap-2 pt-5">
          <div className=" flex flex-col lg:w-full xs:w-[450px]">
            <div
              id="userfriendly"
              className={`flex flex-col items-center lg:p-3 xs:p-1 transition-all duration-1000 z-0 ${
                userfriendly
                  ? "lg:-translate-x-0 xs:-translate-x-0"
                  : "lg:-translate-x-[200px] xs:-translate-x-[50px]"
              } ${userfriendly ? "opacity-100" : "opacity-0"}`}
            >
              <h1 className="font-bold underline text-white lg:text-lg xs:text-sm w-[200px] lg:translate-x-6 xs:translate-x-8">
                User Authentication
              </h1>
              <p className="lg:pl-1 lg:pr-1 lg:pt-3 xs:px-6 xs:pt-5 text-white lg:text-[16px] xs:text-[13px]">
                <span className="font-bold text-white">
                  User Sign-Up/Login:
                </span>
                Enable users to create accounts using email, phone number, or
                Google. <br />
                <span className="font-bold text-white">
                  Profile Management:
                </span>
                Allow users to set profile pictures.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row xs:flex-col items-center lg:gap-10 xs:gap-2 pt-5">
          <div className=" flex flex-col lg:w-full xs:w-[450px]">
            <div
              id="productsearch"
              className={`flex flex-col items-center lg:pt-0 xs:pt-5  w-full transition-all duration-1000 z-0 ${
                productSeacrh
                  ? "lg:opacity-100 lg:translate-x-0 xs:translate-x-0 xs:opacity-100"
                  : "lg:opacity-0 lg:translate-x-[200px] xs:translate-x-[50px] xs:opacity-0"
              }`}
            >
              <h1 className="font-bold underline text-white lg:text-lg xs:text-sm w-[200px] translate-x-14">
                Messaging
              </h1>
              <p className="lg:pl-2 lg:pr-2 lg:pt-3 xs:px-6 xs:pt-5 text-white lg:text-[16px] xs:text-[12px]">
                <span className="font-bold text-white">One-on-One Chats: </span>
                Private messaging between two users.
                <br />
                <span className="font-bold">Instant Messaging:</span> Messages
                should be sent and received in real-time using Socket.io
                <br />
                <span className="font-bold">Emojis:</span> User can send emojis
                to each other and in groups.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row xs:flex-col items-center lg:gap-10 xs:gap-2 pt-5">
          <div className=" flex flex-col lg:w-full xs:w-[450px]">
            <div
              id="payment"
              className={` flex flex-col items-center justify-center w-full lg:pt-0 xs:pt-5 transition-all duration-1000 z-0 ${
                payment
                  ? "lg:-translate-x-0 xs:-translate-x-0"
                  : "lg:-translate-x-[200px] xs:-translate-x-[50px]"
              } ${payment ? "opacity-100" : "opacity-0"}`}
            >
              <h1 className="font-bold underline text-white lg:text-lg xs:text-sm w-[200px] translate-x-14">
                Group Chat
              </h1>
              <p className="lg:pl-2 lg:pr-2 lg:pt-3 xs:px-6 xs:pt-5 text-white lg:text-[16px] xs:text-[12px]">
                <span className="font-bold">Group Creation:</span> Users can
                create,name chat groups and change profile pic of group.
                <br />
                <span className="font-bold">Group Admin:</span> Admins can
                add/remove members.
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:flex-row xs:flex-col items-center lg:gap-10 xs:gap-2 pt-5">
          <div className=" flex flex-col lg:w-full xs:w-[450px]">
            <div
              id="admindashboard"
              className={`flex flex-col items-center justify-center  lg:pt-0 xs:pt-5 transition-all duration-1000 z-0 ${
                adminDashboard
                  ? "lg:opacity-100 lg:translate-x-0 xs:translate-x-0 xs:opacity-100"
                  : "lg:opacity-0 lg:translate-x-[200px] xs:translate-x-[50px] xs:opacity-0"
              }`}
            >
              <h1 className="font-bold underline text-white lg:text-lg xs:text-sm w-[200px] translate-x-14">
                User Activity
              </h1>
              <p className="lg:pl-2 lg:pr-2 lg:pt-3 xs:px-6 xs:pt-5 text-white lg:text-[16px] xs:text-[13px]">
                <span className="font-bold">Online Status:</span> Show when a
                user is active or offline.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
