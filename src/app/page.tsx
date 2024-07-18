import Navigation from "../components/Navigation/Navigation";
import Slider from "../components/HomeEight/Slider";
import About from "../components/HomeEight/About";
import HowItWorks from "../components/HomeEight/HowItWorks";
import Features from "../components/HomeEight/Features";
import Counter from "../components/HomeEight/Counter";
import Screenshots from "../components/Common/Screenshots";
import Testimonial from "../components/HomeEight/Testimonial";
import Pricing from "../components/HomeEight/Pricing";
import Faq from "../components/Common/Faq";
import Team from "../components/HomeEight/Team";
import AppDownload from "../components/HomeEight/AppDownload";
import Blog from "../components/HomeEight/Blog";
import ContactForm from "../components/Common/ContactForm";
import Footer from "../components/Common/Footer";

export default function Home() {
  return (
    <>
      <Navigation />

      <Slider /> 

      <About />

      <HowItWorks />

      <Features />

      <Counter />

      <Screenshots />

      <Testimonial />

      <Pricing />

      <Faq />

      <Team />

      <AppDownload />

      <Blog />

      <ContactForm />

      <Footer />
    </>
  );
}
