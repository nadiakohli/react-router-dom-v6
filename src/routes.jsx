import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

// Components
import Home from 'components/Home';
import Login from 'components/Login';
import NotFound from 'components/NotFound';

// Private
import AuthRoute from 'routes/AuthRoute';

const AppRouter = () => (
  <Routes>
    <Route path="/" element={<Navigate from="/" to="/login" />} />
    <Route exact path="/login" element={<Login />} />
    <Route path="/home" element={<AuthRoute><Home /></AuthRoute>} />
    <Route path="*" element={< NotFound/>} />
  </Routes>
);

export default AppRouter;
