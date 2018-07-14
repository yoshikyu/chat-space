module ControllerMacros
  def login(user)
    @request.env["devise.mapping"] = Devise.mapping[:user]
  end
end