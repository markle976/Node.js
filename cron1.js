var cronJob = require('cron').CronJob;
var exec = require("child_process").exec;

var runCron = function(sound) {
    exec("afplay " + sound, { timeout: 10000, maxBuffer: 20000*1024 }, function (error, stdout, stderr) {
    	if (error !== null) {
    		console.log(error);
    	}
    });
};

var job = new cronJob({
	cronTime: '0 * * * * *',
	onTick: function() {
	    runCron("Alert.mp3");
	},
	start: false,
	timeZone: "America/New_York"
});

job.start();