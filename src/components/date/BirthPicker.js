import { useState } from "react";

const BirthPicker = () => {
  const [startDate, setStartDate] = useState();
  const [age, setAge] = useState();

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return <div></div>;
};

export default BirthPicker;
