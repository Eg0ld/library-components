import React, { useState } from 'react';

interface ColorPickerProps {
  // Define any props for the component here
}

const ColorPicker: React.FC<ColorPickerProps> = (props) => {
  // Use state to store the selected color
  const [color, setColor] = useState('#ffffff');

  // Handle the color change event from the input element
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
  };

  return (
    <div>
      <h1>Color Picker</h1>
      <p>The selected color is {color}</p>
      <input type="color" value={color} onChange={handleChange} />
    </div>
  );
};

export default ColorPicker;
