import { jest } from '@jest/globals';

jest.mock('@gluestack-ui/nativewind-utils/tva', () => ({
  tva: () => () => ({}),
}));

jest.mock('@gluestack-ui/nativewind-utils/IsWeb', () => ({
  isWeb: false,
}));

jest.mock('expo-modules-core', () => ({
  EventEmitter: { prototype: {} },
  requireOptionalNativeModule: () => null,
}));
