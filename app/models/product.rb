class Product < ApplicationRecord
    validates: :name, :description, :price, presence: true

    # belongs_to :shop,
    # foreign_key :shop_id,
    # class_name :Shop

end
