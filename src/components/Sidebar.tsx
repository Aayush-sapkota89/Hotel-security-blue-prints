import React from 'react';
import {
  LayoutDashboard,
  Building,
  Monitor,
  Key,
  AlertTriangle,
  Shield,
  Users,
  Bell
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeSection, setActiveSection }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'floorplan', label: 'Floor Plans', icon: Building },
    { id: 'monitoring', label: 'Security Monitoring', icon: Monitor },
    { id: 'access', label: 'Access Control', icon: Key },
    { id: 'incidents', label: 'Incident Reports', icon: AlertTriangle },
    { id: 'emergency', label: 'Emergency Procedures', icon: Shield },
  ];

  return (
    <div className="w-64 bg-slate-900 text-white flex flex-col">
      <div className="p-6 border-b border-slate-700">
        <div className="flex items-center space-x-3">
          <Shield className="h-8 w-8 text-blue-400" />
          <div>
            <h1 className="text-xl font-bold">Hotel Security</h1>
            <p className="text-sm text-slate-400">Management System</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveSection(item.id)}
                  className={`w-full flex items-center space-x-3 p-3 rounded-lg transition-colors ${
                    activeSection === item.id
                      ? 'bg-blue-600 text-white'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-slate-700">
        <div className="flex items-center space-x-3">
          <Users className="h-5 w-5 text-slate-400" />
          <div>
            <p className="text-sm font-medium">Security Staff</p>
            <p className="text-xs text-slate-400">8 Active Personnel</p>
          </div>
        </div>
      </div>
    </div>
  );
};