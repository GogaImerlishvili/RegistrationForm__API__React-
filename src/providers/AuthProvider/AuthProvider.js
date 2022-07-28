import React, { useState, useContext } from "react";
export const AuthContext = React.createContext("Props");

// AuthContext.displayName = "AuthContext";

const init = {
  token: "fe7ef439-22f2-4db8-85aa-f7195783961b",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  skills: [],
  work_preference: "",
  had_covid: false,
  had_covid_at: "",
  vaccinated: false,
  vaccinated_at: "",
  will_organize_devtalk: false,
  devtalk_topic: "",
  something_special: "",
};

export const AuthProvider = ({ children }) => {
  const [data, setData] = useState(init);

  const setUser = (fName = "", lName = "", email = "", phone = "") => {
    if (!fName.length) return "name is empty";
    let newData = data;
    newData.first_name = fName;
    newData.last_name = lName;
    newData.email = email;
    newData.phone = phone;
    setData(...newData);
    return "";
  };
  return (
    <AuthContext.Provider
      value={{
        data,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const value = useContext(AuthContext);

  if (!value) {
    throw new Error("Auth Context Provider is not defined ");
  }
  return value;
};
