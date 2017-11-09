"use strict";
 var concertEvents = [];
 var $search = $("#filter_list");

	$.ajax({
	  'url': 'http://apis.is/concerts',
	  'type': 'GET',
	  'dataType': 'json',
	  'success': function(data) {
	   
			for(let i = 0; i<data.results.length; i++){
				concertEvents.push
				({
					name:data.results[i].eventDateName,
					when:data.results[i].dateOfShow,
					where:data.results[i].eventHallName,
					imageSrc:data.results[i].imageSource
				});
			}
			console.log(data);
			console.log(concertEvents);
			RenderEvent();

		    //console.log(concertEvents[5].name)  
	  }
	});

function RenderEvent(){
	var strResult = "";
	for (let i = 0; i<concertEvents.length; i++) {
	 		strResult += "<div id='event_tap'> <img src=" + concertEvents[i].imageSrc + " style> <div id='event_info'> <b>Heiti:</b> " + concertEvents[i].name + "<br> <b>Staðsetning:</b> " + concertEvents[i].where + "<br> <b>Tími:</b> " + concertEvents[i].when + "</div></div>";
	 }
	 $("#event_list").html(strResult)
}

function RenderFilter() {
	var filterResult = "";
	concertEvents.forEach();
}
