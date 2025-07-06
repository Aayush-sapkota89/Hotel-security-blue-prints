import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Dashboard } from './components/Dashboard';
import { FloorPlan } from './components/FloorPlan';
import { SecurityMonitoring } from './components/SecurityMonitoring';
import { AccessControl } from './components/AccessControl';
import { IncidentReporting } from './components/IncidentReporting';
import { EmergencyProcedures } from './components/EmergencyProcedures';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'floorplan':
        return <FloorPlan />;
      case 'monitoring':
        return <SecurityMonitoring />;
      case 'access':
        return <AccessControl />;
      case 'incidents':
        return <IncidentReporting />;
      case 'emergency':
        return <EmergencyProcedures />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;