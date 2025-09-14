import PrivacyPolicy from '@/pages/other-pages/PrivacyPolicy'
import { lazy } from 'react'
import { Navigate } from 'react-router-dom'

// Home Page
const ClassicDefault = lazy(() => import('@/pages/demos/ClassicDefault'))

// About Pages
const AboutV1 = lazy(() => import('@/pages/about/V1'))

// Account Pages
const AccountProfile = lazy(() => import('@/pages/account/Profile'))
const AccountSecurity = lazy(() => import('@/pages/account/Security'))
const AccountNotifications = lazy(() => import('@/pages/account/Notifications'))
const AccountProjects = lazy(() => import('@/pages/account/Projects'))
const AccountPaymentDetails = lazy(() => import('@/pages/account/PaymentDetails'))
const AccountOrderHistory = lazy(() => import('@/pages/account/OrderHistory'))
const AccountWishlist = lazy(() => import('@/pages/account/Wishlist'))
const AccountDeleteProfile = lazy(() => import('@/pages/account/DeleteProfile'))

// Auth Pages
const AuthSignIn = lazy(() => import('@/pages/auth/SignIn'))
const AuthSignUp = lazy(() => import('@/pages/auth/SignUp'))
const AuthForgotPassword = lazy(() => import('@/pages/auth/ForgotPassword'))

// Blog Pages
const BlogGrid = lazy(() => import('@/pages/blog/Grid'))
const BlogListSidebar = lazy(() => import('@/pages/blog/ListSidebar'))
const BlogSingleV1 = lazy(() => import('@/pages/blog/single/V1'))
const BlogSingleV2 = lazy(() => import('@/pages/blog/single/V2'))

// Contact Pages
const ContactV2 = lazy(() => import('@/pages/contact/V2'))

// Other Pages
const FAQPage = lazy(() => import('@/pages/other-pages/FAQs'))
const NotFound = lazy(() => import('@/pages/other-pages/NotFound'))
const TermsNConditions = lazy(() => import('@/pages/other-pages/TermsNConditions'))

// Portfolio Pages
const PortfolioList = lazy(() => import('@/pages/portfolio/List'))
const PortfolioBioCosmetics = lazy(() => import('@/pages/portfolio/case-study/BioCosmetics'))
const PortfolioBarad = lazy(() => import('@/pages/portfolio/case-study/Barad'))
const PortfolioSpecialist = lazy(() => import('@/pages/portfolio/case-study/Specialist'))
const PortfolioDrCosmetics = lazy(() => import('@/pages/portfolio/case-study/DrCosmetics'))
const PortfolioAfterGlow = lazy(() => import('@/pages/portfolio/case-study/FifthProject'))

