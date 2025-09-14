import { Card } from "react-bootstrap";
const FeatureCard = ({
  feature
}) => {
  return <Card className="card-body text-center bg-transparent p-0">
            <figure className="text-primary mb-4">
                {feature.icon}
            </figure>

            <h5 className="mb-3">{feature.title}</h5>
            <p className="mb-0">{feature.description}</p>
        </Card>;
};
export default FeatureCard;