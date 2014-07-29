function clickHandler() {
   $(this).next().addClass("image").removeClass("noImage")
   $(this).removeClass("image").addClass("noImage")
 }  
function lastImage(){
  $(".first").addClass("image").removeClass("noImage")
  $(this).removeClass("image").addClass("noImage") 
}


$(document).ready(function(){
  $(".tab").click(function(){
    var wind = $(this).val()
    $(".pane").addClass("paneGone").removeClass("paneSelect")
    $("#in" + wind).removeClass("paneGone").addClass("paneSelect")
    })
  
  $(".clickable").click(clickHandler)
  $(".last").click(lastImage)

  
   

  
  })