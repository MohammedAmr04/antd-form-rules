import { ValidationConfig } from '../types';

export let validationConfig: ValidationConfig = {};

/**
 * Register validation configuration
 * @param config validation config object
 */
export function configValidation(config: ValidationConfig) {
  validationConfig = config;
}
