$(function(){
	function buildHTML(message){
		var html =
		  `<button class="like" id ="like-button-${message.message_id}" type="submit" title="${message.message_id}">
		    <i class="fa fa-heart-o icon"></i>
		    <span> ${ message.message_likes_count } </span>
		   </button>`
		return html
	};

$('.unlike').on('click', function(e){
	console.log("destroyするよ");
	e.preventDefault();
	var data = $(this).attr('title');
	var url =`/likes/${data}`;

	$.ajax({
		url: url,
		type: "DELETE",
		data: {message_id: data},
		dataType:'json',
		processData: false,
		contentType: false
	})
	.done(function(data){
		var html =buildHTML(data);
	    var unlike_button=$(`#unlike-button-${data.message_id}`);
	  	unlike_button.replaceWith(html);
	  	var likeButton = "#like-button"
	  	// $(likeButton).next().remove();
	  	$(likeButton).parent().attr("action", `/messages/${data.message_id}/likes`);
	  	$(likeButton).prev().attr("value", "post");
	});
});
});