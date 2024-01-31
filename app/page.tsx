import About from "./components/about/about";
import Blog from "./components/blog/blog";
import Design from "./components/design/design";
import Destination from "./components/destination/destination";
import Featured from "./components/featured/featured";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Testimonial from "./components/testimonial/testimonial";
import Why from "./components/why/why";

export default function Home(){
  return (
    <div>
      <Header />
      <About />
      <Featured />
      <Destination />
      <Why />
      <Testimonial />
      <Design />
      <Blog />
      <Footer />
    </div>
  )
}