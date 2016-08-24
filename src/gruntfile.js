module.exports = function (grunt) {
    "use strict";
    require("load-grunt-tasks")(grunt);

    grunt.initConfig({
        es6transpiler: {
            options: {
                "globals": {
                    "jQuery": true
                }
            },
            dist: {
                files: {
                    "smart-hover.trans.js": "smart-hover.js"
                }
            }
        },

        regenerator: {
            options: {
                includeRuntime: true
            },
            dist: {
                files: {
                    "smart-hover.es5.js": "smart-hover.trans.js"
                }
            }
        },


        uglify: {
            main: {
                files: {
                    "smart-hover.min.js": ["smart-hover.es5.js"]
                }
            },
            options: {
                mangle: {toplevel: true},
                sourceMap: true,
                sourceMapName: "smart-hover.js.map",
                sourceMapIncludeSources: true,
                compress: true
            }
        },

        clean: {
            dist: [
                'smart-hover.es5.js',
                'smart-hover.trans.js'
            ]
        }
    });

    grunt.registerTask("default", ["es6transpiler", "regenerator", "uglify", "clean"]);
};
