const yaml = require("js-yaml");

module.exports = function (eleventyConfig) {


  // Get a sorted list of all apps that should appear in the Drawer
  eleventyConfig.addCollection('drawerApps', collection => {
    const apps = collection.getFilteredByTag('drawerApp');
    apps.sort((app1, app2) => app1.data.title.localeCompare(app2.data.title));
    return apps;
  });

  // Get a sorted list of all apps that should appear on the homepage
  eleventyConfig.addCollection('homepageApps', collection => {
    const apps = collection.getFilteredByTag('homepageApp');
    apps.sort((app1, app2) => app1.data.title.localeCompare(app2.data.title));
    return apps;
  });

  eleventyConfig.addPassthroughCopy('src/assets/css/main.css');

  // Add support for YAML data files
  eleventyConfig.addDataExtension("yaml", contents => yaml.safeLoad(contents));

  // Markdown options
  let markdownIt = require("markdown-it");
  let markdownItAttrs = require("markdown-it-attrs");
  let options = {
    html: true
  };
  let markdownLib = markdownIt(options).use(markdownItAttrs);
  eleventyConfig.setLibrary("md", markdownLib);  

  return {
    dir: {
      input: "src",
      includes: '_includes',
      data: '_data',
      output: '_site',
    },
    passthroughFileCopy: true,
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk"
  };
};