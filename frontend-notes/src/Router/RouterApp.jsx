import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { MainLogin } from '../auth/page/MainLogin';
import { RoutesApp } from '../notes/routes/RoutesApp';
import { useSelector } from 'react-redux';
import { setStatus } from '../store/tokenSlice';

export const RouterApp = () => {

    // const status = useSelector((state) => state.reducer.statusValue);
    // const token = useSelector((state) => state.reducer.token);

    // console.log(status,token);



  return (
    <Routes>
      <Route path='/*' element={<MainLogin />} />

     <Route path='/*' element={<RoutesApp />} />
    </Routes>
  );
};
