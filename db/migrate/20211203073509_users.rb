class Users < ActiveRecord::Migration[6.1]
      def change
      create_table :users do |t|
        t.string :first_name
        t.string :last_name
        t.string :email, unique: true
        t.string :password_digest
        t.string :username, unique: true
        t.string :phone_number
        t.string :address
        t.string :city
        t.string :state
        t.integer :zipcode
        t.boolean :admin, default: false
  
        t.timestamps
      end
    end
  end
