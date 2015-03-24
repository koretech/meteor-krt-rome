var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:rome',
	summary: 'Rome Date and Time Picker',
	version: '1.2.0_3',
	git: 'https://github.com/koretech/meteor-krt-rome.git'
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@1.0');

	api.use([
		'templating',
		'underscore',
		'less',
		'momentjs:moment@2.9.0'
		//'mquandalle:bower@1.3.12_2'
	], both);

	api.imply([
		'momentjs:moment@2.9.0'
	]);

	api.addFiles([
		//'smart.json',
		'lib/rome/dist/rome.css',
		'lib/rome/dist/rome.js',
		'rome.less'
	], client);

});
