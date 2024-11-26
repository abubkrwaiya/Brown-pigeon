import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import {db} from "../context/firebase";
import {collection, addDoc} from "firebase/firestore";
import PageHeader from "../components/PageHeader";
import {FiMail, FiPhone, FiMapPin} from "react-icons/fi";
import {useNavigate} from "react-router-dom";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import Map from "../components/Map";

const Contact = () => {
  const [formData, setFormData] = useState({name: "", email: "", message: ""});
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();

  // Check user authentication
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // Redirect to login form if the user is not logged in
        alert("You must be logged in to send a message!");
        navigate("/signup");
      }
    });

    return () => unsubscribe(); // Cleanup the listener
  }, [auth, navigate]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");

    try {
      const messagesCollection = collection(db, "messages");
      await addDoc(messagesCollection, formData);
      setStatus("Message sent successfully!");
      alert("Message sent successfully!");
      setFormData({name: "", email: "", message: ""}); // Reset form
      navigate("/");
    } catch (error) {
      setStatus("Error sending message. Please try again.");
      console.error("Error adding document:", error);
    }
  };

  return (
    <div>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team"
        background="from-purple-600 to-pink-600"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{opacity: 0, x: -20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </form>
              {status && (
                <p className="mt-4 text-center text-sm font-medium">
                  {status === "Submitting..." ? (
                    <span className="text-blue-600">{status}</span>
                  ) : (
                    <span
                      className={
                        status.includes("Error")
                          ? "text-red-600"
                          : "text-green-600"
                      }
                    >
                      {status}
                    </span>
                  )}
                </p>
              )}
            </motion.div>

            {/* Contact Information Section */}
            <motion.div
              initial={{opacity: 0, x: 20}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.5}}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center">
                  <FiMail className="text-blue-600 text-xl mr-4" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-gray-600">info@brownpigeon.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiPhone className="text-blue-600 text-xl mr-4" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-gray-600">+234 7037881043</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <FiMapPin className="text-blue-600 text-xl mr-4" />
                  <div>
                    <h3 className="font-medium">Address</h3>
                    <p className="text-gray-600">
                      Kabuga, salbas house, kano nigeria
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="font-medium mb-4">Office Hours</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>Monday - Friday: 9:00 AM - 6:00 PM</li>
                  <li>Saturday: 10:00 AM - 4:00 PM</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default Contact;
