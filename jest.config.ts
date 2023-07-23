export default {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleFileExtensions: ["ts", "js", "json"],
    transform: {
        "^.+\\.ts$": "ts-jest",
    },
    testMatch: ["**/__tests__/**/*.test.ts"],
    globals: {
        "ts-jest": {
            tsconfig: "tsconfig.json",
        },
    },
};