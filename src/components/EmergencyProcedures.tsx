import React, { useState } from 'react';
import { Shield, AlertTriangle, Phone, MapPin, Users, Clock, FileText } from 'lucide-react';

export const EmergencyProcedures: React.FC = () => {
  const [selectedProcedure, setSelectedProcedure] = useState('fire');

  const procedures = [
    {
      id: 'fire',
      name: 'Fire Emergency',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      steps: [
        'Immediately activate the fire alarm system',
        'Call 911 and report the fire emergency',
        'Evacuate all guests and staff using nearest emergency exits',
        'Check all rooms on assigned floors (if safe to do so)',
        'Meet at designated assembly point in parking lot',
        'Provide headcount to emergency responders',
        'Do not re-enter building until cleared by fire department'
      ],
      contacts: [
        { name: 'Fire Department', number: '911' },
        { name: 'Hotel Manager', number: '555-0101' },
        { name: 'Security Chief', number: '555-0102' }
      ]
    },
    {
      id: 'medical',
      name: 'Medical Emergency',
      icon: Phone,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      steps: [
        'Call 911 immediately for medical emergency',
        'Provide first aid if trained and safe to do so',
        'Clear the area of unnecessary personnel',
        'Guide emergency responders to the location',
        'Document the incident details',
        'Notify hotel management and guest\'s emergency contact',
        'Follow up with incident report'
      ],
      contacts: [
        { name: 'Emergency Services', number: '911' },
        { name: 'Hotel Nurse', number: '555-0103' },
        { name: 'Front Desk Manager', number: '555-0104' }
      ]
    },
    {
      id: 'security',
      name: 'Security Threat',
      icon: Shield,
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      steps: [
        'Assess the situation and ensure personal safety',
        'Call 911 if immediate danger is present',
        'Alert hotel security and management',
        'Implement lockdown procedures if necessary',
        'Evacuate affected areas if required',
        'Cooperate with law enforcement',
        'Document all details of the incident'
      ],
      contacts: [
        { name: 'Police', number: '911' },
        { name: 'Security Chief', number: '555-0102' },
        { name: 'Hotel Manager', number: '555-0101' }
      ]
    },
    {
      id: 'evacuation',
      name: 'Evacuation Procedures',
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      steps: [
        'Announce evacuation over PA system',
        'Activate emergency lighting systems',
        'Direct guests to nearest emergency exits',
        'Ensure all wheelchair accessible routes are clear',
        'Conduct room-by-room sweep (if time permits)',
        'Assist guests with mobility issues',
        'Account for all guests and staff at assembly point'
      ],
      contacts: [
        { name: 'Emergency Services', number: '911' },
        { name: 'Front Desk', number: '555-0105' },
        { name: 'Housekeeping Supervisor', number: '555-0106' }
      ]
    }
  ];

  const emergencyContacts = [
    { name: 'Fire Department', number: '911', type: 'emergency' },
    { name: 'Police', number: '911', type: 'emergency' },
    { name: 'Ambulance', number: '911', type: 'emergency' },
    { name: 'Hotel Manager', number: '555-0101', type: 'management' },
    { name: 'Security Chief', number: '555-0102', type: 'security' },
    { name: 'Maintenance Chief', number: '555-0107', type: 'maintenance' },
    { name: 'Poison Control', number: '1-800-222-1222', type: 'medical' }
  ];

  const currentProcedure = procedures.find(p => p.id === selectedProcedure);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Emergency Procedures</h1>
          <p className="text-gray-600">Quick reference guide for emergency situations</p>
        </div>
        <div className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg">
          <AlertTriangle className="h-5 w-5" />
          <span className="font-medium">Emergency: Call 911</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Procedure Selection */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Emergency Types</h3>
          </div>
          <div className="p-6">
            <div className="space-y-2">
              {procedures.map((procedure) => {
                const Icon = procedure.icon;
                return (
                  <button
                    key={procedure.id}
                    onClick={() => setSelectedProcedure(procedure.id)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                      selectedProcedure === procedure.id
                        ? `${procedure.bgColor} border border-gray-300`
                        : 'hover:bg-gray-50'
                    }`}
                  >
                    <Icon className={`h-5 w-5 ${procedure.color}`} />
                    <span className="font-medium text-gray-900">{procedure.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Procedure Details */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center space-x-3">
              {currentProcedure && (
                <>
                  <currentProcedure.icon className={`h-6 w-6 ${currentProcedure.color}`} />
                  <h3 className="text-lg font-semibold text-gray-900">{currentProcedure.name}</h3>
                </>
              )}
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <h4 className="font-medium text-gray-900">Step-by-Step Procedures:</h4>
              <ol className="space-y-3">
                {currentProcedure?.steps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Emergency Contacts</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {currentProcedure?.contacts.map((contact, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-gray-600" />
                    <span className="font-medium text-gray-900">{contact.name}</span>
                  </div>
                  <a
                    href={`tel:${contact.number}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    {contact.number}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Equipment & Locations */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Emergency Equipment Locations</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 p-4 bg-red-50 rounded-lg">
              <AlertTriangle className="h-6 w-6 text-red-600" />
              <div>
                <p className="font-medium text-gray-900">Fire Extinguishers</p>
                <p className="text-sm text-gray-600">Each floor, near elevators</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
              <Phone className="h-6 w-6 text-blue-600" />
              <div>
                <p className="font-medium text-gray-900">Emergency Phones</p>
                <p className="text-sm text-gray-600">Lobby, each floor corridor</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
              <MapPin className="h-6 w-6 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">Emergency Exits</p>
                <p className="text-sm text-gray-600">End of each corridor</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-yellow-50 rounded-lg">
              <FileText className="h-6 w-6 text-yellow-600" />
              <div>
                <p className="font-medium text-gray-900">First Aid Kits</p>
                <p className="text-sm text-gray-600">Front desk, housekeeping</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
              <Shield className="h-6 w-6 text-purple-600" />
              <div>
                <p className="font-medium text-gray-900">AED Devices</p>
                <p className="text-sm text-gray-600">Lobby, fitness center</p>
              </div>
            </div>
            <div className="flex items-center space-x-3 p-4 bg-indigo-50 rounded-lg">
              <Users className="h-6 w-6 text-indigo-600" />
              <div>
                <p className="font-medium text-gray-900">Assembly Point</p>
                <p className="text-sm text-gray-600">Main parking lot</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complete Emergency Contact List */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Complete Emergency Contact List</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-gray-600" />
                  <div>
                    <p className="font-medium text-gray-900">{contact.name}</p>
                    <p className="text-sm text-gray-500 capitalize">{contact.type}</p>
                  </div>
                </div>
                <a
                  href={`tel:${contact.number}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {contact.number}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};