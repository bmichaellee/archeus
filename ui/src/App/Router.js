import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Landing, Info } from 'Pages';

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Landing /> } />
      <Route path="info" element={ <Info /> } />
      <Route path="*" element={ <Navigate to="/" /> } />
    </Routes>
  </BrowserRouter>
)
