$(function(){
  function buildHTML(message){
    var html =
      `<div class="message clearfix">
        <div class="upper--message">
          <div class="upper--message__user-name">
            ${ message.user_name }
          </div>
          <div class="upper--message__date"> 
            ${ message.created_at }
          </div>
        </div>  
        <div class="message--content"> 
          <p class="bottom--message">
            ${ message.content }
            <img src = '${ message.image.url}', class='lower-message__image'>
          </p>
        </div>
      <div>`
    return html;
  }
　　$('#new_message').on('submit', function(e){
	　  e.preventDefault();
	　  var formData = new FormData(this);
	　  var url = $(this).attr('action')  
	　  $.ajax({
		　  url:url,
		　  type: "POST",
		　  data: formData,
		　  dataType:'json',
		　  processData: false,
		　  contentType: false
	　　 })
　　.done(function(data){
		  var html = buildHTML(data);
		  $('.messages').append(html)
		  $('.form__message').val('')
		  $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},4500,'linear' )
		  $('.form__submit').removeAttr('disabled')
		  $(".lower-message__image").error(function(){
			  $(this).remove();
      });
	  })
	  .fail(function(){
		  alert('error');
	  })
  })
});
