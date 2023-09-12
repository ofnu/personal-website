import React from 'react';

const TextBox = ({ title, content }) => {
  const boxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '10px',
    borderRadius: '10px',
    transition: 'all 0.3s ease-in-out',
    margin: '10px',
    width: '600px',
    cursor: 'pointer',  // Indicates the element is interactive
  };

  const contentStyle = {
    fontSize: '1em',
  };

  const hoveredStyle = {
    transform: 'scale(1.1)',
    zIndex: 2,  // Ensures the hovered item is above the others
  };

  return (
    <div
      className="textbox"
      style={boxStyle}
      onMouseEnter={(e) => {
        // Add the scaling effect on hover
        e.currentTarget.style.transform = hoveredStyle.transform;
        e.currentTarget.style.zIndex = hoveredStyle.zIndex;
      }}
      onMouseLeave={(e) => {
        // Remove the scaling effect once the mouse leaves
        e.currentTarget.style.transform = 'none';
        e.currentTarget.style.zIndex = 'auto';
      }}
    >
      <h2>{title}</h2>
      <p style={contentStyle}>{content}</p>
    </div>
  );
};

export default TextBox;
