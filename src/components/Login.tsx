import React, { useState } from 'react';
import { Plane } from 'lucide-react';

const Login = ({ onLogin, onGoToRegister }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username); // Llama a la función para indicar que el usuario ha iniciado sesión
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300">
      <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center">
          <Plane className="h-12 w-12 text-blue-600 mb-4" />
          <h1 className="text-4xl font-bold text-blue-600">ViajeXpress</h1>
        </div>
        <p className="mt-2 text-sm text-gray-600">Inicia sesión para comenzar tu aventura</p>
        <form onSubmit={handleLogin} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-5">
            <div className="">
              <label className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ingresa tu nombre de usuario"
                required
              />
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-700">Contraseña</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ingresa tu contraseña"
                required
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Iniciar Sesión
            </button>
          </div>
          <div className="text-center text-sm text-gray-500 mt-6">
            ¿No tienes una cuenta?{' '}
            <button
              className="text-blue-600 hover:underline"
              onClick={(e) => {
                e.preventDefault();
                onGoToRegister(); // Cambia a la vista de registro
              }}
            >
              Regístrate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
