import { lazy, Suspense } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';
import LogoBox from '@/components/LogoBox';
import MobileNavbarToggler from '@/components/topbar/MobileNavbarToggler';
import StickyHeader from '@/components/topbar/StickyHeader';
import useToggle from '@/hooks/useToggle';

const FloatingSearch = lazy(() => import('./FloatingSearch'));
const SearchInput = lazy(() => import('./SearchInput'));
const ThemeToggleDropdown = lazy(() => import('@/components/topbar/ThemeToggleDropdown'));
const AppMenu = lazy(() => import('@/components/topbar/AppMenu'));
const ShoppingCartOffcanvas = lazy(() => import('@/components/topbar/ShoppingCartOffcanvas'));

const TopNavigationBar = ({
  showSearchInput,
  showShoppingCart,
  navClassName,
  hideThemeToggler,
  darkButton,
  showFloatingSearch,
  menuProps,
  containerFluid,
  children,
  ...props
}) => {
  const { isTrue: isMenuOpen, toggle: toggleMenu } = useToggle(window.innerWidth >= 1200);

  return (
    <StickyHeader className="header-absolute" {...props}>
      {children}
      <nav className={`navbar navbar-expand-xl ${navClassName ?? ''}`}>
        <Container fluid={containerFluid}>
          <div className="d-flex align-items-center">
          <LogoBox className='me-0'/>
          </div>

          <div className="flex-grow-1 d-flex justify-content-center">
          <Suspense>
            <AppMenu mobileMenuOpen={isMenuOpen} {...menuProps} />
          </Suspense>
          </div>

          <div className="d-flex align-items-center">
            <ul className="nav align-items-center">
            <Suspense>
              {!hideThemeToggler && <ThemeToggleDropdown />}
            </Suspense>

              {showFloatingSearch &&
                <Suspense>
                <FloatingSearch />
                </Suspense>
              }

              {darkButton &&
                <li className="nav-item d-none d-sm-block ms-2">
                <Button variant='dark' size={darkButton.size} className="btn mb-0">{darkButton.text}</Button>
                </li>
              }

              {showSearchInput &&
                <Suspense>
                <SearchInput />
                </Suspense>
              }

              {showShoppingCart && (
                <Suspense>
                <ShoppingCartOffcanvas />
                </Suspense>
              )}

            <li className="nav-item">
              <MobileNavbarToggler isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </li>
          </ul>
          </div>
        </Container>
      </nav>
    </StickyHeader>
  );
};

export default TopNavigationBar;