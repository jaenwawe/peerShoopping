class UserSerializer < ActiveModel::Serializer
  attributes  :id, :first_name, :last_name, :username,  :email,  :city, :state, :zipcode, :admin

end
