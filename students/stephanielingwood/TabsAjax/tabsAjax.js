$(document).ready(function() {
	$('#show-tab').addClass('active-tab');
	$('#show-content').addClass('active-content');
	$('.tabs').on('click', function(e) {
		var selected = $(e.target).attr('class');
		$('.tab-text').removeClass('active-content');
		$('.tabs li').removeClass('active-tab');
		$('.tabs .' + selected).addClass('active-tab');
		$('.tab-text.' + selected).addClass('active-content');	
	});	

	$.getJSON('http://rs.hankyates.com:3000/content', function(data) {
		data.forEach(function(tab, index) {
			console.log(tab);
			var tabName = _.template('<li class="' + tab.name + '">' + tab.name + '</li>');
			var tabContent = _.template('<div class="tab-text ' + tab.name + '">' + tab.content + '</div>')
			console.log(tabContent);
			$('ul').append(tabName);
			$('.tab-content').append(tabContent);
		});
	});
});