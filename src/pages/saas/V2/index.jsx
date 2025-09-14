import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Hero from "@/pages/saas/V2/components/Hero";
import Features from "@/pages/saas/V2/components/Features";
import Steps from "@/pages/saas/V2/components/Steps";
import Integration from "@/pages/saas/V2/components/Integration";
import Pricing from "@/pages/saas/V2/components/Pricing";
import Testimonials from "@/pages/saas/V2/components/Testimonials";
import CTA from "@/pages/saas/V2/components/CTA";
import Footer1 from '@/components/footer/Footer1';
import PageTitle from '@/components/PageTitle';
const SaaSv2 = () => {
  return <>
      <PageTitle title='SaaS v.2' />

      <TopNavigationBar menuProps={{
      showContactUs: true,
      showDocs: true,
      ulClassName: 'mx-auto'
    }} showSignUp showBuyNow />

      <main>
        <Hero />
        <Features />
        <Steps />
        <Integration />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer1 />
    </>;
};
export default SaaSv2;