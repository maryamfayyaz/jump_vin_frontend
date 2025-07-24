import axiosClient from "./axiosClient";
import axiosBackendClient from "./axiosBackendClient";

const getVehicleInfo = async (vinNumber) => {
  try {
    const res = await axiosClient.get(`/api/vehicles/DecodeVINValuesExtended/${vinNumber}`, { params: { format: "json" } });

    return res.data;
  } catch (error) {
    console.log("🚀 ~ getVehicleInfo ~ error:", error);

    return null;
  }
};

const saveVehicleInfo = async (vinDetail) => {
  try {
    const res = await axiosBackendClient.post(`/api/save_to_db`, vinDetail);

    return res.data;
  } catch (error) {
    console.log("🚀 ~ getVehicleInfo ~ error:", error);

    return null;
  }
};

export { getVehicleInfo, saveVehicleInfo };
