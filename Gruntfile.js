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
        map: true,
        processors: [ require('autoprefixer')({browsers: 'last 2 versions'}) ]
      },
      dist: {
        src: 'public/build/main.css'
      }
    },
		watch: {
			css: {
				files: 'scss/*.scss',
				tasks: ['sass', 'postcss']
			}
		}
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.registerTask('default', ['watch']);
};
