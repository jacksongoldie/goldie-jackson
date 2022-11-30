class ContactsController < ApplicationController
    def create
        user = User.find_by(email: contact_params[:user_attributes][:email])
debugger
        if !user
            user = User.create!(name: contact_params[:user_attributes][:name], email: contact_params[:user_attributes][:email], subscribe: contact_params[:subscribe])
            user.contacts.create!(message: contact_params[:message])
        else
            user.contacts.create!(message: contact_params[:message])
        end

        render json: user, include: :contacts, status: :created
    end

    private

    def contact_params
        params.require(:contact).permit(:message, :subscribe, user_attributes: [:name, :email])
    end
end
