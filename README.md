# highlightjs-language-template

A new language template to start from when creating a language definition for [highlightjs](https://github.com/highlightjs/highlight.js). See https://highlightjs.org/ for more information about highlight.js.

**Before you start:**

1. Check [supported languages](https://github.com/highlightjs/highlight.js/blob/master/SUPPORTED_LANGUAGES.md) to see if your language is already supported.
2. Read [3rd party quick start](https://github.com/highlightjs/highlight.js/blob/master/extra/3RD_PARTY_QUICK_START.md) to learn more about the requirements and process to contributing a new language.

## Usage

This is a GitHub repository _template_ for defining a new language for use with [highlightjs](https://highlightjs.org/). It is designed to be the starting point for creating a new repo to define a new language contribution. Follow [Language definition guide](https://highlightjs.readthedocs.io/en/latest/language-guide.html) to learn how to define a new language.

**Steps:**

1. Create a new repository from this template.
2. Update `package.json`.
3. Install the dependencies with `npm install`.
4. Rename `src/languages/language.js` to your language name and follow the [Language definition guide](https://highlightjs.readthedocs.io/en/latest/language-guide.html) to learn how to define a new language. Typically we start with an existing language that is close and alter that JavaScript code to parse your new language.
5. Rename and update the unit test `spec/language-spec.js` to test your new language. Edit `sample.txt` to cover specific test cases for your language. The code doesn't have to be real working code, but it does have to fully test your language constructs and keywords. Edit `expected.txt` to hold the anticipated correct highlighting HTML.
6. Run the test with `npm test`.
7. Update the `README.md` file to explain how to use your language.

Once your language is working as expected, create a [language request](https://github.com/highlightjs/highlight.js/issues/new/choose) issue and indicate the details about your new language for the maintainers to review.

## License

Highlight.js and this template are released under the BSD License. See [LICENSE](LICENSE) file for details.

## Contributing

This is open source software, all contributions are welcome. All contributors must follow the [code of conduct](CODE_OF_CONDUCT.md).
