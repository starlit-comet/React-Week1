import { useState } from "react";

export default function UpdaterFunction() {
  const obj1 = {
    year: 2002,
    make: "Ford",
    model: "Mustang",
  };
  const [car, setCar] = useState(obj1);

  const updateYear = (e) => setCar({ ...car, year: e.target.value });
  const updateMake = (e) => setCar({ ...car, make: e.target.value });
  const updateModel = (e) => setCar({ ...car, model: e.target.value });

  return (
    <div>
      <p>
        year: {car.year} <br />
        Model: {car.model} <br />
        Make : {car.make}
      </p>

      <input type="number" onChange={updateYear} value={car.year} />
      <input type="text" onChange={updateModel} value={car.model} />
      <input type="text" onChange={updateMake} value={car.make} />
    </div>
  );
}
