class Api::ProductsController < ApplicationController
    def create 

    end 

    def index 

    end 

    def show

    end

    private 

    def products_params
        params.require(:params).permit(:)
    end
end
