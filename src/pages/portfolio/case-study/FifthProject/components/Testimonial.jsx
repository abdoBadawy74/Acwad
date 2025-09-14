import { BsQuote } from 'react-icons/bs'
import avatar from '@/assets/images/avatar/placeholder.jpg'
import { Card, Col } from 'react-bootstrap'
const Testimonial = () => {
  return (
    <Col xs={12} className="mt-6">
      <Card className="card-body bg-light p-sm-5">
        <h5 className="display-4 opacity-3 text-primary lh-0 mb-0">
          <BsQuote />
        </h5>
        <q className="fs-5 heading-color">التطبيق اختصر وقتي جدًا في تنظيم المواعيد. شكله شيك وسهل على العميل يحجز ويدفع. ممتاز جدًا.</q>
        <div className="d-flex align-items-center mt-4">
          <div className="avatar">
            <img className="avatar-img rounded-circle" src={avatar} alt="avatar" />
          </div>
          <div className="ms-3">
            <h6 className="mb-0">Ms. Mariam</h6>
            <small>Owner of After Glow Beauty Centerr</small>
          </div>
        </div>
      </Card>
    </Col>
  )
}
export default Testimonial
