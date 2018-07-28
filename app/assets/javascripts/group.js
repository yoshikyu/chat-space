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
            ${ message.image? `
              <img src = '${ message.image }', width="200", height="150", class='lower-message__image'>` :''}
          </p>
        </div>
      <div>`
    return html
  };

  var interval = 
    setInterval(function(){
    	$.ajax({
        url: location.href,
        dataType:'json'
  	  })

  	.done(function(messages){
  		var id = $('.message:last').data('messageId');
      console.log(id);
  		var insertHTML = '';
  		messages.forEach(function(message){
  			if (message.id > id){
  			insertHTML += buildHTML(message);
  		  }
  		});
  		$('.messages').append(insertHTML);
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},4500,'linear' );
  	})
  	.fail(function(data){
  		alert('自動更新に失敗しました');
  	});
    }, 5000 );

  if (window.location.href.match(/\/groups\/\d+\/messages/)){
	  interval
  }else{
  	clearInterval(interval);
  }
 })
