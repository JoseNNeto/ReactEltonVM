import React from 'react';
import Menu from '../components/Menu';
import FormProgresso from '../components/FormPasso';

function FormPage() {
  return (
    <div className="bg-gray-400 h-screen w-screen flex flex-col">
      <Menu />
      <FormProgresso />
    </div>
  );
}

export default FormPage;
