# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Product.destroy_all

u1 = User.create(email: 'jon@gmail.com', password: '123456'. first_name: 'Jon')
u2 = User.create(email: 'squid@gmail.com', password: 'qwerty', first_name: 'Squid')
u3 = User.create(email: 'jelsoon@gmail.com', password: '123456', first_name: 'Jelzon')
u4 = User.create(email: 'keebler@gmail.com', password: 'qwerty', first_name: 'Chantiago')
u5 = User.create(email: 'pepperoni@gmail.com', password: '123456', first_name: 'Tony')
u6 = User.create(email: 'mario@gmail.com', password: 'qwerty', first_name: 'Mario')
u7 = User.create(email: 'artorias@lodran.com', password: '123456', first_name: 'Artorias')
u8 = User.create(email: 'crypto@apex.com', password: 'qwerty', first_name: 'Cyrpto')
u9 = User.create(email: 'pathfinder@apex.com', password: '123456', first_name: 'Path')
u10 = User.create(email: 'loba@apex.com', password: 'qwerty', first_name: 'Loba')
