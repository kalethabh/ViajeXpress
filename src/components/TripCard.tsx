import React, { useState } from 'react';
import { Clock, Star, MapPin } from 'lucide-react';

interface TripCardProps {
  imageUrl: string;
  title: string;
  rating: number;
  timeLeft: string;
  location: string;
}

export default function TripCard({ imageUrl, title, rating, timeLeft, location }: TripCardProps) {
  const [isReserved, setIsReserved] = useState(false);

  const handleReservation = () => {
    setIsReserved(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="relative h-48">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 text-white">
              <Star className="h-4 w-4 fill-current" />
              <span className="text-sm">{rating.toFixed(1)}</span>
            </div>
            <div className="flex items-center text-white text-sm">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{location}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-blue-600">
            <Clock className="h-4 w-4 mr-1" />
            <span>Revela en {timeLeft}</span>
          </div>
          <button 
            onClick={handleReservation}
            className={`px-4 py-2 rounded-lg font-medium ${isReserved ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-blue-600 text-white'}`} 
            disabled={isReserved}
          >
            {isReserved ? 'Reservado' : 'Reservar'}
          </button>
        </div>
      </div>
    </div>
  );
}
