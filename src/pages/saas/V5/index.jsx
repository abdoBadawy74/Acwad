import TopNavigationBar from '@/components/topbar/TopNavigationBar';
import Hero from "@/pages/saas/V5/components/Hero";
import Clients from "@/pages/saas/V5/components/Clients";
import Features1 from "@/pages/saas/V5/components/Features1";
import Features2 from "@/pages/saas/V5/components/Features2";
import Features3 from "@/pages/saas/V5/components/Features3";
import Integrations from "@/pages/saas/V5/components/Integrations";
import Pricing from "@/pages/saas/V5/components/Pricing";
import Blogs from "@/pages/saas/V5/components/Blogs";
import Footer6 from '@/components/footer/Footer6';
import PageTitle from '@/components/PageTitle';
const SaaSv5 = () => {
  return <>
      <PageTitle title='SaaS v.5' />

      <TopNavigationBar menuProps={{
      showContactUs: true,
      showDocs: true,
      ulClassName: 'mx-auto'
    }} showSignUp showBuyNow />

      <main>
        <Hero />
        <Clients />
        <Features1 />
        <Features2 />
        <Features3 />
        <Integrations />
        <Pricing />
        <Blogs />
      </main>

      <Footer6 />
    </>;
};
export default SaaSv5;