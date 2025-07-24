import axiosClient from "./axiosClient";

const getVehicleInfo = async (vinNumber) => {
  try {
    const res = await axiosClient.get(`/api/vehicles/DecodeVINValuesExtended/${vinNumber}`, { params: { format: "json" } });

    return res.data
  } catch (error) {
    console.log("🚀 ~ getVehicleInfo ~ error:", error);

    return null;
  }
};

export { getVehicleInfo };
