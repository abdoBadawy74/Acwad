import LanguageDropdown from './LanguageDropdown'
import { currentYear, developedBy, developedByLink } from '@/states/constants'
const CreditWithLanguage = () => {
  return (
    <div className="d-md-flex justify-content-between align-items-center text-center text-lg-start py-4">
      <div className="text-body"> Copyrights ©{currentYear} Five.</div>
      {/* <LanguageDropdown /> */}
    </div>
  )
}
export default CreditWithLanguage
