json.products do 
    json.set! @product.id do 
        json.partial! 'api/products/product', product: @product
    end
end