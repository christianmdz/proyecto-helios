import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Comandante from '../pages/Comandante';

export default function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path='/comandante' element={<Comandante />} />
    </Routes>
  );
}




//   export default function Routing (){
//    return (
//        <Routes>
//            <Route Path /login element={<Login>} />
//            <Route
//                element={
//                    <ProtectedRoute>
//                        <MainPage>
//                }
//    )        >
//                Route index element=Home
//                Route path element
//                Route path element
//                Route path element
//                Route path element
//                Route path element
//                Route path element
//             <Route/>
//             <Route path * element not found
//   }
