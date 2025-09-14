import { Link } from 'react-router-dom';
import LogoBox from '@/components/LogoBox';
const PageHeading = ({
  heading,
  subHeading
}) => {
  return <>
      <Link to="/"><LogoBox className='h-50px mb-4' smallIcon /></Link>
      <h2 className="mb-0">{heading}</h2>
      <p className="mb-0">{subHeading}</p>
    </>;
};
export default PageHeading;