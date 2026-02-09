import { useState, useEffect } from "react";

export const useExperienceYears = (startYear: number) => {
  const [years, setYears] = useState(0);

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    const difference = Math.max(0, currentYear - startYear);
    setYears(difference);
  }, [startYear]);

  return years;
};
