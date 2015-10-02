var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:rome',
	summary: 'Rome Date and Time Picker',
	version: '2.1.22_1',
	git: 'https://github.com/koretech/meteor-krt-rome.git',
	documentation: null
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@1.0');

	api.use([
		'templating',
		'underscore',
		'flemay:less-autoprefixer@1.1.0',
		'krt:core@0.1.4',
		'momentjs:moment@2.10.6'
	], both);

	api.imply([
		'momentjs:moment'
	]);

	api.addFiles([
		'lib/rome/dist/rome.css',
		'lib/rome/dist/rome.js',
		'rome.less'
	], client);

});
