module.exports = eleventyConfig => {

  eleventyConfig.addFilter('outside_filter', require('./site/filters.js').outside_filter);

  return {
    templateFormats: ['md', 'njk'],
    markdownTemplateEngine: 'njk',

    dir: {
      input: 'site',
      output: 'public'
    }
  };

};
