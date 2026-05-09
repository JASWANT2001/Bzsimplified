import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Service from './pages/Service'
import ServiceLB from './pages/ServiceLB'
import ServiceBB from './pages/ServiceBB'
import ServiceST from './pages/ServiceST'
import ServicePB from './pages/ServicePB'
import ServiceFF from './pages/ServiceFF'
import ServiceEC from './pages/ServiceEC'
import ServiceMO from './pages/ServiceMO'
import ServiceET from './pages/ServiceET'
import ServiceGB from './pages/ServiceGB'
import Teams from './pages/Teams'
import Partners from './pages/Partners'
import BrandStories from './pages/BrandStories'
import BrandStoryDetail from './pages/BrandStoryDetail'
import BrandDetail from './pages/BrandDetail'
import WallOfFame from './pages/WallOfFame'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Terms from './pages/Terms'
import AdminLogin from './pages/AdminLogin'
import AdminPosts from './pages/AdminPosts'
import AdminPostEditor from './pages/AdminPostEditor'
import './index.css'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true,          element: <Home />         },
      { path: 'contact',      element: <Contact />      },
      { path: 'service/lb',   element: <ServiceLB />    },
      { path: 'service/bb',   element: <ServiceBB />    },
      { path: 'service/st',   element: <ServiceST />    },
      { path: 'service/pb',   element: <ServicePB />    },
      { path: 'service/ff',   element: <ServiceFF />    },
      { path: 'service/ec',   element: <ServiceEC />    },
      { path: 'service/mo',   element: <ServiceMO />    },
      { path: 'service/et',   element: <ServiceET />    },
      { path: 'service/gb',   element: <ServiceGB />    },
      { path: 'service/:code',element: <Service />      },
      { path: 'teams',        element: <Teams />        },
      { path: 'partners',      element: <Partners />     },
      { path: 'brand-stories',       element: <BrandStories />     },
      { path: 'brand-stories/:slug', element: <BrandStoryDetail /> },
      { path: 'brand/:slug',   element: <BrandDetail />  },
      { path: 'wall-of-fame',   element: <WallOfFame />    },
      { path: 'privacy-policy', element: <PrivacyPolicy /> },
      { path: 'terms-of-usage', element: <Terms />         },
    ],
  },
  // Admin — no navbar/footer wrapper
  { path: '/admin',                        element: <AdminLogin />      },
  { path: '/admin/posts',                  element: <AdminPosts />      },
  { path: '/admin/posts/new',              element: <AdminPostEditor /> },
  { path: '/admin/posts/:slug/edit',       element: <AdminPostEditor /> },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
