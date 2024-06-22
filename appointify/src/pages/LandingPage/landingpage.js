import Navbar from "../../components/navbar/navbar";
import Hero from "./hero";
import HomeImg from "../../images/img11.jpg";
import Features from "./features";
import Last from "./last";
import Footer from "../../components/footer/footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero cName="hero" heroImg={HomeImg} title="From Click to Confirmed" text="Book in Seconds" buttonText="Login/Signup" url="/login" btnClass="show" />
      <Features />
      <Last />
      <Footer />
    </>
  );
}
export default Home;
