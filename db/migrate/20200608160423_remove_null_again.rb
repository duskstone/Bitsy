class RemoveNullAgain < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :first_name, :string
    add_column :users, :first_name, :string
  end
end
