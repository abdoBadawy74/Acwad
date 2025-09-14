import { Link } from 'react-router-dom';
import { currency } from '@/states/constants';
import { BsCheckCircleFill, BsTruck, BsXCircleFill } from 'react-icons/bs';
import { toSentenceCase } from '@/utils/change-casing';
import { Col, Row } from 'react-bootstrap';
const getStatusInfo = status => {
  const statusInfo = {
    className: 'text-danger',
    icon: BsXCircleFill,
    text: toSentenceCase(status)
  };
  if (status === 'delivered') {
    statusInfo.className = 'text-success';
    statusInfo.icon = BsCheckCircleFill;
  } else if (status === 'processing') {
    statusInfo.className = 'text-warning';
    statusInfo.icon = BsCheckCircleFill;
  }
  return statusInfo;
};
const OrderHistoryItem = ({
  image,
  orderNo,
  name,
  size,
  deliveryDate,
  status,
  amount
}) => {
  const {
    className,
    icon: Icon,
    text
  } = getStatusInfo(status);
  return <Row className="align-items-md-center">
      <Col xs={5} md={2}>
        <div className="bg-light p-2 rounded-2">
          <img src={image} alt='' />
        </div>
      </Col>
      <Col xs={7} md={10}>
        <Row className="g-2 align-items-center">
          <Col md={6} className="mb-3 mb-md-0">
            <p className="heading-color fw-normal small mb-2">Order no: <span className="text-primary">{orderNo}</span></p>
            <h6 className="mb-2">
              <Link to="">{name}</Link>
            </h6>
            <ul className="nav nav-divider small align-items-center mt-1">
              {size && <li className="nav-item">Size: <b>{size}</b></li>}
              <li className="nav-item">Shipped date: <b>{deliveryDate}</b></li>
            </ul>
          </Col>

          {status === 'processing' && <Col md={3} className="mb-3 mb-md-0">
              <Link to="" className="btn btn-sm btn-light border mb-3 icons-center"><BsTruck className="me-2" />Track order</Link><br />
              <p className="text-primary fw-semibold small mb-0 icons-center"><BsCheckCircleFill className="me-1" />In Transit</p><br />
              <small className="text-body-secondary">Expected at NY,USA</small>
            </Col>}

          <Col md={3} className="ms-auto text-md-end mt-3 pt-1">
            <p className={`fw-semibold mb-1 mb-md-3 icons-center justify-content-end ${className}`}><Icon className="me-1" />{text}</p><br />
            <small>Total amount</small>
            <h5 className="mb-3 mt-1">{currency}{amount.toFixed(2)}</h5>
          </Col>
        </Row>
      </Col>
    </Row>;
};
export default OrderHistoryItem;