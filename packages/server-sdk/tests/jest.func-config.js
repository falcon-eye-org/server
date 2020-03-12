module.exports = {
    rootDir: "..",
    roots: [
        "<rootDir>/tests"
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    modulePathIgnorePatterns: [
        "tests/env.ts",
    ],
    testRegex: "(/tests/.*|(\\.|/)(jest|spec))\\.tsx?$",
    moduleFileExtensions: [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json",
        "node"
    ]
};
