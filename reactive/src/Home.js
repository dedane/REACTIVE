
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Herosection/Herosection";
import How from './components/Howwedoit/How';
import Testimonial from './components/Testimonials/Testimonial';
import Footer from "./components/Footer/Footer";




export default function Home() {
 
  return (
    <div>
      <Navbar />
     {/*  <Paper className={styles.section}> */}
      <HeroSection />
      <How />
      <Testimonial />
      <Footer />
   {/*  </Paper> */}
    </div>
  );
}