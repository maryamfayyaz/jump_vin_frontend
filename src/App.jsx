import { useState } from "react";

import "./App.css";
import { getVehicleInfo, saveVehicleInfo } from "./utils/api";
import { pick } from "lodash";
import moment from "moment/moment";

function App() {
  const [vinNumber, setVinNumber] = useState(0);

  const [vinDetails, setVinDetails] = useState([]);

  const handleOnChange = (e) => {
    e.preventDefault();
    e.stopPropagation();

    setVinNumber(e.target.value);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    const vinDetail = await getVehicleInfo(vinNumber);

    if (vinDetail) {
      const vinResult = vinDetail.Results?.[0];

      const formattedResult = pick(vinResult, ["VIN", "Make", "Model", "ModelYear"]);

      formattedResult.Age = moment().year() - formattedResult.ModelYear;

      setVinDetails([formattedResult, ...vinDetails]);

      await saveVehicleInfo(formattedResult);
    }
  };

  return (
    <>
      <h1>VIN look up app</h1>
      <div>
        <form onSubmit={handleOnSubmit}>
          <label className="form-label">Enter VIN Number</label>
          <input type="text" onChange={handleOnChange} />
        </form>

        <div style={{ marginTop: 10 }}>
          <table>
            <tr>
              <th>Vin Number</th>
              <th>Make</th>
              <th>Model</th>
              <th>Age</th>
            </tr>

            {vinDetails.map((vin) => (
              <tr>
                <td>{vin.VIN}</td>
                <td>{vin.Make}</td>
                <td>{vin.Model}</td>
                <td>{vin.Age}</td>
              </tr>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}

export default App;
