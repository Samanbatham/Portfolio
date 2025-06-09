import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import emailjs from "emailjs-com";
function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });
  const [disable, setDisable] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setDisable(true);
    emailjs
      .send(
        import.meta.env.VITE_API_SERVICEID,
        import.meta.env.VITE_API_TEMPLATEID,
        {
          to_name: "saman batham",
          from_name: formData.name,
          message: formData.query + formData.phone,
        },
        import.meta.env.VITE_API_PUBLICKEY
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", query: "" });
          setDisable(false);
        },

        (error) => {
          console.error("Failed to send message:", error);
        }
      );
  };
  return (
    <div className="flex w-full h-screen items-center justify-center bg-black font-raleway lg:pl-[200px] md:pl-[150px] p-4 ">
      <Card className=" w-full max-w-md  max-h-[400px] shadow-[2px_2px_10px_4px_rgb(100,100,100,1)]">
        <CardContent >
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col items-center gap-3  ">
              <h1 className="font-bold text-2xl pt-4">Contact</h1>

              <div className="grid grid-cols-[1fr_2fr] w-full items-center">
               
                  <label className="font-bold">Your Name:</label>
                
                
                  <Input
                    name="name"
                    placeholder="Type Your Name"
                    className="w-full"
                    value={formData.name}
                    onChange={handleChange}
                  />
                
              </div> 
              <div className="grid grid-cols-[1fr_2fr] w-full items-center">
                <div className="flex items-start ">
                  <h1 className="font-bold">Your Email:</h1>
                </div>
                <div>
                  <Input
                    name="email"
                    placeholder="Type Your Email"
                    className="w-full"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="grid grid-cols-[1fr_2fr] w-full items-center">
                <h1 className="font-bold ">Phone:</h1>

                <Input
                  name="phone"
                  placeholder="Type Your Phone"
                  className="w-full"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="grid grid-cols-[1fr_2fr] w-full items-center">
                <div className="flex items-center ">
                  <h1 className="font-bold ">Query:</h1>
                </div>
                <div>
                  <textarea
                    name="query"
                    rows={5}
                    cols={30}
                    placeholder="Type Your Query"
                    className=" border w-full "
                    value={formData.query}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <Button
                type="submit"
                className="bg-green-400 text-black font-bold"
                disabled={disable}
              >
                {disable ? "Sending..." : "Submit"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
