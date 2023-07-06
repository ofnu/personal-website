import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';

const TextBox = ({ title, content }) => {
  const [hovered, setHovered] = useState(false);

  const scale = content.length > 200 ? 1.5 : content.length > 100 ? 1.2 : 1;
  const defaultSize = { width: 200, height: 200 };

  const boxStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '10px',
    borderRadius: '10px',
    fontSize: `${1 * scale}em`,
    transition: 'all 0.2s ease-in-out',
    transform: hovered ? 'scale(1.05)' : 'none',
  };

  return (
    <Draggable>
      <ResizableBox width={defaultSize.width} height={defaultSize.height}>
        <div
          className="textbox"
          style={boxStyle}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <h2>{title}</h2>
          <p>{content}</p>
        </div>
      </ResizableBox>
    </Draggable>
  );
};

export default TextBox;
