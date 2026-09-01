import React, { useState, useEffect } from 'react';
import { Sun, Waves, Thermometer, Compass } from 'lucide-react';

export default function DapoliCoastalWidget() {
  const [weatherData, setWeatherData] = useState({
    temp: 28,
    condition: 'Sunny Shoreline',
    tide: 'Calm Sea Tide',
    siteVisit: 'Ideal for Site Visits',
  });

  // Optional: Fetch real live weather for Dapoli (Ratnagiri) from free Open-Meteo API
  useEffect(() => {
    async function fetchDapoliWeather() {
      try {
        // Dapoli coordinates: Latitude 17.757, Longitude 73.187
        const res = await fetch('https://api.open-meteo.com/v1/forecast?latitude=17.757&longitude=73.187&current_weather=true');
        const data = await res.json();
        if (data && data.current_weather) {
          const temp = Math.round(data.current_weather.temperature);
          setWeatherData(prev => ({
            ...prev,
            temp: temp || 28,
          }));
        }
      } catch (err) {
        console.log('Using default coastal weather data:', err);
      }
    }
    fetchDapoliWeather();
  }, []);

  return (
    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-white/90 backdrop-blur-md text-brand-slate border border-brand-cyan/30 shadow-lg transition-all hover:scale-105">
      <div className="flex items-center gap-1.5 text-amber-500 flex-shrink-0">
        <Sun className="w-3.5 h-3.5 animate-spin-slow" />
        <span className="text-brand-slate font-extrabold">{weatherData.temp}°C</span>
      </div>

      <span className="text-gray-300">•</span>

      <div className="flex items-center gap-1 text-brand-cyan flex-shrink-0">
        <Waves className="w-3.5 h-3.5 animate-pulse" />
        <span className="text-brand-slate">Dapoli Coast</span>
      </div>

      <span className="hidden sm:inline text-gray-300">•</span>

      <span className="hidden sm:inline text-emerald-600 font-extrabold">
        {weatherData.siteVisit}
      </span>
    </div>
  );
}