// Shop Pages
const ShopIndex = lazy(() => import('@/pages/shop/Index'))
const ShopGrid = lazy(() => import('@/pages/shop/Grid'))
const ShopSingle = lazy(() => import('@/pages/shop/Single'))
const ShopCart = lazy(() => import('@/pages/shop/Cart'))
const ShopEmptyCart = lazy(() => import('@/pages/shop/EmptyCart'))
const ShopCheckout = lazy(() => import('@/pages/shop/Checkout'))
export const accountRoutes = [
  {
    path: '/account/profile',
    name: 'account.profile',
    element: <AccountProfile />,
  },
  {
    name: 'account-security',
    path: '/account/security',
    element: <AccountSecurity />,
  },
  {
    name: 'account-notifications',
    path: '/account/notifications',
    element: <AccountNotifications />,
  },
  {
    name: 'account-projects',
    path: '/account/projects',
    element: <AccountProjects />,
  },
  {
    name: 'account-payment-details',
    path: '/account/payment-details',
    element: <AccountPaymentDetails />,
  },
  {
    name: 'account-order-history',
    path: '/account/order-history',
    element: <AccountOrderHistory />,
  },
  {
    name: 'account-wishlist',
    path: '/account/wishlist',
    element: <AccountWishlist />,
  },
  {
    name: 'account-delete-profile',
    path: '/account/delete-profile',
    element: <AccountDeleteProfile />,
  },
]
export const authRoutes = [
  {
    path: '/auth/sign-in',
    name: 'auth.sign-in',
    element: <AuthSignIn />,
  },
  {
    path: '/auth/sign-up',
    name: 'auth.sign-up',
    element: <AuthSignUp />,
  },
  {
    path: '/auth/forgot-password',
    name: 'auth.forgot-password',
    element: <AuthForgotPassword />,
  },
]
export const blogRoutes = [
  {
    path: '/blog/grid',
    name: 'blog.grid',
    element: <BlogGrid />,
  },
  {
    name: 'blog-list-sidebar',
    path: '/blog/list-sidebar',
    element: <BlogListSidebar />,
  },
  {
    name: 'blog-single-v1',
    path: '/blog/single/v1',
    element: <BlogSingleV1 />,
  },
  {
    name: 'blog-single-v2',
    path: '/blog/single/v2',
    element: <BlogSingleV2 />,
  },
]
export const shopRoutes = [
  {
    path: '/shop/index',
    name: 'shop.index',
    element: <ShopIndex />,
  },
  {
    path: '/shop/grid',
    name: 'shop.grid',
    element: <ShopGrid />,
  },
  {
    name: 'shop-single',
    path: '/shop/single/:id',
    element: <ShopSingle />,
  },
  {
    name: 'shop-cart',
    path: '/shop/cart',
    element: <ShopCart />,
  },
  {
    name: 'shop-empty-cart',
    path: '/shop/empty-cart',
    element: <ShopEmptyCart />,
  },
  {
    name: 'shop-checkout',
    path: '/shop/checkout',
    element: <ShopCheckout />,
  },
]
const homeRoutes = [
  {
    path: '/home',
    name: 'home-page',
    element: <ClassicDefault />,
  },
]
const aboutRoutes = [
  {
    name: 'about-v1',
    path: '/about',
    element: <AboutV1 />,
  },
]
const contactRoutes = [
  {
    name: 'pages-contact-2',
    path: '/contact',
    element: <ContactV2 />,
  },
]
const otherRoutes = [
  {
    name: 'specialty-faqs',
    path: '/faq',
    element: <FAQPage />,
  },
  {
    name: 'specialty-error-404',
    path: '/not-found',
    element: <NotFound />,
  },
  {
    name: 'specialty-terms-&-conditions',
    path: '/terms-conditions',
    element: <TermsNConditions />,
  },
  {
    name: 'privacy-policy',
    path: '/privacy-policy',
    element: <PrivacyPolicy />,
  },
]
const portfolioRoutes = [
  {
    name: 'portfolio-list',
    path: '/portfolio/list',
    element: <PortfolioList />,
  },
  // Case Studies
  {
    name: 'portfolio-case-study-bio-cosmetics',
    path: '/portfolio/case-study/yahalaa',
    element: <PortfolioBioCosmetics />,
  },
  {
    name: 'portfolio-case-study-barad',
    path: '/portfolio/case-study/barad',
    element: <PortfolioBarad />,
  },
  {
    name: 'portfolio-case-study-specialist',
    path: '/portfolio/case-study/specialist',
    element: <PortfolioSpecialist />,
  },
  {
    name: 'portfolio-case-study-dr-cosmetics',
    path: '/portfolio/case-study/dr-cosmetics',
    element: <PortfolioDrCosmetics />,
  },
  {
    name: 'portfolio-case-study-after-glow',
    path: '/portfolio/case-study/after-glow',
    element: <PortfolioAfterGlow />,
  },
]
const initialRoutes = [
  {
    path: '/',
    name: 'root',
    element: <Navigate to="/home" />,
  },
  {
    path: '*',
    name: 'all-routes',
    element: <NotFound />,
  },
]
export const appRoutes = [...initialRoutes, ...homeRoutes, ...aboutRoutes, ...contactRoutes, ...otherRoutes, ...portfolioRoutes]
