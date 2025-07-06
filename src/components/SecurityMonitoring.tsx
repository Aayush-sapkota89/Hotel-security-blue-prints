import React, { useState } from 'react';
import { Camera, Play, Pause, RotateCcw, Maximize, Volume2 } from 'lucide-react';

export const SecurityMonitoring: React.FC = () => {
  const [selectedCamera, setSelectedCamera] = useState(1);

  const cameras = [
    { id: 1, name: 'Lobby Main', location: 'Ground Floor', status: 'active', alerts: 0 },
    { id: 2, name: 'Reception Desk', location: 'Ground Floor', status: 'active', alerts: 0 },
    { id: 3, name: 'Main Entrance', location: 'Ground Floor', status: 'active', alerts: 1 },
    { id: 4, name: 'Parking Lot', location: 'Exterior', status: 'active', alerts: 0 },
    { id: 5, name: 'Corridor 1F', location: 'Floor 1', status: 'active', alerts: 0 },
    { id: 6, name: 'Corridor 2F', location: 'Floor 2', status: 'active', alerts: 0 },
    { id: 7, name: 'Corridor 3F', location: 'Floor 3', status: 'active', alerts: 0 },
    { id: 8, name: 'Emergency Exit', location: 'Floor 1', status: 'active', alerts: 0 },
    { id: 9, name: 'Kitchen', location: 'Ground Floor', status: 'maintenance', alerts: 0 },
    { id: 10, name: 'Back Entrance', location: 'Ground Floor', status: 'active', alerts: 0 },
    { id: 11, name: 'Elevator 1', location: 'All Floors', status: 'active', alerts: 0 },
    { id: 12, name: 'Elevator 2', location: 'All Floors', status: 'active', alerts: 0 }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50';
      case 'maintenance':
        return 'text-yellow-600 bg-yellow-50';
      case 'offline':
        return 'text-red-600 bg-red-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Security Monitoring</h1>
          <p className="text-gray-600">Live camera feeds and surveillance</p>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">
            {cameras.filter(c => c.status === 'active').length} of {cameras.length} cameras active
          </span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Camera List */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Camera Network</h3>
          </div>
          <div className="max-h-96 overflow-y-auto">
            {cameras.map((camera) => (
              <div
                key={camera.id}
                onClick={() => setSelectedCamera(camera.id)}
                className={`p-4 border-b border-gray-100 cursor-pointer transition-colors hover:bg-gray-50 ${
                  selectedCamera === camera.id ? 'bg-blue-50 border-blue-200' : ''
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <Camera className="h-5 w-5 text-gray-600" />
                    <div>
                      <p className="font-medium text-gray-900">{camera.name}</p>
                      <p className="text-sm text-gray-500">{camera.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(camera.status)}`}>
                      {camera.status}
                    </span>
                    {camera.alerts > 0 && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                        {camera.alerts}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Camera Feed */}
        <div className="lg:col-span-3 bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900">
                {cameras.find(c => c.id === selectedCamera)?.name}
              </h3>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">
                  {cameras.find(c => c.id === selectedCamera)?.location}
                </span>
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(cameras.find(c => c.id === selectedCamera)?.status || 'offline')}`}>
                  {cameras.find(c => c.id === selectedCamera)?.status}
                </span>
              </div>
            </div>
          </div>
          <div className="p-6">
            <div className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden">
              {/* Mock Video Feed */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                  <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
                  <p className="text-lg font-medium">Live Feed</p>
                  <p className="text-sm opacity-75">Camera {selectedCamera}</p>
                </div>
              </div>
              
              {/* Video Controls */}
              <div className="absolute bottom-4 left-4 right-4 bg-black bg-opacity-50 rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <button className="text-white hover:text-blue-400 transition-colors">
                      <Play className="h-5 w-5" />
                    </button>
                    <button className="text-white hover:text-blue-400 transition-colors">
                      <Pause className="h-5 w-5" />
                    </button>
                    <button className="text-white hover:text-blue-400 transition-colors">
                      <RotateCcw className="h-5 w-5" />
                    </button>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="text-white hover:text-blue-400 transition-colors">
                      <Volume2 className="h-5 w-5" />
                    </button>
                    <button className="text-white hover:text-blue-400 transition-colors">
                      <Maximize className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Recording Indicator */}
              <div className="absolute top-4 right-4 flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white text-sm">REC</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Camera Grid View */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="p-6 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Multi-Camera View</h3>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {cameras.slice(0, 8).map((camera) => (
              <div
                key={camera.id}
                className="aspect-video bg-gray-900 rounded-lg relative overflow-hidden cursor-pointer hover:ring-2 hover:ring-blue-500 transition-all"
                onClick={() => setSelectedCamera(camera.id)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <Camera className="h-8 w-8 text-white opacity-50" />
                </div>
                <div className="absolute bottom-2 left-2 right-2 bg-black bg-opacity-50 rounded px-2 py-1">
                  <p className="text-white text-xs font-medium truncate">{camera.name}</p>
                </div>
                <div className="absolute top-2 right-2">
                  <div className={`w-2 h-2 rounded-full ${camera.status === 'active' ? 'bg-green-500' : 'bg-red-500'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};