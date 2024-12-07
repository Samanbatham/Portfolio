import React, { useEffect, useState } from "react";

import productDetail from "../asset/productDetail.mp4";
import search from "../asset/search.mp4";
import paymentBg from "../asset/paymentbg.mp4";
import adminbg from "../asset/adminbg.mp4";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

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
        <h1 className="font-extrabold underline text-white lg:text-2xl xs:text-lg">
          E-Commerce
        </h1>
        <div className="lg:w-[700px] xs:w-[400px] pt-4">
          <p className="text-md italic text-white font-bold">
            "This project is a fully functional eCommerce platform built to
            simplify online shopping for users and streamline management for
            store owners. It includes features like user authentication, a
            product catalog, a shopping cart, secure checkout, and an admin
            dashboard."
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
            <p className="text-white">
              Javascript,React,HTML,CSS,Redux,Shadcn,Tailwind
            </p>
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
            <h1 className="font-bold text-white">Payment:</h1>
            <p className="text-white">Paypal</p>
          </div>
          <div className="flex gap-1 pt-1">
            <h1 className="font-bold text-white">Other:</h1>
            <p className="text-white">Bcrypt,Cloudinary,Multer</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:w-full xs:w-[400px] pt-4 pb-10">
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
              <h1 className="font-bold underline text-white lg:text-lg xs:text-sm">
                User-friendly design with responsive layouts
              </h1>
              <p className="lg:pl-1 lg:pr-1 lg:pt-3 xs:pl-5 xs:pr-10 xs:pt-5 text-white lg:text-md xs:text-[15px]">
                <span className="font-bold text-white">
                  Search Functionality:
                </span>
                Allow users to quickly find products using keywords. <br />
                <span className="font-bold text-white">
                  Product Categories:
                </span>
                Organized categories and subcategories for better navigation.
                <br />
                <span className="font-bold text-white">Filters & Sorting:</span>
                Enable filtering by price, ratings, brand, etc.,
              </p>
            </div>
          </div>
          <div
            id="userfriendly"
            className={`flex justify-center w-full lg:pt-5 xs:pt-5 lg:mr-4 xs:mr-0 transition-all duration-1000 z-0 ${
              userfriendly
                ? "lg:opacity-100 lg:translate-x-0 xs:translate-x-0 xs:opacity-100"
                : "lg:opacity-0 lg:translate-x-[200px] xs:translate-x-[50px] xs:opacity-0"
            }`}
          >
            <Card className="lg:w-[800px] xs:[200px] lg:ml-0 xs:ml-7 rounded-sm shadow-[3px_3px_2px_1px_rgb(60,68,73,.25)]">
              <CardHeader className="p-1 rounded-sm">
                <div>
                  <video autoPlay loop muted>
                    <source src={search} />
                  </video>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="lg:flex lg:flex-row xs:flex-col items-center lg:gap-10 xs:gap-2 pt-5">
          <div
            id="productsearch"
            className={`flex justify-center w-full lg:pt-10 xs:pt-5   transition-all duration-1000 z-0 ${
              productSeacrh
                ? "lg:-translate-x-0 xs:-translate-x-0"
                : "lg:-translate-x-[200px] xs:-translate-x-[50px]"
            } ${productSeacrh ? "opacity-100" : "opacity-0"}`}
          >
            <Card className="lg:w-[800px] xs:[200px] lg:ml-0 xs:ml-5  rounded-sm shadow-[3px_3px_2px_1px_rgb(60,68,73,.25)]">
              <CardHeader className="p-1 rounded-sm">
                <div>
                  <video autoPlay loop muted>
                    <source src={productDetail} />
                  </video>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div className=" flex flex-col lg:w-full xs:w-[450px]">
            <div
              id="productsearch"
              className={`flex flex-col items-center lg:pt-0 xs:pt-5  w-full transition-all duration-1000 z-0 ${
                productSeacrh
                  ? "lg:opacity-100 lg:translate-x-0 xs:translate-x-0 xs:opacity-100"
                  : "lg:opacity-0 lg:translate-x-[200px] xs:translate-x-[50px] xs:opacity-0"
              }`}
            >
              <h1 className="font-bold underline text-white lg:text-lg xs:text-sm">
                Product Detail and Custom Review
              </h1>
              <p className="lg:pl-2 lg:pr-2 lg:pt-3 xs:pl-5 xs:pr-10 xs:pt-5 text-white lg:text-md xs:text-[15px]">
                <span className="font-bold text-white">Product Details:</span>
                Title, description, specifications, pricing, and availability.
                <br />
                <span className="font-bold text-white">
                  Customer Reviews & Ratings:
                </span>
                Display user feedback and ratings. <br />
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
              <h1 className="font-bold underline text-white lg:text-lg xs:text-sm">
                Secure payment gateway integration and Order Status
              </h1>
              <p className="lg:pl-2 lg:pr-2 lg:pt-3 xs:pl-5 xs:pr-10 xs:pt-5 text-white lg:text-md xs:text-[15px]">
                <span className="font-bold">Payment Gateway</span> Used Paypal
                for the payment method.
                <br />
                <span className="font-bold">Order Confirmation:</span> Order
                page for status of the Order.
                <br />
              </p>
            </div>
          </div>

          <div
            id="payment"
            className={`flex justify-center w-full lg:pt-10 xs:pt-5 lg:mr-4 xs:mr-0  transition-all duration-1000 z-0 ${
              payment
                ? "lg:opacity-100 lg:translate-x-0 xs:translate-x-0 xs:opacity-100"
                : "lg:opacity-0 lg:translate-x-[200px] xs:translate-x-[50px] xs:opacity-0"
            }`}
          >
            <Card className="lg:w-[800px] xs:[200px] lg:ml-0 xs:ml-5 rounded-sm shadow-[3px_3px_2px_1px_rgb(60,68,73,.25)]">
              <CardHeader className="p-2 rounded-sm">
                <div>
                  <video autoPlay loop muted>
                    <source src={paymentBg} />
                  </video>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
        <div className="lg:flex lg:flex-row xs:flex-col items-center lg:gap-10 xs:gap-2 pt-5">
          <div
            id="admindashboard"
            className={`flex justify-center w-full lg:pt-10 xs:pt-5  transition-all duration-1000 z-0 ${
              adminDashboard
                ? "lg:-translate-x-0 xs:-translate-x-0"
                : "lg:-translate-x-[200px] xs:-translate-x-[50px]"
            } ${adminDashboard ? "opacity-100" : "opacity-0"}`}
          >
            <Card className="lg:w-[800px] xs:[200px] lg:ml-0 xs:ml-5 rounded-sm shadow-[3px_3px_2px_1px_rgb(60,68,73,.25)]">
              <CardHeader className="p-2 rounded-sm">
                <div>
                  <video autoPlay loop muted>
                    {" "}
                    <source src={adminbg} />{" "}
                  </video>
                </div>
              </CardHeader>
            </Card>
          </div>
          <div className=" flex flex-col lg:w-full xs:w-[450px]">
            <div
              id="admindashboard"
              className={`flex flex-col items-center justify-center w-full lg:pt-0 xs:pt-5 transition-all duration-1000 z-0 ${
                adminDashboard
                  ? "lg:opacity-100 lg:translate-x-0 xs:translate-x-0 xs:opacity-100"
                  : "lg:opacity-0 lg:translate-x-[200px] xs:translate-x-[50px] xs:opacity-0"
              }`}
            >
              <h1 className="font-bold underline text-white lg:text-lg xs:text-sm">
                Admin dashboard for product and order management.
              </h1>
              <p className="lg:pl-2 lg:pr-2 lg:pt-3 xs:pl-5 xs:pr-10 xs:pt-5 text-white lg:text-md xs:text-[15px]">
                <span className="font-bold">Product Management:</span> Add,
                edit, or delete products.
                <br />
                <span className="font-bold">Order Management:</span> View,
                update, and process customer orders.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ecommerce;
