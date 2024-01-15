import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faTelegram,
  faWhatsapp,
  faFacebookF,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons'

import './src/styles/global.scss'

import store from './store/store'
import router from './config/routs'

library.add(faPhone, faEnvelope, faGithub, faTelegram, faWhatsapp, faFacebookF, faLinkedinIn)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
