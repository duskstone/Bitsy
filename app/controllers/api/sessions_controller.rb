class Api::SessionsController < ApplicationController
    
    # skip_before_action :verify_authenticity_token

    def create  
      
    email = (params[:user][:email])
    password = (params[:user][:password])


    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    user_email = User.find_by_email(params[:user][:email])

    if email == "" || password == ""
      render json: ["Can't be blank."], status: 401
    elsif user_email && @user.nil?
      render json: ["Password was incorrect."], status: 401
    elsif @user.nil?
      render json: ["Email address is invalid."], status: 401
    else
      login(@user)
      render "api/users/show"
    end

  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Must be signed in"], status: 404
    end
  end

end
