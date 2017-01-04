require_relative 'tenant.rb'

class Apartment
  def initialize(unit, num_beds, num_baths)
    @unit = unit
    @num_beds = num_beds
    @num_baths = num_baths
    @tenants = []
    @price = num_baths * 500 + num_beds * 1000
  end

  def unit
    @unit
  end

  def unit=(u)
    @unit = u
  end

  def num_beds
    @num_beds
  end

  def num_baths
    @num_baths
  end

  def tenants
    @tenants
  end

  def studio?
    @studio = num_beds==1? true : false
  end

  def empty?
    @empty = tenants.length > 0 ? false : true
  end

  def move_in(brand_new_tenant)
    if full?
      "We're full! #{brand_new_tenant.f_name} can't move in"
  else
    @tenants << brand_new_tenant
    end
  end

   def price
    @price
  end

  def full?
    @full = tenants.length == num_beds ? true : false
  end

end
#alternate way of doing the above:
# class Apartment
#   attr_accessor :unit, :num_beds, :num_baths, :tenant, :price, :studio
#   def initialize(unit, num_beds, num_baths)
#     @unit = unit
#     @num_beds = num_beds
#     @num_baths = num_baths
#     @tenant = tenant
#     @price = num_baths * 500 + num_beds * 1000
#     @studio = num_beds ==1 ? true : false
#   end
# end

the_grand_budapest_hotel = Apartment.new(4, 4, 2)

#write a method that will put true if it's a studio, otherwise false
# def studio(apt)
#   if apt.num_beds == 1
#     true
#   elsif apt.num_beds > 1
#     false
#   end
# end

# end

Jodi = Tenant.new("Jodi", "Marcus", "February 1, 1990", "Female")
Ferrero = Tenant.new("Ferrero", "Rocher", "April 27, 1987", "Male")
Derek = Tenant.new("Derek", "Groger", "November 27, 1987", "Male")
John = Tenant.new("John", "Wacksadasacle", "September 27, 1987", "Male")

the_grand_budapest_hotel.move_in(Jodi)
the_grand_budapest_hotel.move_in(Ferrero)
the_grand_budapest_hotel.move_in(Derek)
the_grand_budapest_hotel.move_in(John)

puts the_grand_budapest_hotel.tenants
puts the_grand_budapest_hotel.empty?
puts the_grand_budapest_hotel.full?

Rachel = Tenant.new("Rachel", "Doppel", "March 4, 1988", "Female")
puts the_grand_budapest_hotel.move_in(Rachel)

