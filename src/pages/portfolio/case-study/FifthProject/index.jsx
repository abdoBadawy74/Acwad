import PageBreadcrumb from '@/components/PageBreadcrumb'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import LightBoxSection from './components/LightBoxSection'
import RelatedWorksSwiper from '../components/RelatedWorksSwiper'
import WebsiteResult from './components/WebsiteResult'
import Testimonial from './components/Testimonial'
import WebsiteOverview from './components/WebsiteOverview'
import Footer1 from '@/components/footer/Footer1'
import { Col, Container, Row } from 'react-bootstrap'
import PageTitle from '@/components/PageTitle'
const CaseStudyV1 = () => {
  return (
    <>
      <PageTitle title="After Glow" />

      <TopNavigationBar
        menuProps={{
          showContactUs: true,
          showDocs: true,
          ulClassName: 'mx-auto',
        }}
        showSignUp
        showBuyNow
      />

      <main>
        <section className="pt-xl-9">
          <Container className="pt-4 pt-xl-0">
            <Row>
              <Col md={9} className="mx-auto text-center">
                <div className="d-flex justify-content-center position-relative mb-4">
                  <PageBreadcrumb
                    breadcrumbClassName="pb-0 mb-0"
                    items={[
                      { name: 'Home', url: '/home' },
                      { name: 'Portfolio List', url: '/portfolio/list' },
                      { name: 'After Glow', url: '/portfolio/case-study/after-glow' },
                    ]}
                  />
                </div>
                <h1 className="mb-4">After Glow</h1>
                <p>An elegant mobile app that empowers clients to book, manage, and pay for beauty services with ease in the UAE.</p>
              </Col>

              <WebsiteOverview />

              <LightBoxSection />

              <WebsiteResult />

              <Testimonial />
            </Row>
          </Container>
        </section>

        {/* <RelatedWorksSwiper /> */}
      </main>

      <Footer1 />
    </>
  )
}
export default CaseStudyV1
