import React, { useState, useEffect } from "react";
import Footer from "../Footer";
import Overlay from "../Overlay";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import ScrollToTop from "../ScrollToTop";
import "../../styles/Contact.css";
import gsap from "gsap";

function Contact() {
  ScrollToTop();

  // framer motion page transition values
  const pageVariants = {
    start: { opacity: 1 },
    in: { opacity: 1, transition: { duration: 1 } },
    out: { opacity: 0, transition: { duration: 1 } },
  };

  useEffect(() => {
    // fix flashing animated titles on page load
    gsap.to(".contact-title-inner", { css: { visibility: "visible" } });

    // gsap opening animation on page load
    gsap.from(".contact-title", 2, {
      y: 560,
      ease: "power4.out",
      delay: 0.6,
      skewY: 4,
      stagger: { amount: 0.5 },
    });

    gsap.to(".overlay", 2, {
      y: "-100vh",
      delay: 2,
      ease: "expo.inOut",
    });
  }, []);

  // react hook form
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const [statusMsg, setStatusMsg] = useState("Msg");

  const onSubmit = (data, e) => {
    const statusMsg = document.querySelector(".status-msg");
    console.log(data);

    // email.js
    emailjs
      .sendForm(
        "liuhe_yahoo",
        "template_liuhe",
        "#form",
        "user_QXaR2CMF0bg5jBJRseDBl"
      )
      .then(
        (result) => {
          setStatusMsg("Message sent! Thank you.");
          statusMsg.className = "status-msg success";
          e.target.reset();
        },
        (error) => {
          setStatusMsg("Failed to send message! Please try again.");
          statusMsg.className = "status-msg failure";
        }
      );
  };

  return (
    <motion.div
      className="page"
      variants={pageVariants}
      initial="start"
      animate="in"
      exit="out"
    >
      <div className="contact-container">
        <div className="contact-title-container">
          <div className="contact-title-inner">
            <h1 className="contact-title">GET IN TOUCH</h1>
          </div>
        </div>
        <form
          noValidate
          className="form"
          id="form"
          name="contact"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-top">
            <div className="form-top-left">
              <input
                type="text"
                className="input-field"
                name="name"
                placeholder="Full Name"
                ref={register({
                  required: {
                    value: true,
                    message: "*Please enter your name",
                  },
                  minLength: {
                    value: 4,
                    message: "*Must be at least 4 characters",
                  },
                })}
              />
              {errors.name && (
                <p className="form-error">{errors.name.message}</p>
              )}
              <input
                type="text"
                className="input-field"
                name="company"
                placeholder="Company"
                ref={register}
              />
              <input
                type="tel"
                className="input-field"
                name="phone"
                placeholder="Phone"
                ref={register}
              />
              <input
                type="email"
                className="input-field"
                name="email"
                placeholder="Email"
                ref={register({
                  required: {
                    value: true,
                    message: "*Please enter your email address",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "*Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="form-error">{errors.email.message}</p>
              )}
            </div>
            <div className="form-top-right">
              <textarea
                className="textarea"
                name="msg"
                placeholder="Your Message"
                ref={register({
                  required: {
                    value: true,
                    message: "*Please enter your message",
                  },
                  minLength: {
                    value: 4,
                    message: "*Must be at least 4 characters",
                  },
                })}
              />
              {errors.msg && <p className="form-error">{errors.msg.message}</p>}
            </div>
          </div>
          <button type="submit" className="form-button">
            Send
          </button>
          <p className="status-msg">{statusMsg}</p>
        </form>
      </div>
      <Footer />
      <Overlay />
    </motion.div>
  );
}

export default Contact;
