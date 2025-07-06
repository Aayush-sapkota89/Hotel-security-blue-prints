import React, { useState } from 'react';
import { Camera, Key, Shield, AlertTriangle, Wifi, DoorOpen as Door } from 'lucide-react';

export const FloorPlan: React.FC = () => {
  const [selectedFloor, setSelectedFloor] = useState(1);

  const floors = [
    { id: 1, name: 'Ground Floor', rooms: 0, description: 'Lobby, Reception, Restaurant' },
    { id: 2, name: 'Floor 1', rooms: 12, description: 'Guest Rooms 101-112' },
    { id: 3, name: 'Floor 2', rooms: 12, description: 'Guest Rooms 201-212' },
    { id: 4, name: 'Floor 3', rooms: 12, description: 'Guest Rooms 301-312' },
    { id: 5, name: 'Floor 4', rooms: 8, description: 'Suites 401-408' }
  ];

  const securityFeatures = [
    { icon: Camera, label: 'Security Camera', color: 'text-blue-600' },
    { icon: Key, label: 'Access Control', color: 'text-green-600' },
    { icon: Shield, label: 'Emergency Station', color: 'text-red-600' },
    { icon: AlertTriangle, label: 'Fire Alarm', color: 'text-orange-600' },
    { icon: Wifi, label: 'Network Access Point', color: 'text-purple-600' },
    { icon: Door, label: 'Emergency Exit', color: 'text-yellow-600' }
  ];

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Floor Plans</h1>
          <p className="text-gray-600">Interactive hotel security layout</p>
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">Select Floor:</label>
          <select
            value={selectedFloor}
            onChange={(e) => setSelectedFloor(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {floors.map((floor) => (
              <option key={floor.id} value={floor.id}>
                {floor.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Floor Legend */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Security Features</h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {securityFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon className={`h-5 w-5 ${feature.color}`} />
                    <span className="text-sm text-gray-700">{feature.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Floor Plan Visualization */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {floors.find(f => f.id === selectedFloor)?.name}
              </h3>
              <span className="text-sm text-gray-500">
                {floors.find(f => f.id === selectedFloor)?.description}
              </span>
            </div>
          </div>
          <div className="p-6">
            <div className="aspect-video bg-gray-50 rounded-lg border-2 border-dashed border-gray-200 relative overflow-hidden">
              {/* Floor Plan Grid */}
              <div className="absolute inset-0 p-4">
                {selectedFloor === 1 ? (
                  // Ground Floor Layout
                  <div className="h-full grid grid-cols-3 gap-4">
                    <div className="bg-blue-100 rounded-lg p-4 relative">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800">Lobby</h4>
                      </div>
                      <Camera className="absolute top-2 right-2 h-4 w-4 text-blue-600" />
                      <Key className="absolute bottom-2 right-2 h-4 w-4 text-green-600" />
                    </div>
                    <div className="bg-green-100 rounded-lg p-4 relative">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800">Reception</h4>
                      </div>
                      <Camera className="absolute top-2 left-2 h-4 w-4 text-blue-600" />
                      <Shield className="absolute top-2 right-2 h-4 w-4 text-red-600" />
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-4 relative">
                      <div className="text-center">
                        <h4 className="font-semibold text-gray-800">Restaurant</h4>
                      </div>
                      <AlertTriangle className="absolute top-2 right-2 h-4 w-4 text-orange-600" />
                      <Door className="absolute bottom-2 left-2 h-4 w-4 text-yellow-600" />
                    </div>
                  </div>
                ) : (
                  // Guest Floor Layout
                  <div className="h-full">
                    <div className="grid grid-cols-6 gap-2 h-full">
                      {Array.from({ length: 12 }, (_, i) => (
                        <div
                          key={i}
                          className="bg-blue-50 rounded border border-blue-200 p-2 relative"
                        >
                          <div className="text-center text-xs font-medium text-gray-700">
                            {selectedFloor}0{i + 1}
                          </div>
                          {i % 3 === 0 && (
                            <Camera className="absolute top-1 right-1 h-3 w-3 text-blue-600" />
                          )}
                          {i % 4 === 0 && (
                            <Key className="absolute bottom-1 right-1 h-3 w-3 text-green-600" />
                          )}
                          {i % 6 === 0 && (
                            <Shield className="absolute top-1 left-1 h-3 w-3 text-red-600" />
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 bg-gray-100 rounded p-2">
                      <div className="text-center text-sm font-medium text-gray-700">
                        Hallway - Main Corridor
                      </div>
                      <div className="flex justify-center space-x-4 mt-1">
                        <Camera className="h-4 w-4 text-blue-600" />
                        <Door className="h-4 w-4 text-yellow-600" />
                        <AlertTriangle className="h-4 w-4 text-orange-600" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Security Cameras</p>
              <p className="text-2xl font-bold text-blue-600">
                {selectedFloor === 1 ? '8' : '12'}
              </p>
            </div>
            <Camera className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Access Points</p>
              <p className="text-2xl font-bold text-green-600">
                {selectedFloor === 1 ? '4' : '6'}
              </p>
            </div>
            <Key className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Emergency Exits</p>
              <p className="text-2xl font-bold text-red-600">
                {selectedFloor === 1 ? '6' : '4'}
              </p>
            </div>
            <Door className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </div>
    </div>
  );
};