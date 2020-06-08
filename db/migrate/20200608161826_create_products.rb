class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :name, null: false
      t.text :description, null: false
      t.decimal :price, precision:10, scale: 2, null: false
      t.integer :shop_id, null: false
      
      t.timestamps
    end

    add_index :products, :shop_id
  end
end
