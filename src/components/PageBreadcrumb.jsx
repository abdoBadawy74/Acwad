import { Breadcrumb, BreadcrumbItem } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
const PageBreadcrumb = ({ items, dark, breadcrumbClassName }) => {
  const navigate = useNavigate()

  return (
    <Breadcrumb
      listProps={{
        className: `breadcrumb-dots ${breadcrumbClassName ?? ''} ${dark ? 'breadcrumb-dark' : ''}`,
      }}>
      {items.map((item, idx) => (
        <BreadcrumbItem
          onClick={() => navigate(item.url)}
          {...(items.length - 1 === idx
            ? {
                'aria-current': 'page',
              }
            : {})}
          active={items.length - 1 === idx}
          key={idx}>
          {item.name}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  )
}
export default PageBreadcrumb
