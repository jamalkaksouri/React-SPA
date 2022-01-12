import { Link, useLocation, useParams } from "react-router-dom";
import queryString from "query-string";

const Blog = () => {
  const params = useParams();
  const query = queryString.parse(useLocation().search);
  console.log(query);
  return (
    <div className="notfound">
      <h2>blog detail-{params.id}</h2>
      <Link className="backlink" to="/blogs">
        back to blog page
      </Link>
    </div>
  );
};

export default Blog;
