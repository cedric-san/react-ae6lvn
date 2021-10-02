import React from 'react';
import './style.css';

export default function App() {
  const [fontSize, setFontSize] = React.useState({ fontSize: 40 });
  React.useLayoutEffect(() => {
    setFontSize({ fontSize: 70 });
  }, []);
  return (
    <div>
      <h1 style={fontSize}>UseLayoutEffect</h1>
      <h1 style={{ fontSize: 40 }}>UseLayoutEffect</h1>
    </div>
  );
}
