import React, { useState } from 'react';
import { Key, User, Clock, Shield, CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

export const AccessControl: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState('logs');

  const accessLogs = [
    { id: 1, user: 'Guest - Room 304', location: 'Room 304', time: '14:32:15', status: 'granted', method: 'keycard' },
    { id: 2, user: 'Housekeeping - Maria S.', location: 'Room 302', time: '14:28:42', status: 'granted', method: 'master' },
    { id: 3, user: 'Guest - Room 207', location: 'Room 207', time: '14:25:18', status: 'granted', method: 'keycard' },
    { id: 4, user: 'Unknown Card', location: 'Room 156', time: '14:22:33', status: 'denied', method: 'keycard' },
    { id: 5, user: 'Maintenance - John D.', location: 'Utility Room', time: '14:18:09', status: 'granted', method: 'pin' },
    { id: 6, user: 'Guest - Room 401', location: 'Room 401', time: '14:15:22', status: 'granted', method: 'keycard' },
    { id: 7, user: 'Security - Admin', location: 'Security Office', time: '14:12:45', status: 'granted', method: 'biometric' },
    { id: 8, user: 'Guest - Room 203', location: 'Room 203', time: '14:08:17', status: 'granted', method: 'keycard' }
  ];

  const activeKeycards = [
    { id: 1, room: '304', guest: 'John Smith', issued: '2024-01-15', expires: '2024-01-17', status: 'active' },
    { id: 2, room: '207', guest: 'Sarah Johnson', issued: '2024-01-14', expires: '2024-01-16', status: 'active' },
    { id: 3, room: '401', guest: 'Michael Brown', issued: '2024-01-15', expires: '2024-01-18', status: 'active' },
    { id: 4, room: '156', guest: 'Emma Davis', issued: '2024-01-13', expires: '2024-01-15', status: 'expired' },
    { id: 5, room: '302', guest: 'David Wilson', issued: '2024-01-15', expires: '2024-01-17', status: 'active' },
    { id: 6, room: '203', guest: 'Lisa Anderson', issued: '2024-01-14', expires: '2024-01-16', status: 'active' }
  ];

  const accessPoints = [
    { id: 1, name: 'Main Entrance', type: 'entrance', status: 'secure', lastAccess: '14:32' },
    { id: 2, name: 'Back Entrance', type: 'entrance', status: 'secure', lastAccess: '12:15' },
    { id: 3, name: 'Parking Garage', type: 'garage', status: 'secure', lastAccess: '13:45' },
    { id: 4, name: 'Emergency Exit 1', type: 'emergency', status: 'secure', lastAccess: '09:30' },
    { id: 5, name: 'Emergency Exit 2', type: 'emergency', status: 'secure', lastAccess: '10:15' },
    { id: 6, name: 'Staff Entrance', type: 'staff', status: 'secure', lastAccess: '14:22' },
    { id: 7, name: 'Kitchen Access', type: 'service', status: 'secure', lastAccess: '13:58' },
    { id: 8, name: 'Utility Room', type: 'utility', status: 'secure', lastAccess: '14:18' }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'granted':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'denied':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'expired':
        return <AlertTriangle className="h-5 w-5 text-yellow-500" />;
      default:
        return <Shield className="h-5 w-5 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'text-green-600 bg-green-50';
      case 'expired':
        return 'text-red-600 bg-red-50';
      case 'secure':
        return 'text-blue-600 bg-blue-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Access Control</h1>
          <p className="text-gray-600">Manage hotel access and security</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-500">
            <span className="font-medium">18/18</span> access points secure
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Keycards</p>
              <p className="text-2xl font-bold text-blue-600">
                {activeKeycards.filter(k => k.status === 'active').length}
              </p>
            </div>
            <Key className="h-8 w-8 text-blue-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Access Points</p>
              <p className="text-2xl font-bold text-green-600">{accessPoints.length}</p>
            </div>
            <Shield className="h-8 w-8 text-green-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Today's Access</p>
              <p className="text-2xl font-bold text-indigo-600">247</p>
            </div>
            <User className="h-8 w-8 text-indigo-600" />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Failed Attempts</p>
              <p className="text-2xl font-bold text-red-600">3</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-600" />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            <button
              onClick={() => setSelectedTab('logs')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'logs'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Access Logs
            </button>
            <button
              onClick={() => setSelectedTab('keycards')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'keycards'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Active Keycards
            </button>
            <button
              onClick={() => setSelectedTab('points')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                selectedTab === 'points'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Access Points
            </button>
          </nav>
        </div>

        <div className="p-6">
          {selectedTab === 'logs' && (
            <div className="space-y-4">
              {accessLogs.map((log) => (
                <div key={log.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    {getStatusIcon(log.status)}
                    <div>
                      <p className="font-medium text-gray-900">{log.user}</p>
                      <p className="text-sm text-gray-500">{log.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{log.time}</p>
                    <p className="text-xs text-gray-500">{log.method}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'keycards' && (
            <div className="space-y-4">
              {activeKeycards.map((keycard) => (
                <div key={keycard.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <Key className="h-5 w-5 text-blue-600" />
                    <div>
                      <p className="font-medium text-gray-900">Room {keycard.room} - {keycard.guest}</p>
                      <p className="text-sm text-gray-500">Issued: {keycard.issued}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(keycard.status)}`}>
                      {keycard.status}
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Expires: {keycard.expires}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {selectedTab === 'points' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {accessPoints.map((point) => (
                <div key={point.id} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-gray-900">{point.name}</p>
                        <p className="text-sm text-gray-500">{point.type}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(point.status)}`}>
                        {point.status}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">Last: {point.lastAccess}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};