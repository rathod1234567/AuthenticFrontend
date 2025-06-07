import React from "react";
import AuthContext from "../AuthContext/AuthContext";
import useAxiosInstance from "../Hooks/UseAxiosInstance";

const AuthProvider = ({ children }) => {
  const axiosInstance = useAxiosInstance();

  const handleSubmit = async (url, body) => {
    try {
      const res = await axiosInstance.post(url, body);
      return {
        status: res?.status,
        message: res?.data?.message || "Success",
      };
    } catch (error) {
      console.error("Error in handleSubmit:", error);
      return {
        status: error?.response?.status || 500,
        message: error?.response?.data?.message || "Something went wrong!",
      };
    }
  };

  return (
    <AuthContext.Provider value={{ handleSubmit }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
