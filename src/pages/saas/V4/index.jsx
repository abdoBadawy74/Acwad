import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Hero from "@/pages/saas/V4/components/Hero";
import TourVideo from "@/pages/saas/V4/components/TourVideo";
import Steps from "@/pages/saas/V4/components/Steps";
import Features from "@/pages/saas/V4/components/Features";
import Integrations from "@/pages/saas/V4/components/Integrations";
import Testimonials from "@/pages/saas/V4/components/Testimonials";
import Blogs from "@/pages/saas/V4/components/Blogs";
import Footer6 from '@/components/footer/Footer6';
import PageTitle from '@/components/PageTitle';
const SaaSv4 = () => {
  return <>
      <PageTitle title='SaaS v.4' />

      <TopNavigationBar menuProps={{
      showContactUs: true,
      showDocs: true,
      ulClassName: 'mx-auto'
    }} showSignUp showBuyNow hideThemeToggler />

      <main>
        <Hero />
        <TourVideo />
        <Steps />
        <Features />
        <Integrations />
        <Testimonials />
        <Blogs />
      </main>

      <Footer6 />
    </>;
};
export default SaaSv4;