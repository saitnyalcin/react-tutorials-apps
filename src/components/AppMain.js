import React from 'react';
import AppName from './AppName';
import AppHeader from './AppHeader';
import AppContent from './AppContent';

const AppMain = ({ appName, appHeader, appContent }) => {
  return (
    <div>
      <AppName appName={appName} />
      <AppHeader appHeader={appHeader} />
      <AppContent appContent={appContent} />
    </div>
  );
};

export default AppMain;
