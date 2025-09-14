import { Card } from "react-bootstrap";
const StepCard = ({
  step
}) => {
  return <Card className="border p-4 p-sm-5 mb-5">
            <Card.Body className="p-0 pb-5">
                {step.stepNumber && <div className="icon-lg bg-primary rounded-circle fw-bold text-white mb-3">
                        {step.stepNumber < 10 && <span>0</span>}
                        {step.stepNumber}
                    </div>}
                <h4 className="mb-3">{step.title}</h4>
                <p className="heading-color">{step.description}</p>
            </Card.Body>

            <Card.Footer className="bg-transparent text-center p-0">
                <img src={step.image} alt="" />
            </Card.Footer>
        </Card>;
};
export default StepCard;