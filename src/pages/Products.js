import { Link } from "react-router-dom";

const items = [
  { name: "product-1", to: "/products/1" },
  { name: "product-2", to: "/products/2" },
  { name: "product-3", to: "/products/3" },
  { name: "product-4", to: "/products/4" },
];

const Products = () => {
  return (
    <div className="notfound">
      <h2>Product List</h2>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <abbr title={`Go to page ${item.name}`}>
              <Link className="liLink" to={item.to}>
                {item.name}
              </Link>
            </abbr>
          </li>
        );
      })}
    </div>
  );
};

export default Products;
