# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "Destroy Tables"

OrderItem.destroy_all
Order.destroy_all
Product.destroy_all
User.destroy_all




puts "Seed data"
users=[]
orders_items=[]
orders=[]
products=[]
payments_accepted=["Visa", "PayPal", "Venmo"]

r=rand(1..50) #randome price in Procducts
random_boolean = [true, false].sample

# same = rand(0..3) #random hash in type array
type = [
    { "suit" => "https://tinyurl.com/6k2fmt3x"},
   {"shirt"=> "https://bit.ly/3F7twvT"},
    {"pants"=>"https://bit.ly/3wxiInA"}, 
    {"jacket"=>"https://tinyurl.com/8sycvdcv"} 
]


# generate 10 users
puts "Seeding users"

5.times do 
    u= User.create!(
        first_name: Faker::Name.unique.name,
        last_name:  Faker::Name.last_name,
        email:  Faker::Internet.email,
        password: "abc123",
        username:  Faker::Twitter.screen_name,
        phone_number:  Faker::PhoneNumber.cell_phone,
        address: Faker::Address.street_address,
        city:  Faker::Address.city,
        state:  Faker::Address.state_abbr,
        zipcode:  Faker::Address.zip_code,
        admin: random_boolean, 
        available: random_boolean
    )
    users<<u
end
    puts "Done seeding users"

    puts "Seeding products"
    40.times do 
        same = rand(0..3) #random hash in type array
    p= Product.create!(
        user_id: users.sample.id,
        category: type[same].keys.join,
        size: rand(0..15),
        price: rand(10..50),
        photo:  type[same].values.join,
        review_stars: rand(1..5),
        review: Faker::Restaurant.review  
    )
    products<<p
end
puts "Done seeding products"


puts "Seeding Orders"
10.times do
    o = Order.create!(      
            total: rand(0..600),
            pay_method: payments_accepted.sample,
            user_id: users.sample.id
   
    )
    orders<<o

 


end

puts "Seeding orders done!"



puts "Seeding orders_items"
10.times do 
    oi= OrderItem.create!(
        customer_id: users.sample.id,
        product_id:products.sample.id,
        order_id:orders.sample.id
    )
orders_items<<oi
end

puts "Done seeding order_items"


puts "Seeding Done 😁 "












