import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Hero from "@/pages/saas/V1/components/Hero";
import Tools from "@/pages/saas/V1/components/Tools";
import Features1 from "@/pages/saas/V1/components/Features1";
import Features2 from "@/pages/saas/V1/components/Features2";
import Integration from "@/pages/saas/V1/components/Integration";
import Pricing from "@/pages/saas/V1/components/Pricing";
import Blogs from "@/pages/saas/V1/components/Blogs";
import Footer2 from '@/components/footer/Footer2';
import { FaCrown } from 'react-icons/fa6';
import { Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PageTitle from '@/components/PageTitle';
const SaaSv1 = () => {
  return <>
      <PageTitle title='SaaS v.1' />

      <TopNavigationBar menuProps={{
      showContactUs: true,
      showDocs: true,
      ulClassName: 'mx-auto'
    }} showSignUp showBuyNow data-bs-theme='dark'>
        <Alert variant='success' dismissible className="alert py-2 m-0 bg-primary border-0 rounded-0  fade show text-center overflow-hidden" role="alert">
          <p className="text-white small m-0"><FaCrown className="fa-solid me-2" /> New version is here! Discover what's fresh and improved. <Link to="" className="btn btn-xs btn-white ms-2 mb-0">Click here to upgrade!</Link></p>
        </Alert>
      </TopNavigationBar>

      <main>
        <Hero />
        <Tools />
        <Features1 />
        <Features2 />
        <Integration />
        <Pricing />
        <Blogs />
      </main>

      <Footer2 theme='dark' />
    </>;
};
export default SaaSv1;