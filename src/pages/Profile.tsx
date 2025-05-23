import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, FileText, Settings, LogOut } from 'lucide-react';

// Components
import PageTitle from '../components/ui/PageTitle';
import Button from '../components/ui/Button';

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  const userProfile = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    phone: '+1 (555) 123-4567',
    birthdate: '1990-05-15',
    gender: 'Male',
    bloodType: 'O+',
    allergies: ['Penicillin', 'Peanuts'],
    medications: ['Lisinopril 10mg', 'Vitamin D 1000IU'],
    appointmentHistory: [
      { id: 1, date: '2025-05-25', doctor: 'Dr. Sarah Williams', type: 'Video Consultation', status: 'Completed' },
      { id: 2, date: '2025-05-10', doctor: 'Dr. Michael Chen', type: 'Video Consultation', status: 'Completed' },
      { id: 3, date: '2025-06-05', doctor: 'Dr. Emily Parker', type: 'Video Consultation', status: 'Upcoming' },
    ]
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="max-w-4xl mx-auto"
    >
      <PageTitle 
        title="My Profile" 
        description="Manage your personal information and health records"
        icon={<User className="text-gray-600" size={28} />}
      />

      <div className="mt-8 bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 sm:p-8 border-b border-gray-100">
          <div className="flex flex-col sm:flex-row items-center">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-4 sm:mb-0 sm:mr-6">
              {userProfile.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl font-bold text-gray-800">{userProfile.name}</h2>
              <p className="text-gray-500">{userProfile.email}</p>
              <p className="text-gray-500">{userProfile.phone}</p>
            </div>
          </div>
        </div>

        <div className="flex border-b border-gray-100">
          <button
            onClick={() => setActiveTab('profile')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'profile' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <User size={16} className="inline mr-1" />
            Profile
          </button>
          <button
            onClick={() => setActiveTab('appointments')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'appointments' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Calendar size={16} className="inline mr-1" />
            Appointments
          </button>
          <button
            onClick={() => setActiveTab('records')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'records' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <FileText size={16} className="inline mr-1" />
            Records
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`flex-1 py-3 text-sm font-medium ${
              activeTab === 'settings' 
                ? 'text-blue-600 border-b-2 border-blue-600' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <Settings size={16} className="inline mr-1" />
            Settings
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'profile' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ProfileField label="Full Name" value={userProfile.name} />
                <ProfileField label="Email" value={userProfile.email} />
                <ProfileField label="Phone" value={userProfile.phone} />
                <ProfileField label="Date of Birth" value={new Date(userProfile.birthdate).toLocaleDateString()} />
                <ProfileField label="Gender" value={userProfile.gender} />
                <ProfileField label="Blood Type" value={userProfile.bloodType} />
              </div>
              
              <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">Medical Information</h3>
              
              <div className="grid grid-cols-1 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Allergies</label>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.allergies.map((allergy, index) => (
                      <span key={index} className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                        {allergy}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-1">Current Medications</label>
                  <div className="flex flex-wrap gap-2">
                    {userProfile.medications.map((medication, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                        {medication}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button>Edit Profile</Button>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'appointments' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">Upcoming Appointments</h3>
              
              <div className="space-y-4">
                {userProfile.appointmentHistory
                  .filter(appointment => appointment.status === 'Upcoming')
                  .map(appointment => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{appointment.doctor}</p>
                          <p className="text-gray-500 text-sm">{appointment.type}</p>
                        </div>
                        <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          {appointment.status}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        {new Date(appointment.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="mt-4 flex space-x-2">
                        <Button size="small">Join Video</Button>
                        <Button size="small" variant="outline">Reschedule</Button>
                      </div>
                    </div>
                  ))}
              </div>
              
              <h3 className="text-lg font-medium text-gray-800 mt-8 mb-4">Past Appointments</h3>
              
              <div className="space-y-4">
                {userProfile.appointmentHistory
                  .filter(appointment => appointment.status === 'Completed')
                  .map(appointment => (
                    <div key={appointment.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-medium">{appointment.doctor}</p>
                          <p className="text-gray-500 text-sm">{appointment.type}</p>
                        </div>
                        <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs">
                          {appointment.status}
                        </span>
                      </div>
                      <div className="mt-3 flex items-center text-sm text-gray-500">
                        <Calendar size={16} className="mr-1" />
                        {new Date(appointment.date).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="mt-4">
                        <Button size="small" variant="outline">View Summary</Button>
                      </div>
                    </div>
                  ))}
              </div>
            </motion.div>
          )}
          
          {activeTab === 'records' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">Medical Records</h3>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText size={20} className="text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">General Check-up Report</p>
                      <p className="text-gray-500 text-sm">May 25, 2025 • Dr. Sarah Williams</p>
                    </div>
                  </div>
                  <Button size="small" variant="outline">View</Button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText size={20} className="text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Blood Test Results</p>
                      <p className="text-gray-500 text-sm">May 10, 2025 • Dr. Michael Chen</p>
                    </div>
                  </div>
                  <Button size="small" variant="outline">View</Button>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText size={20} className="text-blue-600 mr-3" />
                    <div>
                      <p className="font-medium">Vaccination Record</p>
                      <p className="text-gray-500 text-sm">April 15, 2025 • Dr. Emily Parker</p>
                    </div>
                  </div>
                  <Button size="small" variant="outline">View</Button>
                </div>
              </div>
              
              <div className="mt-8">
                <Button>
                  <FileText size={16} className="mr-2" />
                  Upload New Record
                </Button>
              </div>
            </motion.div>
          )}
          
          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <h3 className="text-lg font-medium text-gray-800 mb-4">Account Settings</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Change Password</h4>
                  <div className="space-y-3">
                    <input 
                      type="password" 
                      placeholder="Current Password" 
                      className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    />
                    <input 
                      type="password" 
                      placeholder="New Password" 
                      className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    />
                    <input 
                      type="password" 
                      placeholder="Confirm New Password" 
                      className="w-full rounded-lg border border-gray-300 px-4 py-2"
                    />
                  </div>
                  <div className="mt-3">
                    <Button size="small">Update Password</Button>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Notification Preferences</h4>
                  <div className="space-y-3">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Email notifications for appointment reminders
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      SMS notifications for appointment reminders
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" defaultChecked />
                      Email notifications for health tips and updates
                    </label>
                  </div>
                  <div className="mt-3">
                    <Button size="small">Save Preferences</Button>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-gray-200">
                  <Button variant="outline" color="red">
                    <LogOut size={16} className="mr-2" />
                    Sign Out
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProfileField: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-500 mb-1">{label}</label>
      <p className="text-gray-900">{value}</p>
    </div>
  );
};

export default Profile;