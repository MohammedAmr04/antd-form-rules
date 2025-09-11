import { useEffect } from 'react';
import { configValidation, validationConfig } from '../core';
const useConfigValidation = () => {
  useEffect(() => {
    configValidation(validationConfig);
  }, []);
};

export { useConfigValidation };
