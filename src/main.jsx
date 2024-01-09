import React from 'react'
import ReactDOM from 'react-dom/client'
import Alert from './Alert.jsx'
import Banner from './Banner.jsx'
import Header from './Header.jsx'
import Menu from './Menu.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Alert />
    <Banner/>
    <Header/>
    <Menu/>
  </React.StrictMode>
)
