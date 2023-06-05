module.exports = {
  testEnvironment: "jsdom",
  moduleFileExtensions: ["js", "jsx"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.jsx?$",
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
};
