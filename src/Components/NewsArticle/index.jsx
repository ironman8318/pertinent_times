import { get } from "lodash";
import "./styles.css";

const newsArticle = ({ data }) => {
  const { news_desk, headline, pub_date, abstract, web_url, multimedia } =
    data || {};

  const url = get(multimedia, "[0].url", "");
  return (
    <div className="post">
      <div>
        <h2>{news_desk || ""}</h2>
        <h3>{headline.main || ""}</h3>
        <p>{pub_date || ""}</p>
        <p>{abstract || ""}</p>
        <a href={web_url || ""} target="_blank">
          Continue reading
        </a>
      </div>
      <img src={`https://static01.nyt.com/${url}`}></img>
    </div>
  );
};

export default newsArticle;
