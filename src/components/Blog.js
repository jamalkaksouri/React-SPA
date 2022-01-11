import { Link, useParams } from "react-router-dom";

const Blog = () => {
  const url_id = useParams();
  return (
    <div className="notfound">
      <h2>blog detail-{url_id.id}</h2>
      <Link className="backlink" to="/blogs">
        back to blog page
      </Link>
    </div>
  );
};

export default Blog;
