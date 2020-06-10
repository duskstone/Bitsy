class Api::ProductsController < ApplicationController
    def create 
        @product = Product.new(products_params)

        if product.save 
            render :show 
        else 
            render json: @products.errors.errors_full_messages, status: 422
        end 
    end 

    def index 
        if Product.all
            @products = Product.all
            render :index 
        else 
            render json: @products.errors_full_messages, status: 422
        end
    end 

    def show
        @Product = Product.find(params[:id])
    end

    def destroy
        @product = Product.find(params[:id])

        if@product.destroy
            render :show 
        else 
            render json: @product.errors_full_messages, status: 422
        end 
    end

    private 

    def products_params
        params.require(:params).permit(:name, :description, :price, :shop_id)
    end
end
