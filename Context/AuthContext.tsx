import React, { createContext, useState, useContext, ReactNode } from "react";

interface AuthContextType {
  nama: string;
  login: (name: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [nama, setNama] = useState<string>("");

  const login = (name: string) => {
    setNama(name);
  };

  const logout = () => {
    setNama("");
  };

  return (
    <AuthContext.Provider value={{ nama, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
