import React from "react";

const useLogout = () => {
  const logout = () => {
    localStorage.removeItem("token");
  };

  return { logout };
};

export default useLogout;
