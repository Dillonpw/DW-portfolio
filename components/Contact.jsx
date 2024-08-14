import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Button } from "./ui/button";

const Contact = () => {
  const [result, setResult] = useState("");
  const [isEmailSubmitted, setIsEmailSubmitted] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", process.env.WEB3_ACCESS_KEY);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message);
      setIsEmailSubmitted(true);
    } else {
      console.log("Error", res);
      setResult(res.message);
    }
  };

  return isEmailSubmitted ? (
    <div className="m-8 text-3xl">
      <p>{result}</p>
      <h1 className="text-3xl">Thank you for reaching out!</h1>
    </div>
  ) : (
    <motion.aside
      initial={{ opacity: 0 }}
      transition={{ duration: 2 }}
      whileInView={{ opacity: 1 }}
      className="mx-8 mt-4"
    >
      <form
        className="flex max-w-[600px] flex-col md:mx-auto justify-center"
        onSubmit={onSubmit}
      >
        <Label className="font-bold" htmlFor="email">
          Email:
        </Label>
        <Input
          className="my-2 h-10 rounded-md border-2 p-2 text-neutral-950"
          type="email"
          name="email"
          id="email"
          required
          placeholder="Email@address.com"
        />

        <Label className="font-bold" htmlFor="message">
          Message:
        </Label>
        <Textarea
          className="my-2 rounded-md border-2 p-2 text-black"
          name="message"
          id="message"
          rows="6"
          required
          placeholder="Your message..."
        ></Textarea>

        <Button type="submit">Submit</Button>
      </form>
      <span className="text-center">{result}</span>
    </motion.aside>
  );
};

export default Contact;
