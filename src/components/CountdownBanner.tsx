import { useState, useEffect } from 'react';

interface CountdownProps {
  targetDate: Date;
}

const CountdownBanner: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="w-full bg-gradient-to-r from-black to-gray-900 text-white p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Vive la aventura del Hot Sale!</h2>
      <div className="flex justify-center space-x-4">
        <div className="text-center">
          <div className="text-4xl font-bold">{timeLeft.days}</div>
          <div className="text-sm">Días</div>
        </div>
        <div className="text-4xl font-bold">:</div>
        <div className="text-center">
          <div className="text-4xl font-bold">{timeLeft.hours}</div>
          <div className="text-sm">Horas</div>
        </div>
        <div className="text-4xl font-bold">:</div>
        <div className="text-center">
          <div className="text-4xl font-bold">{timeLeft.minutes}</div>
          <div className="text-sm">Minutos</div>
        </div>
        <div className="text-4xl font-bold">:</div>
        <div className="text-center">
          <div className="text-4xl font-bold">{timeLeft.seconds}</div>
          <div className="text-sm">Segundos</div>
        </div>
      </div>
    </div>
  );
};

export default CountdownBanner; 