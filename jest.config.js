module.exports = {
    preset: 'react-native',
    roots: ['<rootDir>/app'],
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/$1',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    testRegex: '(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$',
    testPathIgnorePatterns: ['\\.snap$', '<rootDir>/node_modules/'],
    transformIgnorePatterns: ['node_modules/?!(static-container)'],
    cacheDirectory: '.jest/cache',
    globals: {
        'ts-jest': {
            isolatedModules: true,
        },
    },
    clearMocks: true,
    collectCoverage: true,
};
