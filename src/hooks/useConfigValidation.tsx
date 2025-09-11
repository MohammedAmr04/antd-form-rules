import { useEffect } from 'react';
import { configValidation, validationConfig } from '../core';
function useConfigValidation(): void {
  useEffect(() => {
    configValidation(validationConfig);
  }, []);
}

export { useConfigValidation };
