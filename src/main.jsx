import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import requests from './requests'
import Row from './components/Row.jsx';
import Banner from './components/Banner.jsx';
import Nav from './components/Nav.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className='app'>
      <Nav />
      <Banner />
      <Row title ='NETFLIX ORIGINALS' isLarge = {true} fetchURL ={requests.fetchNetflixOriginals}/>
      <Row title ='TRENDING NOW' isLarge = {false} fetchURL ={requests.fetchTrending}/>
      <Row title ='TOP RATED' isLarge = {false} fetchURL ={requests.fetchTopRated}/>
      <Row title ='ACTION MOVIES' isLarge = {false} fetchURL ={requests.fetchActionMovies}/>
      <Row title ='COMEDY MOVIES' isLarge = {false} fetchURL ={requests.fetchComedyMovies}/>
      <Row title ='HORROR MOVIES' isLarge = {false} fetchURL ={requests.fetchHorrorMovies}/>
      <Row title ='ROMANCE MOVIES' isLarge = {false} fetchURL ={requests.fetchRomanceMovies}/>
      <Row title ='DOCUMENTARIES' isLarge = {false} fetchURL ={requests.fetchDocumentaries}/>
      

    </div>
  </StrictMode>,
)
