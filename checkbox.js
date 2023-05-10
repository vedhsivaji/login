import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [checkboxes, setCheckboxes] = useState([]);

  // Get checkboxes from backend on mount
  useEffect(() => {
    axios.get('/api/checkboxes')
      .then(response => {
        setCheckboxes(response.data);
      })
      .catch(error => {
        console.error('Error getting checkboxes:', error);
      });
  }, []);

  // Update checkbox state in backend
  const handleCheckboxChange = (event) => {
    const checkboxName = event.target.name;
    const checkboxValue = event.target.checked ? 'checked' : 'unchecked';

    // Update checkbox state in frontend
    const updatedCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.name === checkboxName) {
        checkbox.value = checkboxValue;
      }
      return checkbox;
    });
    setCheckboxes(updatedCheckboxes);

    // Update checkbox state in backend
    axios.put(`/api/checkboxes/${checkboxName}`, { value: checkboxValue })
      .catch(error => {
        console.error(`Error updating checkbox ${checkboxName} state:`, error);
      });
  };

  // Render checkboxes from state
  const checkboxList = checkboxes.map((checkbox) => (
    <div key={checkbox.name}>
      <label>
        <input
          type="checkbox"
          name={checkbox.name}
          checked={checkbox.value === 'checked'}
          disabled={checkbox.value === 'checked'}
          onChange={handleCheckboxChange}
        />
        {checkbox.name}
      </label>
    </div>
  ));

  return (
    <div>
      {checkboxList}
    </div>
  );
}

export default App;
