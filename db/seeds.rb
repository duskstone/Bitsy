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


product1 = Product.create({name:"Registeel Print", description:" from the Silphwave Collection ", price: 10.99, shop_id: 1, imageUrl:"https://i.imgur.com/ne3o7yh.jpg" })
product2 = Product.create({name:"Zapados Print", description:" from the Silphwave Collection ", price: 10.99, shop_id: 2, imageUrl:"https://i.imgur.com/kNdPAy7.jpg" })
product3 = Product.create({name:"Toe Stubbed TMNT Pins", description: "malformed gargantuan turtles during a time of pain and crisis", price: 7.99, shop_id:5, imageUrl:"https://i.imgur.com/m3awXDP.jpg"})
product4 = Product.create({name:"Mewtwo Print", description:" from the Silphwave Collection ", price: 10.99, shop_id: 1, imageUrl:"https://i.imgur.com/XRR8fod.jpg" })
product5 = Product.create({name:"Umbreon Print", description:" from the Silphwave Collection ", price: 10.99, shop_id: 2, imageUrl:"https://i.imgur.com/dzRkLOm.jpg" })
product6 = Product.create({name:"Pokemon Starter Scene Diorama", description:"from the Silphwave Collection", price: 10.99, shop_id:2, imageUrl:"https://i.imgur.com/twHwC9U.jpg"})
product7 = Product.create({name:"Pika Ash Traveling Pin", description:"Pixel Styled Enamel pin set. Ash and Pika Traveling", price: 8.99, shop_id:1, imageUrl:"https://i.imgur.com/mQIM1zF.jpg"})
product8 = Product.create({name:"Avocado Sticker", description:"pixel avacado sticker perfect for laptops", price: 3.99, shop_id:4, imageUrl:"https://i.imgur.com/CpipPXw.jpg"})
product9 = Product.create({name:"Baby Yoda Sipping lil cup", description:"pixel Baby Yoda sticker poifect for notebooks", price: 3.99, shop_id:3, imageUrl:"https://i.imgur.com/kef2KgN.jpg"})
product10 = Product.create({name:"Espeon Print", description:"from the Silhwave Collection", price: 10.99, shop_id:1, imageUrl:"https://i.imgur.com/oZh0B7G.jpg"})
product11 = Product.create({name:"GBA Crossbones Enamel Pin", description:"16-bit style enamel pin", price: 7.99, shop_id:2, imageUrl:"https://i.imgur.com/hKbW31m.jpg"})
product12 = Product.create({name:"Heracross Print", description:"from the Silphwave Collection", price: 10.99, shop_id:1, imageUrl:"https://i.imgur.com/mPVm9bQ.jpg"})
product13 = Product.create({name:"Link Awakening Pixel Style Sticker", description:"pixel Link perfect for stuffs", price:3.99, shop_id:3, imageUrl:"https://i.imgur.com/EHJNbmN.jpg"})
product14 = Product.create({name:"Mando Sticker", description:"pixel Mando sticker perfect for mugs", price: 3.99, shop_id:1, imageUrl:"https://i.imgur.com/9lpLHF9.jpg"})
product15 = Product.create({name:"Mario Kart Diorama", description:"handmade mariokart diorama", price: 20.99, shop_id:1, imageUrl:"https://i.imgur.com/cWLWLMO.jpg"})
product16 = Product.create({name:"Mega-Man Diorama", description:"handmade mariokart diorama", price: 20.99, shop_id:2, imageUrl:"https://i.imgur.com/5fJkDRV.jpg"})
product17 = Product.create({name:"Blue Bomb Enamel pin set", description:"an explosion of cutness waiting to be shown off", price: 12.99, shop_id:3, imageUrl:"https://i.imgur.com/zdgAY44.jpg"})
product18 = Product.create({name:"Pixel Ribbon set", description:"a collection of pixel ribbons", price: 13.99, shop_id:6, imageUrl:"https://i.imgur.com/bkMx4lC.jpg"})
product19 = Product.create({name:"Alien Pixel Poster", description:"outspace horror", price: 20.99, shop_id:5, imageUrl:"https://i.imgur.com/ZBgIAvd.jpg"})
product20 = Product.create({name:"Pixel Family Photo", description:"custom family photos in pixel style", price: 15.99, shop_id: 8, imageUrl:"https://i.imgur.com/GDcEj8M.jpg"})
product21 = Product.create({name:"Pixel Wedding Photo", description:"custom wedding photo in pixel style", price: 12.99, shop_id: 8, imageUrl:"https://i.imgur.com/vHnpicl.jpg"})
product22 = Product.create({name:"Enamel Pizza Slice", description:"enamel pizza pin (caution do not eat)", price: 7.99, shop_id: 4, imageUrl:"https://i.imgur.com/UvSTxTo.jpg"})
product23 = Product.create({name:"SMB3 Diorama", description:"handmade 3D diorama", price: 21.99, shop_id:3, imageUrl:"https://i.imgur.com/oV4iMfv.jpg"})
product24 = Product.create({name:"Holographic Storm Trooper Sticker", description:"Storm Trooper sticker perfect for VHS", price: 4.99, shop_id:5, imageUrl:"https://i.imgur.com/dBDgJdx.jpg"})



