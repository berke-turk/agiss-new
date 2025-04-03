'use client';

import { createContext, useContext } from "react";
import Languages from "../languages";

// 🎯 Dil tipi belirleme
interface LangContextType {
  lang: string;
}

// 📌 Varsayılan context oluştur (ilk değer "TR")
const LangContext = createContext<LangContextType>({ lang: Languages.TR });

// 🎯 Custom Hook (daha temiz kullanım için)
export const useLang = () => useContext(LangContext);

// 🎯 Provider Bileşeni
interface LangProviderProps {
  lang: string;
  children: React.ReactNode;
}

export const LangProvider: React.FC<LangProviderProps> = ({ lang, children }) => {
  return <LangContext.Provider value={{ lang }}>{children}</LangContext.Provider>;
};