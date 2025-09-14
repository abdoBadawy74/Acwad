import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Hero from "@/pages/saas/V3/components/Hero";
import Features from "@/pages/saas/V3/components/Features";
import Statistics from "@/pages/saas/V3/components/Statistics";
import FeaturesAndIntegrations from "@/pages/saas/V3/components/FeaturesAndIntegrations";
import Pricing from "@/pages/saas/V3/components/Pricing";
import Testimonials from "@/pages/saas/V3/components/Testimonials";
import CTA from "@/pages/saas/V3/components/CTA";
import Footer6 from '@/components/footer/Footer6';
import PageTitle from '@/components/PageTitle';
const SaaSv3 = () => {
  return <>
      <PageTitle title='SaaS v.3' />

      <TopNavigationBar menuProps={{
      showContactUs: true,
      showDocs: true,
      ulClassName: 'mx-auto'
    }} showSignUp showBuyNow data-bs-theme='dark' />
      <main>
        <Hero />
        <Features />
        <Statistics />
        <FeaturesAndIntegrations />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>

      <Footer6 />
    </>;
};
export default SaaSv3;