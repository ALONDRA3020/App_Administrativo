
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { FaUser, FaIdBadge, FaGraduationCap, FaTransgender, FaUserTag } from 'react-icons/fa';

const App = () => {
  const [personas, setPersonas] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/personas')
      .then(res => res.json())
      .then(data => setPersonas(data));
  }, []);

  const persona = personas[0] || {};

  return (
    <div className="min-h-screen bg-green-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl shadow-xl w-80 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-500 text-white flex items-center justify-center text-xl font-bold shadow">
          {persona.nombre?.[0] || ''}.{persona.apellidos?.[0] || ''}
        </div>
        <div className="text-left space-y-2 text-sm">
          <div className="flex items-center gap-2"><FaUser /> <strong>Nombre:</strong> {persona.nombre}</div>
          <div className="flex items-center gap-2"><FaUserTag /> <strong>Apellidos:</strong> {persona.apellidos}</div>
          <div className="flex items-center gap-2"><FaIdBadge /> <strong>Puesto:</strong> {persona.matricula}</div>
          <div className="flex items-center gap-2"><FaGraduationCap /> <strong>Carrera:</strong> {persona.carrera}</div>
          <div className="flex items-center gap-2"><FaTransgender /> <strong>Género:</strong> {persona.genero}</div>
        </div>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
