$(function(){
	function buildHTML(message){
		var html =
		  `<input type="hidden" name="_method" value="delete">
		    <button class="unlike" id ="unlike-button-${message.message_id}" type="submit" title="${message.message_id}">
		      <i class="fa fa-heart icon"></i>
		      <span> ${ message.message_likes_count } </span>
		    </button>
		  </input>`
		return html
	};
	$('.like').on('click', function(e){
		console.log(" createするよ");
		e.preventDefault();
		var data = $(this).attr('title');
		var url = `/messages/${data}/likes`;
		$.ajax({
			url: url,
			type: "POST",
			data:{ message_id: data},
			dataType:'json',
			processData: false,
	        contentType: false
	  })
	  .done(function(data){
	  	var html =buildHTML(data);
	  	var like_button=$(`#like-button-${data.message_id}`);
	  	like_button.replaceWith(html);
	  	// $("#unlike-button").next().remove();
	  	$("#unlike-button").parent().attr('action', `/likes/${data.message_id}`);
	  });
  });
});