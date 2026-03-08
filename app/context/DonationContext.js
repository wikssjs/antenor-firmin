"use client";

import { createContext, useState } from 'react';

export const DonationContext = createContext();

export function DonationProvider({ children }) {
  const [selectedAmount, setSelectedAmount] = useState(null);

  return (
    <DonationContext.Provider value={{ selectedAmount, setSelectedAmount }}>
      {children}
    </DonationContext.Provider>
  );
}
