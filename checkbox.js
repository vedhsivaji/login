import React, { useState } from "react";

function App() {
  const [checkedBoxes, setCheckedBoxes] = useState([]);

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    if (event.target.checked) {
      setCheckedBoxes([...checkedBoxes, value]);
    } else {
      event.preventDefault();
    }
  };

  return (
    <div>
      <h1>Checkboxes</h1>
      <form>
        <label>
          <input
            type="checkbox"
            value="checkbox1"
            checked={checkedBoxes.includes("checkbox1")}
            onChange={handleCheckboxChange}
            disabled={checkedBoxes.includes("checkbox1")}
          />
          Checkbox 1
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="checkbox2"
            checked={checkedBoxes.includes("checkbox2")}
            onChange={handleCheckboxChange}
            disabled={checkedBoxes.includes("checkbox2")}
          />
          Checkbox 2
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="checkbox3"
            checked={checkedBoxes.includes("checkbox3")}
            onChange={handleCheckboxChange}
            disabled={checkedBoxes.includes("checkbox3")}
          />
          Checkbox 3
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="checkbox4"
            checked={checkedBoxes.includes("checkbox4")}
            onChange={handleCheckboxChange}
            disabled={checkedBoxes.includes("checkbox4")}
          />
          Checkbox 4
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="checkbox5"
            checked={checkedBoxes.includes("checkbox5")}
            onChange={handleCheckboxChange}
            disabled={checkedBoxes.includes("checkbox5")}
          />
          Checkbox 5
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="checkbox6"
            checked={checkedBoxes.includes("checkbox6")}
            onChange={handleCheckboxChange}
            disabled={checkedBoxes.includes("checkbox6")}
          />
          Checkbox 6
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="checkbox7"
            checked={checkedBoxes.includes("checkbox7")}
            onChange={handleCheckboxChange}
            disabled={checkedBoxes.includes("checkbox7")}
          />
          Checkbox 7
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="checkbox8"
            checked={checkedBoxes.includes("checkbox8")}
            onChange={handleCheckboxChange}
            disabled={checkedBoxes.includes("checkbox8")}
          />
          Checkbox 8
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="checkbox9"
            checked={checkedBoxes.includes("checkbox9")}
            onChange={handleCheckboxChange}
            disabled={checkedBoxes.includes("checkbox9")}
          />
          Checkbox 9
        </label>
        <br />
        <label>
          <input
            type="checkbox"
            value="checkbox10"
            checked={checkedBoxes.includes("checkbox10")}
            onChange={handleCheckboxChange}
            disabled={checkedBoxes.includes("checkbox10")}
          />
          Checkbox 10
        </label>
      </form>
    </div>
  );
}

export default App;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




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

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



import React, { useState, useEffect } from "react";
import axios from "axios";

function CheckboxList() {
  const [checkboxes, setCheckboxes] = useState([
    { name: "checkbox1", value: "unchecked" },
    { name: "checkbox2", value: "unchecked" },
    { name: "checkbox3", value: "unchecked" },
    // Add additional checkboxes here
  ]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/checkboxes").then((response) => {
      setCheckboxes(response.data);
    });
  }, []);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    const newCheckboxes = checkboxes.map((checkbox) => {
      if (checkbox.name === name) {
        return { ...checkbox, value: checked ? "checked" : "unchecked" };
      } else {
        return checkbox;
      }
    });
    setCheckboxes(newCheckboxes);

    axios.put(`http://localhost:8080/api/checkboxes/${name}`, {
      value: checked ? "checked" : "unchecked",
    });
  };

  const checkboxList = checkboxes.map((checkbox) => (
    <div key={checkbox.name}>
      <label>
        <input
          type="checkbox"
          name={checkbox.name}
          checked={checkbox.value === "checked"}
          disabled={checkbox.value === "checked"}
          onChange={handleCheckboxChange}
        />
        {checkbox.name}
      </label>
    </div>
  ));

  return <div>{checkboxList}</div>;
}

export default CheckboxList;

