import { Helmet } from 'react-helmet-async'
const PageTitle = ({ title }) => {
  const defaultTitle = 'Five Software Soultions'
  return (
    <Helmet>
      <title>{title ? title + ' | ' + defaultTitle : defaultTitle}</title>
    </Helmet>
  )
}
export default PageTitle
