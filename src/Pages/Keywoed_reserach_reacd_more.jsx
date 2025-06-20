import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import preloader from "../assets/images/preloader-img.png";
import Consultation from "../component/Consultation";
import Footer from "../component/Footer";
// import Header from "../component/Header";


function Keywoed_reserach_reacd_more() {
  const { slug } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://admin.anahmarketing.com/get_blog.php");
        const allBlogs = response.data.data;
        const matchedBlog = allBlogs.find(item => item.slug === slug);
        setBlogData(matchedBlog);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching blog:", error);
      }
    };

    fetchData();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon"><img src={preloader} alt="Loading..." /></div>
        </div>
      </div>
    );
  }

  if (!blogData) {
    return <p>Blog not found</p>;
  }

  return (
    <>
      {/* <Helmet>
        <title>{blogData.meta_title || blogData.title}</title>
        <meta name="description" content={blogData.meta_description?.substring(0, 160)} />
      </Helmet> */}


      {/* <Header/> */}

      <div className="about-header-area blog-single-section">
        <img alt={blogData.title} src={`${blogData.image}`} className="full-img" />
        <div className="container">
          <div className="row">
            <div className="col-lg-12 m-auto">
              <div className="about-inner-header heading9 text-center">
                <a href="/">Home</a> <i className="fa-solid fa-angle-right"></i>
                <span> Blog </span>
                <i className="fa-solid fa-angle-right"></i>
                <span>{blogData.title}</span>
              </div>
            </div>
          </div>
          <ul style={{ marginTop: "33px" }}>
            <li className="post-date">{blogData.post_date}</li>
            <li className="post-date">{blogData.post_author}</li>
          </ul>
        </div>
      </div>

      <div className="single-blog">
        <div className="container">
          <div className="blog-title">
            {/* <h2>{blogData.title}</h2> */}
          </div>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: blogData.description }}
          />
        </div>
      </div>

      <Consultation />
      <Footer />
    </>
  );
}

export default Keywoed_reserach_reacd_more;
