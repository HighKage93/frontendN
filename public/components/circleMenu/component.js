import { useState } from "react";

const Component = ({ onHover }) => {
    const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
    onHover && onHover();
  };

  const circleStyle = {
    fill: isHovered ? 'green' : 'blue', // Change color on hover
    stroke: 'black',
    strokeWidth: 2,
  };

  return (
    <circle
      cx="0"
      cy="0"
      r="15"
      style={circleStyle}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    />
  );
}

export default Component;