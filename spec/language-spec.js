/**
 * Jasmine test spec. Use `npm test` to run this.
 * It is expected you will change "language" to match your language and update
 * the tests and test data for your language requirements.
 */
const hljs = require("highlight.js/lib/core");
const language = require("../src/languages/language");
const fs = require("fs");
const path = require("path");
hljs.registerLanguage("language", language);

describe("highlight language", () => {
  it("defines language", () => {

    // highlight has language defined
    const language = hljs.getLanguage("language");
    expect(language).toBeDefined();
  });

  it ("highlights language string", () => {
    const string = "assign false builtin";
    const expected = '<span class="hljs-keyword">assign</span> <span class="hljs-literal">false</span> <span class="hljs-built_in">builtin</span>';
    const { value: result, language } = hljs.highlightAuto(string, [
      "language",
    ]);
    expect(language).toBe("language");
    expect(result).toBe(expected);
  });

  it("highlights language file", () => {

    // read the test data
    const input = fs.readFileSync(
      path.resolve(__dirname, "./sample.txt"),
      "utf-8"
    );

    // highlight the test data
    const { value: result, language } = hljs.highlightAuto(input, [
      "language",
    ]);
    expect(language).toBe("language");

    // verify the highlighting is what is expected
    const expected = fs.readFileSync(
      path.resolve(__dirname, "./expected.txt"),
      "utf-8"
    );
    expect(result).toBe(expected);
  });
});
