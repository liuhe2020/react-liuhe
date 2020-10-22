import React from "react";
import { useForm } from "react-hook-form";
import "../../styles/Contact.css";

function Contact() {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="page">
      <div className="contact-container">
        <div className="contact-title-container">
          <h1 className="contact-title">GET IN TOUCH</h1>
        </div>
        <form
          noValidate
          className="form"
          name="contact"
          method="post"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-top">
            <div className="form-top-left">
              {errors.name && (
                <p className="form-error">{errors.name.message}</p>
              )}
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
              {errors.email && (
                <p className="form-error">{errors.email.message}</p>
              )}
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
        </form>
      </div>
      <form className="form"></form>
    </div>
  );
}

export default Contact;
