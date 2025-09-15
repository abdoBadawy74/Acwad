import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ServiceCard = ({ service }) => {
  return (
    <Card className="bg-light h-100">
      <Card.Body className="pb-0">
        <div className="icon-lg bg-white text-primary rounded-circle mb-4 mt-n5 flex-centered">
           <i class={service.icon} />
        </div>
        <h5 className="mb-3">
          <Link to="">{service.title}</Link>
        </h5>
        <p>{service.description}</p>
      </Card.Body>
      {/* go to whatsapp */}
      {/* <Card.Footer className="bg-light mt-auto pt-2">
        <Link className="icon-link icon-link-hover" to="">
          Know more
          <BsArrowRight className="bi" />{" "}
        </Link>
      </Card.Footer> */}
    </Card>
  )
}
export default ServiceCard
