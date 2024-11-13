import React, { useState } from 'react';
import { User, Edit2, Camera, X } from 'lucide-react';

const UserProfile = ({ username, email, onEditProfile, onCloseProfile }) => {
  const [description, setDescription] = useState('Esta es una breve descripción sobre mí.');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300 relative">
      <button
        onClick={onCloseProfile}
        className="absolute top-4 right-4 p-2 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-300 ease-in-out"
      >
        <X className="h-5 w-5 text-gray-700" />
      </button>
      <div className="w-full max-w-md p-10 space-y-8 bg-white rounded-2xl shadow-2xl">
        <div className="flex flex-col items-center">
          {profilePicture ? (
            <img
              src={profilePicture}
              alt="Foto de perfil"
              className="h-24 w-24 rounded-full object-cover mb-4"
            />
          ) : (
            <div className="h-24 w-24 rounded-full bg-blue-200 flex items-center justify-center mb-4">
              <User className="h-12 w-12 text-blue-600" />
            </div>
          )}
          <label className="cursor-pointer mt-2 text-blue-600 hover:underline">
            <Camera className="h-5 w-5 inline mr-1" /> Cambiar foto de perfil
            <input
              type="file"
              accept="image/*"
              onChange={handleProfilePictureChange}
              className="hidden"
            />
          </label>
          <h1 className="text-4xl font-bold text-blue-600 mt-4">Perfil del Usuario</h1>
        </div>
        <div className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm space-y-5">
            <div className="">
              <label className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
              <input
                type="text"
                value={username}
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none cursor-not-allowed"
              />
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-700">Correo electrónico</label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none cursor-not-allowed"
              />
            </div>
            <div className="">
              <label className="block text-sm font-medium text-gray-700">Descripción</label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Agrega una breve descripción sobre ti"
              />
            </div>
          </div>
          <div>
            <button
              onClick={onEditProfile}
              className="w-full px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center justify-center"
            >
              <Edit2 className="h-5 w-5 mr-2" /> Editar Perfil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
