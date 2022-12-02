class ContactsController < ApplicationController

    def index
        render json: Contact.all, include: :user, status: :ok
    end

    def create
        
        user = User.find_by(email: contact_params[:user_attributes][:email])

        if !user
            user = User.create!(name: contact_params[:user_attributes][:name], email: contact_params[:user_attributes][:email])
            user.contacts.create!(message: contact_params[:message])
        else
            user.update!(name: contact_params[:user_attributes][:name])
            user.contacts.create!(message: contact_params[:message])
        end

        render json: user, include: :contacts, status: :created
    end

    private

    def contact_params
        params.require(:contact).permit(:message, user_attributes: [:name, :email])
    end
end
