var timezones = [
  {
    name: 'Busan',
    timezone: 'Asia/Seoul'
  },
  {
    name: 'Seattle',
    timezone: 'America/Los_Angeles'
  },
  {
    name: 'London',
    timezone: 'Europe/London'
  },
  {
    name: 'Shanghai',
    timezone: 'Asia/Shanghai'
  },
  {
    name: 'Paris',
    timezone: 'Europe/Paris'
  },
  {
    name: 'New York',
    timezone: 'America/New_York'
  }
];

var template = $('#timezone').html();
Mustache.parse(template);

var display = function() {
  var content = $('#content');
  content.empty();
  for(var i = 0; i < timezones.length; i++) {
    var tz = timezones[i];
    var m = moment();
    tz.time = m.tz(tz.timezone).format('h:mm a');
    tz.when = m.format('dddd');  content.append(Mustache.render(template, tz));
  }
}

display();
setInterval(display, 30000);