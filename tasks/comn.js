module.exports = function(grunt) {
    var comn = require("comn"),
        fileUtils = require("file_utils");

    grunt.registerMultiTask("comn", "Compiles CommonJS modules into one file", function() {
        var options = this.options(),
            index = options.index || options.main || options.file,
            out = options.out;

        fileUtils.writeFileSync(out, comn(index, options));
    });
};
