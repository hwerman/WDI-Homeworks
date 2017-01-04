SECRET_NUMBER = 7
#setting a constant to equal 7
guessed = false
#setting a variable to equal false

puts('I\'m thinking of a number between 1 and 10. Can you guess it?')
  #this line will print the above sentence and then break to the next line.

while !guessed
  #indicates a while loop - while NOT guessed
  guess = gets.chomp.to_i
  # you'll chomp off the end of the guess and what's left will be converted to an integer
  if SECRET_NUMBER == guess
    #if the guess is exactly 7
    guessed = true
    #change the value of guessed the variable to be true
  else
    #if not
    puts("#{guess}? Try again!")
    #print out the guess that the user input and say try again
  end
    #close the if/else
end
#close the while loop

$stdout.puts('Great job!')
#Great job to the winners

# SECRET_NUMBER = 7
# guessed = false
# puts('I\'m thinking of a number between 1 and 10. Can you guess it?')
# while !guessed
#     guess = gets.chomp.to_i
#   if SECRET_NUMBER == guess
#     guessed = true
# else
#     puts("#{guess}? Try again!")
# end
# end
# $stdout.puts('Great job!')

