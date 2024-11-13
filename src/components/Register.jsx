import React from 'react';

const Navbar = ({ setCurrentView }) => {
  const handleLogout = () => {
    // Aquí deberías limpiar cualquier información del usuario, por ejemplo:
    localStorage.removeItem('userToken');
    // Luego, redirige a la vista de inicio de sesión
    setCurrentView('login');
  };

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li onClick={() => setCurrentView('explore')}>Explorar</li>
        <li onClick={() => setCurrentView('trips')}>Viajes</li>
        <li onClick={() => setCurrentView('rewards')}>Recompensas</li>
        <li onClick={() => setCurrentView('profile')}>Perfil</li>
        <li
          onClick={(e) => {
            e.preventDefault();
            handleLogout();
          }}
          className="logout-nav-item"
        >
          Cerrar Sesión
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
