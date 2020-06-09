# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# require 'open-uri'

User.destroy_all
Product.destroy_all

u1 = User.create(email: 'jon@gmail.com', password: '123456', first_name: 'Jon')
u2 = User.create(email: 'squid@gmail.com', password: 'qwerty', first_name: 'Squid')
u3 = User.create(email: 'jelsoon@gmail.com', password: '123456', first_name: 'Jelzon')
u4 = User.create(email: 'keebler@gmail.com', password: 'qwerty', first_name: 'Chantiago')
u5 = User.create(email: 'pepperoni@gmail.com', password: '123456', first_name: 'Tony')
u6 = User.create(email: 'mario@gmail.com', password: 'qwerty', first_name: 'Mario')
u7 = User.create(email: 'artorias@lodran.com', password: '123456', first_name: 'Artorias')
u8 = User.create(email: 'crypto@apex.com', password: 'qwerty', first_name: 'Cyrpto')
u9 = User.create(email: 'pathfinder@apex.com', password: '123456', first_name: 'Path')
u10 = User.create(email: 'loba@apex.com', password: 'qwerty', first_name: 'Loba')

# link1 = open("https://66.media.tumblr.com/d5db00b517a3629d51f08708706b5ce5/aede7c8ddc1f631d-80/s1280x1920/9f50e5fc85914881e47c6c8f49493829ed855a80.png")
# link2 = open("https://66.media.tumblr.com/39f0e75a5c7685b01d9a172466e7bcff/6254dd416aeec4df-7f/s1280x1920/b14cb7bce3adc2813827c7b85b866b7f6826c4ac.png")
# link3 = open("https://66.media.tumblr.com/b79a15ad1e5effe9bef23cd8f8d48371/7fb0645e9f38321e-4b/s1280x1920/81fdf660323dc0fd63e3a13cf653c42d43c568f9.jpg")
# link4 = open("https://66.media.tumblr.com/d55399a9f1e26010dd3ccbbfb2fc7fdd/1e4db40830176d14-ac/s1280x1920/17ccc125a66cf33521f21707517ebc90e281f1f9.png")
# link5 = open("https://66.media.tumblr.com/1dc549ebe66af0ec4c60bfae48a8cd40/8392506ffb0f5b3a-29/s1280x1920/ff66293cc80012871115cd87c291791822d76b1b.png")


product1 = Product.create!({name:"Slowking Print ", description:" from the Silhwave Collection ", price: 10.99, shop_id: 1 })
product2 = Product.create!({name:"Onix Print ", description:" from the Silhwave Collection ", price: 10.99, shop_id: 2 })
product3 = Product.create!({name:"Heracross Print ", description:" from the Silhwave Collection ", price: 10.99, shop_id: 3 })
product4 = Product.create!({name:"Mewtwo Print ", description:" from the Silhwave Collection ", price: 10.99, shop_id: 1 })
product5 = Product.create!({name:"Umbreon Print ", description:" from the Silhwave Collection ", price: 10.99, shop_id: 2 })

# product1 = photo.attach(io: link1, filename: '9f50e5fc85914881e47c6c8f49493829ed855a80.png')
# product2 = photo.attach(io: link2, filename: 'b14cb7bce3adc2813827c7b85b866b7f6826c4ac.png')
# product3 = photo.attach(io: link3, filename: '81fdf660323dc0fd63e3a13cf653c42d43c568f9.jpg')
# product4 = photo.attach(io: link4, filename: '17ccc125a66cf33521f21707517ebc90e281f1f9.png')
# product5 = photo.attach(io: link5, filename: 'ff66293cc80012871115cd87c291791822d76b1b.png')