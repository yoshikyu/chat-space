json.user_name  @message.user.name
json.id @message.id
json.created_at  @message.created_at.to_s(:default)
json.content  @message.content
json.image  @message.image.url
