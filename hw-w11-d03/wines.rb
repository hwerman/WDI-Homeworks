wine_cellar = [
  { :label => "Rutherford Hill", :type => "Chardonnay", :color => "red" },
  { :label => "Nina Veneto", :type => "Pinot Grigio", :color => "white" },
  { :label => "Wairau River", :type => "Sauvignon Blanc", :color => "white" },
  { :label => "Tangley Oaks", :type => "Merlot", :color => "red" },
  { :label => "Chimney Rock", :type => "cabernet Sauvignon", :color => "red" },
  { :label => "Sanford", :type => "Pinot Noir", :color => "red" },
  { :label => "Alderbrook", :type => "Pinot Noir", :color => "red" },
  { :label => "Colavita", :type => "Pinot Noir", :color => "red" },
  { :label => "Markham", :type => "Chardonnay", :color => "white" },
  { :label => "Angeline", :type => "Pinot Noir", :color => "red" }
]

# 1)
#accessing the third hash
def saved_for_special_occasion(array)
  puts array[2]
end
saved_for_special_occasion(wine_cellar)

# 2)
#accessing the fourth hash
def swill(array)
  puts array[3]
end
swill(wine_cellar)


# 3)
#changing red to white
wine_cellar[0][:color]="white"

# 4)
#adding another item to the end of the array
wine_cellar.push({label: "The Valley", type: "Pinot Noir", color: "red"})

# 5)
def retrieves_random_wine_for_party(array)
  array.delete_at(rand(array.length))
end

retrieves_random_wine_for_party(wine_cellar)


