module.exports = function(grunt) {
    var comn = require("comn"),
        filePath = require("file_path"),
        fileUtils = require("file_utils");

    grunt.registerMultiTask("comn", "Compiles CommonJS modules into one file", function() {
        var options = this.options(),
            index = options.index || options.main || options.file,
            files = comn(index, options),
            out = options.out,
            path;

        for (path in files) {
            fileUtils.writeFileSync(filePath.join(out, path), files[path]);
        }
    });
};
