import {
  name as packageName,
  version as packageVersion,
} from "../package.json";

export const parseForESLint = (code: string) => ({
  ast: {
    type: "Program",
    loc: { start: 0, end: code.length },
    range: [0, code.length],
    body: [],
    comments: [],
    tokens: [],
  },
  services: { isPlain: true },
  scopeManager: null,
  visitorKeys: {
    Program: [],
  },
});

export const meta = {
  name: packageName,
  version: packageVersion,
};
