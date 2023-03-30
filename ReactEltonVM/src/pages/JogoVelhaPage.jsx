import React from 'react';
import Menu from '../components/Menu';
import JogoDaVelha from '../components/JogoDaVelha';

function JogoVelhaPage() {
  return (
    <div className="bg-gray-400 h-screen w-screen">
      <Menu />
      <JogoDaVelha />
    </div>
  );
}

export default JogoVelhaPage;
