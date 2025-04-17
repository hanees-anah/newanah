import Index from "../component";
import Brands_focous from "../component/Brands_focous";
import Consultation from "../component/Consultation";
import ContactSection from "../component/ContactSection";
import Footer from "../component/footer";
import Header from "../component/header";
import OurPortfolis from "../component/Ourportfolis";
import Partner from "../component/Partner";
import Result from "../component/Result";
import Service from "../component/Service";
import  { useEffect, useState} from "react";
import preloader from "../assets/images/preloader-img.png";

function Home() {
      const [isLoading, setIsLoading] = useState(true);
      
          useEffect(() => {
              // Simulate load or wait for all images/resources to load
              const handleLoad = () => {
                  setTimeout(() => {
                      setIsLoading(false);
                  }, 1000); // Optional delay for smooth transition
              };
      
              if (document.readyState === "complete") {
                  handleLoad();
              } else {
                  window.addEventListener("load", handleLoad);
              }
      
              return () => window.removeEventListener("load", handleLoad);
          }, []);
    
    return (
        <>
            {/* <Header /> */}
                 {isLoading && (
                        <div className="preloader">
                            <div className="loading-container">
                                <div className="loading"></div>
                                <div id="loading-icon"><img src={preloader} alt="" /></div>
                            </div>
                        </div>
                    )}

            <Index />
             <Partner />
            <Service />
             <OurPortfolis />
            <Result /> 
            <Brands_focous /> 
             <ContactSection /> 
            <Consultation />  
            <Footer /> 

        </>
    )

}

export default Home;