/**
 * Jasmine test spec. Use `npm test` to run this.
 * It is expected you will change "language" to match your language and update
 * the tests and test data for your language requirements.
 */
const hljs = require("highlight.js/lib/core");
const language = require("../src/languages/your-language");
const fs = require("fs");
const path = require("path");
const testFileSourcePath = "../test/markup/your-language/sample.txt";
const testFileExpectedPath = "../test/markup/your-language/sample.expect.txt";
hljs.registerLanguage("your-language", language);

describe("highlight language", () => {
  it("defines your-language", () => {

    // highlight has language defined
    const language = hljs.getLanguage("your-language");
    expect(language).toBeDefined();
  });

  it ("highlights language string", () => {
    const string = "assign false builtin";
    const expected = '<span class="hljs-keyword">assign</span> <span class="hljs-literal">false</span> <span class="hljs-built_in">builtin</span>';
    const { value: result, language } = hljs.highlightAuto(string, [
      "your-language",
    ]);
    expect(language).toBe("your-language");
    expect(result).toBe(expected);
  });

  it("highlights language file", () => {

    // read the test data
    const input = fs.readFileSync(
      path.resolve(__dirname, testFileSourcePath),
      "utf-8"
    );

    // highlight the test data
    const { value: result, language } = hljs.highlightAuto(input, [
      "your-language",
    ]);
    expect(language).toBe("your-language");

    // verify the highlighting is what is expected
    const expected = fs.readFileSync(
      path.resolve(__dirname, testFileExpectedPath),
      "utf-8"
    );
    expect(result).toBe(expected);
  });
});
