import React, { useState } from "react";
// import image from "./assets/contact-image.jpg";
import AntdForm from "./AntdForm";
import Success from "./Success";

const ContactForm = () => {
  const [isTrue, setIsTrue] = useState(true);
  return isTrue ? (
    <div className="row g-0 w-10/12 mx-auto" style={{ height: "90vh" }}>
      <div className="col-6 bg-[#0AB5D3] flex gap-6 flex-col justify-center items-center text-white">
        {/* <img src={image} alt="contact-image" style={{width:"100%",height:"100%",objectFit:"cover"}}/> */}
        <h1 className="text-5xl font-bold">Let`s Chat</h1>
        <p className="text-center w-full px-8 text-2xl">
          Whether you have a question, want to start a project or simply want to
          connect.
        </p>
        <p className="text-center w-full px-16 text-2xl">
          Feel free to send me message in the contact form.
        </p>
      </div>
      <div className="col-6 bg-white flex flex-col justify-center items-center gap-3">
        <h1 className="text-slate-700 text-3xl font-bold">Contact Form</h1>
        <AntdForm setIsTrue={setIsTrue} />
      </div>
    </div>
  ) : (
    <Success />
  );
};

export default ContactForm;
