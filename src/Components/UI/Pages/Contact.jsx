import { useState } from "react";
import { RevealOnScroll } from "../Pages/RevealOnScroll";
//import RevealOnScroll from "./RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const templateParams = {
      from_name: formData.from_name,
      from_email: formData.from_email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_j5tqlgp",       //  Service ID
        "template_2vcf7zd",      //  Template ID
        templateParams,          //  Sending data manually
        "HUcOFz5lV4F9o-SHp"      //  Public key
      )
      .then(() => {
        setIsSubmitted(true);
        setFormData({ from_name: "", from_email: "", message: "" });
        setIsSubmitting(false);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="px-4 w-full md:w-[500px] sm:w-2/3 p-6">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Reach ME!
          </h2>

          {isSubmitted ? (
            <div className="text-center text-green-400 text-xl font-semibold">
              Your message is received! I will get back to you soon.✌
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Enter your Name..."
                value={formData.from_name}
                onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />

              <input
                type="email"
                name="from_email"
                required
                placeholder="Enter your Email..."
                value={formData.from_email}
                onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />

              <textarea
                name="message"
                rows={5}
                required
                placeholder="Enter Your Message..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5"
              />
              <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`border border-zinc-500/50 text-zinc-200 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-700/60 ${
                  isSubmitting
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                }`}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
              </div>
            </form>
          )}
          
        </div>
        
      </RevealOnScroll>
    </section>
  );
};
