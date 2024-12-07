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
    <div className="flex w-full h-screen items-center justify-center bg-black font-raleway lg:ml-[15%] xs:ml-0 ">
      <Card className="lg:h-[400px] xs:[200px] shadow-[2px_2px_10px_4px_rgb(100,100,100,1)]">
        <CardContent className="flex flex-col items-center gap-3 w-[400px] ">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center gap-3 w-[400px] ">
              <h1 className="font-bold text-2xl pt-4">Contact</h1>

              <div className="flex items-center gap-2  ">
                <h1 className="font-bold">Your Name:</h1>

                <Input
                  name="name"
                  placeholder="Type Your Name"
                  className="w-[250px]"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-2  ">
                <h1 className="font-bold">Your Email:</h1>
                <Input
                  name="email"
                  placeholder="Type Your Email"
                  className="w-[250px]"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-2 ">
                <h1 className="font-bold ml-8">Phone:</h1>
                <Input
                  name="phone"
                  placeholder="Type Your Phone"
                  className="w-[250px] "
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-2 ">
                <h1 className="font-bold ml-10">Query:</h1>
                <textarea
                  name="query"
                  rows={5}
                  cols={120}
                  placeholder="Type Your Query"
                  className="w-[250px] border pl-2  mr-1  pr-10"
                  value={formData.query}
                  onChange={handleChange}
                />
              </div>
              <div className="flex items-center gap-2">
                <Button
                  type="submit"
                  className="bg-green-400 text-black font-bold"
                  disabled={disable}
                >
                  {disable ? "Sending..." : "Submit"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default Contact;
