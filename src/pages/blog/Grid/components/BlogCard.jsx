import { Card, CardBody, CardFooter, CardTitle } from "react-bootstrap";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
const BlogCard = ({
  blog
}) => {
  const {
    category,
    image,
    publishedBy,
    title,
    description
  } = blog;
  return <Card as={"article"} className="bg-transparent h-100 p-0">
      <div className="badge text-bg-dark position-absolute top-0 start-0 m-3">{category}</div>
      <img src={image} className="card-img" alt="Blog-img" />
      <CardBody className="px-2 pb-4">
        <CardTitle as={"h6"} className="mb-2"><Link to="">{title}</Link></CardTitle>
        <p className="small mb-0">{description}</p>
      </CardBody>
      <CardFooter className="bg-transparent d-flex justify-content-between px-2 py-0">
        <span className="heading-color fw-semibold mb-0">{publishedBy.firstName} {publishedBy.lastName}</span>
        <Link className="icon-link icon-link-hover stretched-link" to="/blog/single/v1">Read more<BsArrowRight className="bi" /> </Link>
      </CardFooter>
    </Card>;
};
export default BlogCard;