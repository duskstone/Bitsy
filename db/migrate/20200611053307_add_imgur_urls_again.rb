class AddImgurUrlsAgain < ActiveRecord::Migration[5.2]
  def change
    add_column :products, :imageUrl, :string
  end
end
