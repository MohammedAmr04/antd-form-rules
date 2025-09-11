import { useEffect } from 'react';
import { configValidation, validationConfig } from '../core';

export const useConfigValidation = () => {
  useEffect(() => {
    configValidation(validationConfig);
  });
};
