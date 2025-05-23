import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, Video, X } from 'lucide-react';

// Components
import Button from '../components/ui/Button';
import PageTitle from '../components/ui/PageTitle';

// Types
import { Doctor } from '../types';

// Mock data
import { doctors } from '../data/mockData';

const VideoConsultation: React.FC = () => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');

  const availableDates = ['2025-06-01', '2025-06-02', '2025-06-03', '2025-06-04', '2025-06-05'];
  const availableTimes = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00'];

  const handleBookAppointment = () => {
    alert(`Appointment booked with Dr. ${selectedDoctor?.name} on ${selectedDate} at ${selectedTime}`);
    // In a real app, this would send the booking to an API
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      <PageTitle 
        title="Video Consultation" 
        description="Book a doctor's appointment online and get a video consultation from home."
        icon={<Video className="text-blue-600" size={28} />}
      />

      <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Select a Doctor</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {doctors.map(doctor => (
              <motion.div
                key={doctor.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`border rounded-lg p-4 cursor-pointer transition-all ${
                  selectedDoctor?.id === doctor.id 
                    ? 'border-blue-500 bg-blue-50' 
                    : 'border-gray-200 hover:border-blue-200'
                }`}
                onClick={() => setSelectedDoctor(doctor)}
              >
                <div className="flex items-center">
                  <img 
                    src={doctor.avatar} 
                    alt={doctor.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">Dr. {doctor.name}</h3>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-500 text-sm mr-1">★</span>
                      <span className="text-sm text-gray-700">{doctor.rating}</span>
                      <span className="text-sm text-gray-400 ml-1">({doctor.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {selectedDoctor && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-gray-100 p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-800">Schedule Appointment</h2>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="text-gray-400 hover:text-gray-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar size={16} className="inline mr-2" />
                Select Date
              </label>
              <div className="flex flex-wrap gap-2">
                {availableDates.map(date => (
                  <button
                    key={date}
                    className={`px-4 py-2 rounded-md text-sm ${
                      selectedDate === date
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedDate(date)}
                  >
                    {new Date(date).toLocaleDateString('en-US', { 
                      weekday: 'short', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock size={16} className="inline mr-2" />
                Select Time
              </label>
              <div className="flex flex-wrap gap-2">
                {availableTimes.map(time => (
                  <button
                    key={time}
                    className={`px-4 py-2 rounded-md text-sm ${
                      selectedTime === time
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>

            <Button 
              onClick={handleBookAppointment}
              disabled={!selectedDate || !selectedTime}
              className="w-full"
            >
              Book Consultation
            </Button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default VideoConsultation;