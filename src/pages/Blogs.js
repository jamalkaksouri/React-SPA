import { Link } from "react-router-dom";

const items = [
  { name: "blog-1", to: "/blogs/1" },
  { name: "blog-2", to: "/blogs/2" },
  { name: "blog-3", to: "/blogs/3" },
  { name: "blog-4", to: "/blogs/4" },
];

const Blogs = () => {
  return (
    <div className="notfound">
      <h2>Blog List</h2>
      {items.map((item) => {
        return (
          <li key={item.to}>
            <abbr title={`Go to page ${item.name}`}>
              <Link
                className="liLink"
                to={{ pathname: item.to, search: "sort=name" }}
              >
                {item.name}
              </Link>
            </abbr>
          </li>
        );
      })}
    </div>
  );
};

export default Blogs;
