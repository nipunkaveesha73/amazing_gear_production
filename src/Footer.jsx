import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    const checkDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold = window.outerHeight - window.innerHeight > threshold;

      if (widthThreshold || heightThreshold) {
        alert("Developer tools are open. Please close them.");
      }
    };

    const intervalId = setInterval(checkDevTools, 1000);

    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    document.addEventListener('contextmenu', handleContextMenu);

    // Cleanup
    return () => {
      clearInterval(intervalId);
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return (
    <div>
      <p>© 2018 – 2023 Amazing Gear Production | Lakshan Nuwan Photography</p>
    </div>
  );
};

export default App;
