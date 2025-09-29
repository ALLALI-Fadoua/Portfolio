import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email services like EmailJS here
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "3allalifadoua@gmail.com",
      action: "mailto:3allalifadoua@gmail.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Localisation",
      details: "Boumèrdes, Algérie",
      action: null
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Téléphone",
      details: "+213 778 659 963",
      action: "tel:+213778659963"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      name: "GitHub",
      url: "https://github.com/ALLALI-Fadoua",
      color: "hover:text-gray-900 dark:hover:text-white"
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fadoua-allali-977b19377/",
      color: "hover:text-blue-600"
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      url: "https://twitter.com/fadoua",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-950 dark:text-orange-600 mb-4">
            Contactez-moi
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-950 to-orange-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour des collaborations, des opportunités ou simplement pour discuter de vos projets
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">
                Restons en contact
              </h3>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                Je suis toujours ouverte aux nouvelles opportunités et aux projets passionnants. 
                Que ce soit pour une collaboration, un poste ou simplement pour échanger sur le développement web, 
                n'hésitez pas à me contacter !
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-950 dark:bg-orange-600 text-white rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-700 dark:text-gray-300">{item.title}</h4>
                      {item.action ? (
                        <a 
                          href={item.action}
                          className="text-blue-950 dark:text-orange-600 hover:underline transition-colors duration-200"
                        >
                          {item.details}
                        </a>
                      ) : (
                        <p className="text-gray-600 dark:text-gray-400">{item.details}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4">
                Suivez-moi sur les réseaux
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 text-gray-600 dark:text-gray-400 ${link.color}`}
                    title={link.name}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="bg-white dark:bg-gray-900 p-6 rounded-xl border-l-4 border-orange-600 shadow-lg">
              <p className="text-lg italic text-gray-700 dark:text-gray-300 mb-2">
                "Les meilleures collaborations naissent d'une conversation. Alors, commençons à discuter !"
              </p>
              <cite className="text-orange-600 font-semibold">- ALLALI Fadoua</cite>
            </blockquote>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">
                Envoyez-moi un message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Nom complet
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-950 dark:focus:ring-orange-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-gray-100"
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-950 dark:focus:ring-orange-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-gray-100"
                      placeholder="votre.email@exemple.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Sujet
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-950 dark:focus:ring-orange-600 focus:border-transparent transition-colors duration-200 text-gray-900 dark:text-gray-100"
                    placeholder="De quoi souhaitez-vous parler ?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-950 dark:focus:ring-orange-600 focus:border-transparent transition-colors duration-200 resize-none text-gray-900 dark:text-gray-100"
                    placeholder="Décrivez votre projet ou votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-blue-950 to-orange-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200 font-semibold flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Envoyer le Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;