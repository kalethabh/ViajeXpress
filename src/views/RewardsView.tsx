import React, { useState } from 'react';
import { Gift, Ticket, Compass, Trophy } from 'lucide-react';

interface RewardCardProps {
  icon: React.ElementType;
  title: string;
  points: number;
  description: string;
  isRedeemed: boolean;
  onRedeem: () => void;
}

function RewardCard({ icon: Icon, title, points, description, isRedeemed, onRedeem }: RewardCardProps) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm">
      <div className="flex items-start space-x-4">
        <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <span className="text-sm font-medium text-blue-600">{points} pts</span>
          </div>
          <p className="mt-1 text-sm text-gray-500">{description}</p>
          <button
            onClick={onRedeem}
            className={`mt-3 w-full py-2 ${
              isRedeemed ? 'bg-gray-400' : 'bg-blue-600'
            } text-white rounded-lg text-sm font-medium`}
            disabled={isRedeemed}
          >
            {isRedeemed ? 'Canjeado' : 'Canjear'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function RewardsView() {
  const [totalPoints, setTotalPoints] = useState(15750);
  const [rewards, setRewards] = useState([
    {
      icon: Gift,
      title: 'Descuento del 20%',
      points: 5000,
      description: 'Válido para tu próximo viaje sorpresa a cualquier destino.',
      isRedeemed: false,
    },
    {
      icon: Ticket,
      title: 'Upgrade de Hotel',
      points: 8000,
      description: 'Mejora tu habitación a una suite en tu próxima reserva.',
      isRedeemed: false,
    },
    {
      icon: Compass,
      title: 'Tour Privado',
      points: 12000,
      description: 'Tour guiado exclusivo en tu próximo destino.',
      isRedeemed: false,
    },
    {
      icon: Trophy,
      title: 'Viaje Premium',
      points: 25000,
      description: 'Viaje todo incluido a cualquier destino de Colombia.',
      isRedeemed: false,
    },
  ]);

  const handleRedeem = (index: number) => {
    setRewards((prevRewards) => {
      const updatedRewards = [...prevRewards];
      updatedRewards[index].isRedeemed = true;
      return updatedRewards;
    });

    setTotalPoints((prevPoints) => prevPoints + rewards[index].points);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Tus Premios</h1>
        <div className="mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-xl text-white">
          <p className="text-sm opacity-90">Puntos disponibles</p>
          <p className="text-3xl font-bold">{totalPoints}</p>
        </div>
      </div>

      <div className="space-y-4">
        {rewards.map((reward, index) => (
          <RewardCard
            key={index}
            {...reward}
            onRedeem={() => handleRedeem(index)}
          />
        ))}
      </div>
    </div>
  );
}
