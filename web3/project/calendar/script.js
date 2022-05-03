var data=[
  {
    "title": "cristmas(Public Holiday)",
    "start": "2019-12-25"
  },
  {
    "title": "ssss(Public Holiday)",
    "start": "2019-12-03"
  },
  {
    "title": "testing(Public Holiday)",
    "start": "2019-12-04"
  },
  {
    "title": "test(Public Holiday)",
    "start": "2019-11-08"
  },
  {
    "title": "bday(Public Holiday)",
    "start": "2019-10-18"
  },
  {
    "title": "new year(Public Holiday)",
    "start": "2020-01-01"
  },
  {
    "title": "holi(Public Holiday)",
    "start": "2019-11-29"
  },
  {
    "title": "holidayyyyyyyyyyyyyyy(Public Holiday)",
    "start": "2019-01-10"
  },
  {
    "title": "jan 2020(Public Holiday)",
    "start": "2020-01-02"
  },
  {
    "title": "fuekdsgjf(Public Holiday)",
    "start": "2020-01-08"
  },
  {
    "title": "feb 6(Public Holiday)",
    "start": "2020-02-06"
  },
  {
    "title": "test(Public Holiday)",
    "start": "2019-10-30"
  },
  {
    "title": "abcd(Public Holiday)",
    "start": "2020-01-01"
  },
  {
    "title": "holiday(Tours and Travels)",
    "start": "2019-11-22"
  },
  {
    "title": "testing(Tours and Travels)",
    "start": "2019-12-04"
  }
];

  document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
	var today=new Date();
	var current_year=today.getFullYear();
	var current_month=today.getMonth();
	var current_date=today.getDate();
	var current_time=today.getTime();
    var calendar = new FullCalendar.Calendar(calendarEl, {
      plugins: [ 'interaction', 'dayGrid', 'timeGrid' ],
      header: {
        left: 'prev,next today',
        center: 'title',
        right:''
      },
	  	
		
		
      defaultDate: today,
  
  
  
      select: function(arg) {

        $('#myModal').modal('show');
        
		var data=arg.start;
		var year=data.getFullYear();
		var month=data.getMonth();
		var date=data.getDate();
		
		
        var date = year+"-"+month+"-"+date;
        $('#date').val(date);
		
		
		
        calendar.unselect()
      },
      editable: true,
      eventLimit: true,
      events: data,
      
    });

    calendar.render();
  });
