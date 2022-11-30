class AddColumToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :subscribe, :boolean
  end
end
