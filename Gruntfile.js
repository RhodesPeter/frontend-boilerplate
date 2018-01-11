module.exports = function(grunt) {

  grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
        options: {
          sourcemap: 'none'
        },
				files: {
					'public/build/main.css' : 'scss/main.scss'
				}
			}
		},
    postcss: {
      options: {
        map: false,
        processors: [ require('autoprefixer')({browsers: 'last 2 versions'}) ]
      },
      dist: {
        src: 'public/build/main.css'
      }
    },
    stylelint: {
      options: {
        configFile: '.stylelintrc',
      },
      all: ['scss/**/*.scss']
    },
		watch: {
			css: {
				files: 'scss/*.scss',
				tasks: ['sass', 'postcss', 'stylelint']
			}
		}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-stylelint');
  grunt.registerTask('default', ['watch']);
};
