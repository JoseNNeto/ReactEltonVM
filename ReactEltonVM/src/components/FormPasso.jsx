import React, { useState } from 'react';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
import Form4 from './Form4';
import FormProgresso from './FormProgresso';

function FormPasso() {
  const [step, setStep] = useState(1);
  const [student, setStudent] = useState({
    enrollment: '',
    name: '',
    birthday: '',
    email: '',
    cellphone: '',
    university: '',
    campus: '',
    course: '',
    currentPeriod: '',
  });

  const chooseForm = () => {
    switch (step) {
      case 1:
        return <Form1 change={setStep} student={student} updateStudent={setStudent} />;
      case 2:
        return <Form2 change={setStep} student={student} updateStudent={setStudent} />;
      case 3:
        return <Form3 change={setStep} student={student} updateStudent={setStudent} />;
      case 4:
        return <Form4 change={setStep} student={student} updateStudent={setStudent} />;
      default:
        return null;
    }
  };

  return (
    <div className="grow flex flex-col items-center p-8">
      <FormProgresso step={step} />
      {chooseForm()}
    </div>
  );
}

export default FormPasso;
