start = '''
You are currently in the latter years of high school and it is time to start thinking about colleges, Are you going to be the student who starts their process early?
Or procrasinate?
'''


print(start)
user_input = input("Type 'early' to go  or 'late' to go .")



if user_input == "early":
	print("You decide to go early and you are motivated!The choice you made is a great one! How will you start college process? You have three choice;decide to research on a college,decide to visit,or find your interest.")
	user_input = input("Type 'research, visit or find ' to indicate what you want to do.")

	if user_input == " research ":
		print("Researching colleges is a great first step. As prospective colleges students of today, information is easily accessible from books to blogs and official college websites of your choice. ")
	elif user_input =="visit":
		print("You are one step closer to your dreams. Visiting schools are a great way to begin to immerse yourself within the college culture.")
	elif user_input =="Find ":
		print("Not only will you be one step closer to your dream school, but you will also be following your dreams.")


 
elif user_input == "late":
	print("You choose to go late, you are board and do not know what to do. Instead of thinking about colleges, what will you do instead? Are you going to be a couch potato and watch neflix, sleep or go hang out with friends.") 
	
	user_input = input("Type 'watch, sleep or go hang out' to indicate what you want to do.")

	if user_input == "watch":
	 	print("The hours fly by while you laugh and laugh at the shows you have been binge watching all day. Are these your dreams,is this what you want to do for the rest of your life")
	elif user_input == "sleep":
	 	print("While you were in dream land, the hours flew by and you were extremely unproductive. The day is over. College is right around the corner")
	elif user_input == input(" go hang out "):
		print("Your day is wasted")