import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Movies from './pages/Movies'
import Favorite from './pages/Favorite'
import SeatLayout from './pages/SeatLayout'
import MoviesDetails from './pages/MoviesDetails'
import Mybookings from './pages/Mybookings'
import{ Toaster } from'react-hot-toast'
import Footer from './components/Footer'
const App = () => {
  const loaction = useLocation()
  const isAdminRoute = location?.pathname?.startsWith('/admin')
  return (
    <>
    <Toaster />
    {/*jab bhi hum load krege web page navbar mount ho jaege*/}
     {!isAdminRoute && <NavBar/>} 
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/movies/:id' element={<MoviesDetails/>} />
        <Route path='/movies/:id/:date' element={<SeatLayout/>} />
        <Route path='/my-bookings' element={<Mybookings/>} />
        <Route path='/favorite' element={<Favorite/>} />
      </Routes>
       {!isAdminRoute && <Footer/>} 
    </>
  )
}

export default App


// import React from 'react'
// import NavBar from './components/NavBar'
// import { Route, Routes, useLocation } from 'react-router-dom'
// import Home from './pages/Home'
// import Movies from './pages/Movies'
// import Favorite from './pages/Favorite'
// import SeatLayout from './pages/SeatLayout'
// import MoviesDetails from './pages/MoviesDetails'
// import Mybookings from './pages/Mybookings'
// import { Toaster } from 'react-hot-toast'
// import Footer from './components/Footer'

// const App = () => {
//   const location = useLocation()
//   const isAdminRoute = location.pathname.startsWith('/admin')

//   return (
//     <>
//       <Toaster />
//       {!isAdminRoute && <NavBar />}

//       <Routes>
//         <Route path='/' element={<Home />} />
//         <Route path='/movies' element={<Movies />} />
//         <Route path='/movies/:id' element={<MoviesDetails />} />
//         <Route path='/movies/:id/:date' element={<SeatLayout />} />
//         <Route path='/my-bookings' element={<Mybookings />} />
//         <Route path='/favorite' element={<Favorite />} />
//       </Routes>

//       {!isAdminRoute && <Footer />}
//     </>
//   )
// }

// export default App

// import React from 'react'
// import NavBar from './components/NavBar'
// import Footer from './components/Footer'

// const App = () => {
//   return (
//     <>
//       <NavBar />
//       <div style={{ minHeight: '400px', textAlign: 'center' }}>
//         <h1>Test Page</h1>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export default App

