class ContactsController < ApplicationController
    def create
        debugger
    end

    private

    def contact_params
        params.require(:contact).permit(:message, :subscribe, user_attributes: [:name, :email])
    end
end
