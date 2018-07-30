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
  function scrollDown(){
    $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight},4500,'linear' );
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
      scrollDown()
      $('.form__submit').removeAttr('disabled')
      $('#new_message')[0].reset()
    })
    .fail(function(data){
      alert('メッセージを入力してください')
      $('.form__submit').removeAttr('disabled')
    })
  });
});
