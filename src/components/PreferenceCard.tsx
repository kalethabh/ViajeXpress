import React, { useState } from 'react';
import { Calendar, DollarSign, MapPin, Tag } from 'lucide-react';

interface PreferenceProps {
  icon: React.ElementType;
  label: string;
  value: string;
  options: string[];
  onChange: (newValue: string) => void;
}

function PreferenceItem({ icon: Icon, label, value, options, onChange }: PreferenceProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  return (
    <div className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm">
      <div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center">
        <Icon className="h-5 w-5 text-blue-600" />
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        {label === 'Cuándo' && isCalendarVisible ? (
          <input
            type="date"
            value={value}
            onChange={(e) => {
              onChange(e.target.value);
              setIsCalendarVisible(false);
            }}
            onBlur={() => setIsCalendarVisible(false)}
            className="font-medium text-gray-900 border border-gray-300 rounded-lg p-1 w-full"
          />
        ) : isEditing ? (
          <select $1 className="font-medium text-gray-900 border border-gray-300 rounded-lg p-1 w-full"
          >
            {options.map((option, index) => (
              <option key={index} value={option}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <p
            className="font-medium text-gray-900 cursor-pointer"
            onClick={() => {
              if (label === 'Cuándo') {
                setIsCalendarVisible(true);
              } else {
                setIsEditing(true);
              }
            }}
          >
            {value}
          </p>
        )}
      </div>
    </div>
  );
}

export default function PreferenceCard() {
  const [preferences, setPreferences] = useState([
    { icon: Calendar, label: 'Cuándo', value: 'Este Mes', options: ['Este Mes', 'Próximo Mes', 'Este Año'] },
    { icon: DollarSign, label: 'Presupuesto', value: 'COP 1M - 2M', options: ['COP 500K - 1M', 'COP 1M - 2M', 'COP 2M+'] },
    { icon: MapPin, label: 'Desde', value: 'Bogotá, CO', options: ['Bogotá, CO', 'Medellín, CO', 'Cali, CO', 'Barranquilla, CO', 'Cartagena, CO', 'Bucaramanga, CO', 'Pereira, CO', 'Santa Marta, CO', 'Manizales, CO', 'Ibagué, CO'] },
    { icon: Tag, label: 'Estilo', value: 'Aventura', options: ['Aventura', 'Relajación', 'Cultural', 'Lujo', 'Ecoturismo', 'Deportivo', 'Familiar', 'Gastronómico', 'Romántico'] },
  ]);

  const handlePreferenceChange = (index: number, newValue: string) => {
    setPreferences((prev) => {
      const updated = [...prev];
      updated[index].value = newValue;
      return updated;
    });
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {preferences.map((pref, index) => (
        <PreferenceItem
          key={index}
          icon={pref.icon}
          label={pref.label}
          value={pref.value}
          options={pref.options}
          onChange={(newValue) => handlePreferenceChange(index, newValue)}
        />
      ))}
    </div>
  );
}
