$(function(){
	function buildHTML(message){
    var html =
      `<div class="message clearfix" data-message-id="${message.id}">
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
            ${ message.image?
              `<img src = '${ message.image }', width="200", height="150", class='lower-message__image'>` :''}
          </p>
        </div>
      <div>`
    return html
  };
  
  function interval(){
    setInterval(function(){
      var lastId = $('.message:last').data('messageId');
      console.log(lastId);
    	$.ajax({
        url: location.href,
        dataType:'json',
        data: {id: lastId}
  	  })

  	.done(function(messages){
      messages.forEach(function(message){
        var insertHTML = '';
        insertHTML += buildHTML(message);
        if (message)
          {$('.messages').append(insertHTML);
          };
        });
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},4500,'linear' );
  	})
    }, 5000 );
  };

  if (window.location.href.match(/\/groups\/\d+\/messages/)){
	  interval()
  }else{
  	clearInterval(interval);
  }
 });
