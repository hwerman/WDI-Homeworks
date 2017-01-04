class Tenant
  def initialize(f_name, l_name, born_on, gender)
    @f_name = f_name
    @l_name = l_name
    @born_on = born_on
    @gender = gender
  end

  def f_name
    @f_name
  end

  def f_name=(f)
    @f_name = f
  end

  def l_name
    @l_name
  end

  def l_name=(l)
    @l_name = l
  end

  def born_on
    @born_on
  end

  def born_on=(b)
    @born_on = b
  end

  def gender
    @gender
  end

  def gender=(g)
    @gender = g
  end

   def nickname
    @nickname
  end

  def nickname=(n)
    @nickname=(n)
  end

  def occupation
    @occupation
  end

  def occupation=(o)
    @occupation=(o)
  end
end

Lolly = Tenant.new("Lolly", "Pop", "Female", "August 7, 1992")

Lolly.nickname="Poppy"
Lolly.occupation="Baker"

# Take the first name of object, nickname of object, and last name of object to output a string
def full_name (tenant)
  puts "#{tenant.f_name} '#{tenant.nickname}' #{tenant.l_name}"
end

full_name(Lolly)
