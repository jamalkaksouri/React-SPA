import { Link, useParams } from "react-router-dom";

const Product = () => {
  const url_id = useParams();
  return (
    <div className="notfound">
      <h2>Product detail-{url_id.id}</h2>
      <Link className="backlink" to="/products">
        back to products page
      </Link>
    </div>
  );
};

export default Product;
