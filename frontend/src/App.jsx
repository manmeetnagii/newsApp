import { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./components/NewsCard/NewsCard";
import {toast, ToastContainer, Bounce} from 'react-toastify'
import 'react-toastify/ReactToastify.min.css'


function App() {
  const [data, setData] = useState([]);


  // function to limit the characters of news description 
  const limitTo30Chars = (text) => {
    return text.length > 100 ? text.slice(0, 100) + "..." : text;
  };

  // function to format the published date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const formattedDate = date.toISOString().split("T")[0];
    return formattedDate;
  };

  useEffect(() => {
    async function fetchApi() {
      try {
        const result = await axios.get("https://newsapp-7fd5.onrender.com/fetch-api");
        setData(result.data);
      } catch (error) {
        toast.error("Error in fetching API")
      }
    }
    fetchApi();
  }, []);

  return (
    <>
      <div className="news-homepage">

        {/* navbar */}
        <div className="navbar">
          <div className="logoAndHeading">
            <img src="/logo.png" alt="" className="logo" />
            <h2 className="heading">i24 News</h2>
          </div>
          <div className="navLinks-container">
            <a href="#">Home</a>
            <span>|</span>
            <a href="#"></a>
            <a href="#">Top 100 News</a>
            <span>|</span>
            <div className="select-container">
              <span>Select News By Topic</span>
              <select name="select" id="" className="custom-select">
                <option value="hidni">Politics</option>
                <option value="hidni">Business</option>
                <option value="hidni">Technology</option>
                <option value="hidni">Geography</option>
              </select>
            </div>
          </div>
        </div>

        {/* marque */}
        <marquee>
          <p>
            {" "}
            <span>Breaking News:</span> Major event happening now! | Stay tuned
            for updates! | Latest headlines: New technology emerging in the
            market! | Health updates: New study shows benefits of daily
            exercise! | Sports: Local team wins championship! | Weather Alert:
            Storm warning issued for the area! | Entertainment: Upcoming
            blockbuster movie releases! | Don’t miss out on any updates!
          </p>
        </marquee>

        {/* news container */}
        <div className="news-container">
          {data.map((data, index) => (
            <NewsCard
              key={index}
              headline={data.title}
              image={data.urlToImage}
              article={limitTo30Chars(
                data.description
                  ? data.description
                  : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum."
              )}
              source={data.source.name}
              publicationDate={formatDate(data.publishedAt)}
            />
          ))}
        </div>
      </div>

      {/* toast component */}
      <ToastContainer
          position="bottom-right"
          theme="dark"
          transition={Bounce}
        />
    </>
  );
}

export default App;
