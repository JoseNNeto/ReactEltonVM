import React from 'react';
import CounterPage from './pages/CounterPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import TimerPage from './pages/TimerPage';
import FormPage from './pages/FormPage';
import JogoVelhaPage from './pages/JogoVelhaPage';

const routes = [
  { path: '/', element: <HomePage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/counter', element: <CounterPage /> },
  { path: '/timer', element: <TimerPage /> },
  { path: '/form', element: <FormPage /> },
  { path: '/jogo-da-velha', element: <JogoVelhaPage /> },

];
export default routes;
