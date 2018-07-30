class MessagesController < ApplicationController
  before_action :set_group #private以下に定義し、このコントローラすべてのアクションで@groupが使える。

  def index
    @message = Message.new
    @messages = @group.messages.includes(:user)
    respond_to do |format|
      format.html
      format.json{@new_messages = @messages.where("id > ?", params[:id])}
    end
  end

  def create
    @message = @group.messages.new(messages_params)
    if @message.save
      respond_to do |format|
        format.html{ redirect_to group_messages_path(@group), notice: 'メッセージが送信されました' }
        format.json
      end
    else
      respond_to do |format|
        format.html{ redirect_to group_messages_path(@group), notice: 'メッセージが送信されませんでした' }
        format.json
      end
    end    
  end

  private

  def messages_params
  	params.require(:message).permit(:content, :image).merge(user_id: current_user.id)
  end

  def set_group
    @group = Group.find(params[:group_id])
  end
end
