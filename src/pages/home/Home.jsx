import React from "react";
import Trusted from "../../Components/trusted/Trusted";
import About from "../../Components/about/About";
import ChouseUs from "../../Components/chouseus/ChouseUs";
import Services from "../../Components/servic/Services";
import CaseStudies from "../../Components/casestudies/CaseStudies";
import Navbar from "../../Components/navbar/Navbar";
import Footer from "../../Components/footer/Footer";
import Testimonial from "../../Components/testimonials/Testimonial";
import Questions from "../../Components/questions/Questions";
import MostSearch from "../../Components/mostsearch/MostSearch";
import Blog from "../../Components/blog/Blog";

const Home = () => {
  return (
    <div className="min-h-screen mt-15">
      <Navbar/>
      <div className="relative">
        <img src="/images/heroimg.jpg" alt="" className="h-[550px] w-full" />
        <div className="absolute top-0 w-full h-full flex ">
          <div className="flex flex-col space-y-4 mt-20 ml-20 absolute z-50 ">
            <p className=" text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl text-[#FFFFFF] font-Exo font-semibold">
              AI & robotics are <br />
              making the world <br />
              <span className="bg-gradient-to-r from-[#5C00E5] to-[#59EBFD] text-transparent bg-clip-text">
                Intelligent
              </span>
            </p>
            <p className="text-[#AAA8B1] text-md">
              AI and robotics focus on building intelligent systems and machines
              that can perform <br /> tasks with human intervention.
            </p>
            <button className="bg-[#59EBFD] w-30 hover:scale-105 duration-300 py-2">Explore More</button>
           </div>
          <div className="right-0 absolute">
            <img src="/images/ladyrobot.jpg" alt="" className=" h-[550px] w-full  opacity-80" />
          </div>
        </div>
      </div>
      <Trusted/>
      <About/>
      <ChouseUs/>
      <Services/>
      <CaseStudies/>
      <Testimonial/>
      <Questions/>
      <MostSearch/>
      <Blog/>
      <Footer/>
    </div>
    );
  };

export default Home;
