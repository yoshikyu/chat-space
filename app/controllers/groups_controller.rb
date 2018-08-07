class GroupsController < ApplicationController
	before_action :set_group, only: [:edit, :update]
	def index	 
	end	

  def new #グループの新規作成画面
    @group = Group.new #Groupモデルの新しいインスタンス
    @group.users << current_user #現在ログイン中のカレントユーザーを新規作成したグループに追加
  end

  def create #グループ作成の可否に合わせた処理
  	@group = Group.new(groups_params)
  	if @group.save
  		redirect_to root_path, notice: 'グループを作成しました' #成功した時
  	else
  		render :new #失敗した時→該当のビューのみ表示。もう一回new画面をだす。これを省略したらcreateのビューにいく？
  	end
  end
  def update
  	if @group.update(groups_params)
  		redirect_to group_messages_path(@group), notice: 'グループを編集しました'
  	else
  		render :edit
  	end
  end

  private
  def groups_params
  	params.require(:group).permit(:name, {:user_ids =>[]})
  end

  def set_group
  	@group = Group.find(params[:id])
  end
end
