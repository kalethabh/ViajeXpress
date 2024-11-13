import React, { useState } from 'react';
import { Bell, User, Plane, LogOut } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar({ onProfileClick }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const navigate = useNavigate();
  const notifications = [
    { id: 1, message: 'Tu viaje a Cartagena está confirmado.' },
    { id: 2, message: 'Nueva recompensa disponible en tu cuenta.' }
  ];

  const handleLogout = () => {
    // Aquí puedes agregar lógica adicional, como eliminar tokens de sesión
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="px-4 h-14 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link to="/explore">
            <Plane className="h-6 w-6 text-blue-600" />
          </Link>
          <Link to="/explore">
            <h1 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 text-transparent bg-clip-text">
              ViajeXpress
            </h1>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            className="relative"
            onClick={() => setShowNotifications((prev) => !prev)}
          >
            <Bell className="h-6 w-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              {notifications.length}
            </span>
          </button>
          {showNotifications && (
            <div className="absolute top-14 right-4 w-64 bg-white shadow-lg rounded-lg p-4 z-50">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div key={notification.id} className="p-2 border-b border-gray-200">
                    {notification.message}
                  </div>
                ))
              ) : (
                <div className="text-gray-500 text-sm">No hay notificaciones</div>
              )}
            </div>
          )}
          <button
            onClick={onProfileClick}
            className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center"
          >
            <User className="h-5 w-5 text-white" />
          </button>
          <button
            onClick={handleLogout}
            className="h-6 w-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}
 