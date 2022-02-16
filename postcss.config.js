const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");
const postcssNesting = require("postcss-nesting");
const postcssImport = require("postcss-import");
const combineSelectors = require("postcss-combine-duplicated-selectors");
// const cssnano = require("cssnano");
const postcssSorting = require("postcss-sorting");
const customMedia = require("postcss-custom-media");
const importGlob = require("postcss-import-ext-glob");

module.exports = {
  plugins: [

    importGlob(),
    postcssImport(),
    postcssJitProps(OpenProps),
    customMedia(),
    postcssNesting(),
    combineSelectors(),
    postcssSorting(),
    // cssnano()
  ],
};
