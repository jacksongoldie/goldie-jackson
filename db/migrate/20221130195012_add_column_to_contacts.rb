class AddColumnToContacts < ActiveRecord::Migration[7.0]
  def change
    add_column :contacts, :subscribe, :boolean, null: false
  end
end
