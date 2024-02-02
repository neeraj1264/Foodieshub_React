import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';import Banner from './components/banner/Banner';
function App() {

  return (
   <>
 <Routes>
    <Route path="" element={<Layout />}>
      <Route index element={<Banner/>} />
      {/* <Route path="satsang" element={<Satsang_video />} /> */}
    </Route>
  </Routes>   </>
  )
}

export default App
