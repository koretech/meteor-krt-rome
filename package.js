var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:rome',
	summary: 'Rome Date and Time Picker',
	version: '1.2.0_1',
	git: 'https://github.com/koretech/meteor-krt-rome.git'
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@0.9.4');

	api.use([
		'templating',
		'underscore',
		'less',
		'mquandalle:bower@0.1.11'
	], both);

	api.addFiles([
		'smart.json',
		'lib/rome/dist/rome.css',
		'lib/rome/dist/rome.standalone.js',
		'rome.less'
	], client);

});
