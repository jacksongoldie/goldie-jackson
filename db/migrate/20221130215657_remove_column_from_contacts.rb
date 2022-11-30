class RemoveColumnFromContacts < ActiveRecord::Migration[7.0]
  def change
    remove_column :contacts, :subscribe, :string
  end
end
