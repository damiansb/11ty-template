module.exports = function (eleventyConfig) {

    // Define your repository variable
    const isGitHubActionDeploy = process.env.GITHUB_ACTION_DEPLOY === 'true';

    // Set the pathPrefix conditionally
    const pathPrefix = isGitHubActionDeploy ? process.env.PATH_PREFIX : '';

    // eleventyConfig.setNunjucksEnvironmentOptions({
    //     throwOnUndefined: true,
    // });

    eleventyConfig.setServerOptions({
        // Default values are shown:

        // Whether the live reload snippet is used
        liveReload: true,

        // Whether DOM diffing updates are applied where possible instead of page reloads
        domDiff: true,

        // The starting port number
        // Will increment up to (configurable) 10 times if a port is already in use.
        port: 3000,

        // Additional files to watch that will trigger server updates
        // Accepts an Array of file paths or globs (passed to `chokidar.watch`).
        // Works great with a separate bundler writing files to your output folder.
        // e.g. `watch: ["public/**/*.css"]`
        watch: [
            "public/**/*.css"
        ],

        // Show local network IP addresses for device testing
        showAllHosts: true,

        // Use a local key/certificate to opt-in to local HTTP/2 with https
        // https: {
        // key: "./localhost.key",
        // cert: "./localhost.cert",
        // },

        // Change the default file encoding for reading/serving files
        // encoding: "utf-8",

        // Show the dev server version number on the command line
        // showVersion: false,

        //path prefix for the website links
        pathPrefix
    });

    //references the files directly on dev
    eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

    //set passthrough files
    eleventyConfig.addPassthroughCopy("src/assets");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/manifest.webmanifest");

    return {
        dir: {
            input: 'src',
            output: 'public',
            // includes: '_includes',
            // layouts: '_includes/layouts',
            // data: 'global'
        },
        pathPrefix
    }

};