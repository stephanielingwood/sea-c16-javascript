$('nav').on('click','a',openTab);

function openTab(e){
  e.preventDefault();
  var $this = $(this);
  var targ = $this.attr('href');
  $('div, nav a').removeClass('active');
  $(targ).toggleClass('active');
  $this.toggleClass('active');
}
