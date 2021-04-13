
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/main.scss'
import {useGetUser} from '@/actions/user';

const App = ({ Component, pageProps }) => 
     <Component {...pageProps} />


export default App
