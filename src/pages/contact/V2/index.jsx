import Footer1 from '@/components/footer/Footer1'
import TopNavigationBar from '@/components/topbar/TopNavigationBar'
import Hero from './components/Hero'
import Work from './components/Work'
import OfficeLocation from './components/OfficeLocation'
import PageTitle from '@/components/PageTitle'
const ContactV2 = () => {
  return (
    <>
      <PageTitle title="Contact" />

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
        <Hero />

        <Work />

        {/* <OfficeLocation /> */}
      </main>
      <Footer1 />
    </>
  )
}
export default ContactV2
