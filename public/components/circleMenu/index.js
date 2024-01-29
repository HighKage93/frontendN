import Component from "./component";

const CircleMenu = ({ divisions }) => {
    
    const radius = 90; // Set the radius of the circle
  const center = { x: 50, y: 50 }; // Set the center of the circle
  const items = [];

  const handleHover = () => {
    console.log('Custom component hovered!'); // Add your hover logic here
  };
  // Calculate the positions of the items around the circle
  for (let i = 0; i < divisions; i++) {
    const angle = (i / divisions) * 2 * Math.PI;
    const x = center.x + radius * Math.cos(angle);
    const y = center.y + radius * Math.sin(angle);

    items.push(
    //   <circle key={i} cx={x} cy={y} r="5" fill="blue" />
    <g key={i} transform={`translate(${x}, ${y})`}>
    <Component onHover={handleHover} />
  </g>
        
    );
  }
    
    return (
        <svg width="800" height="800">
          <circle cx={center.x} cy={center.y} r={radius} stroke="black" stroke-width="3" fill="red" />
      {items}
        </svg>
    );
}

export default CircleMenu;
