import React, {useState, useEffect} from 'react'
import { Routes, Route } from 'react-router-dom'
import axios from 'axios'

import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Store from './components/Store'
import Single from './components/Single'
import Footer from './components/Footer'
import Modal from './components/Modal'
import Error from './components/Error'
import EntryForm from './components/EntryForm'

const App =()=> {
  const [albumArr, setAlbumArr] = useState([])
  const [user, setGetUser] = useState('guest')

  useEffect(()=> {
    const url = 'http://localhost:3005/api/album'

    axios.get(url)
        .then(res => {
            setAlbumArr(res.data)
            
          })
          
        },[])
        
  
  return (
    <div>
      <Header user={user}/>
      <div className="container">
        <Routes>
          <Route path='/' index element={<Home props={albumArr}/>} />
          <Route path='/signin' element={<Modal />} />
          <Route path='/about' element={<About />} />
          <Route path='/store' element={<Store props={albumArr}/>} />
          <Route path='/store/product/:id' element={<Single />} />
          <Route path='/entry' element={<EntryForm />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App;
