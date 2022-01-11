import { useParams, Link } from "react-router-dom";
import NotFound from "../pages/NotFound";

const Post = () => {
  let params = useParams();
  let id = !params.id ? 1 : params.id.match(/^[0-9]*$/);
  if (!id) return <NotFound />;

  return (
    <div className="notfound">
      <h2>post detail-{params.id}</h2>
      <div>{JSON.stringify(params)}</div>
      <Link className="backlink" to="/post">
        back to posts page
      </Link>
    </div>
  );
};

export default Post;
