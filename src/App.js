import { useEffect, useState } from "react";
import axios from "axios";
import Heading from "./Components/Heading";
import Navbar from "./Components/Navbar";
import NewsArticle from "./Components/NewsArticle";
import Loader from "./Components/Loader";
import "./App.css";
import newsArticle from "./Components/NewsArticle";

function App() {
  const [newsArticles, newsArticlesHandler] = useState([]);
  const [isLoading, loadingHandler] = useState(true);

  const apiCallHandler = (category) => {
    loadingHandler(true);
    console.log("Cit itawrasds");
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=CcDi7FuShG2CTw5uS6DK38IsAgoTAVAF&fq=news_desk:("${category}")`
      )
      .then((res) => {
        let data = res.data.response.docs;

        newsArticlesHandler(data);
        loadingHandler(false);
      });
  };

  useEffect(() => {
    apiCallHandler("Home");
  }, []);

  return (
    <>
      <Heading />
      <div className="container">
        <Navbar clickHandler={apiCallHandler} />
        <h2>News Article</h2>
        {isLoading ? (
          <Loader />
        ) : (
          newsArticles.map((val, index) => {
            const { web_url } = val || {};
            return <NewsArticle key={web_url} data={val} />;
          })
        )}
      </div>
    </>
  );
}

export default App;
