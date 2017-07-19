start = '''
You are currently in the latter years of high school and it is time to start thinking about colleges, Are you going to be the student who starts their process early?
Or procrasinate?
'''


print(start)


print("Type 'early' to go  or 'late' to go .")
user_input = input()
if user_input == "early":
	print("You decide to go early and you are motivated!The choice you made is a great one! How will you start college process? You have three choice;decide to research on a college,decide to visit,or find your interest.")
	user_early =='early'("decide to research on college,decide to visit,or find your interest")
	if user_input == "decide to research colleges":
		print("The hours fly by while you laugh and laugh and the shows you have been binge watching all day.")
	elif user_input =="decide to visit colleges":
		print("While you were in dream land, the hours flew by and you were extremely unproductive. The day is over")
	elif user_input =="Find your interest":
		print("Your day is wasted")


 
elif user_input == "late":
	print("You choose to go late, you are board and do not know what to do. Instead of thinking about colleges, what will you do instead? Are you going to be a couch potato and watch neflix, sleep or go hand out with friends.") 
	if user_input == ("watch netflix"):
	 	print("You have concluded the school you want to decide to visit")
	elif user_input == ("Take a long nap"):
	 	print("You realize you are one step closer to freedom")
	elif user_input == ("Go hang out with friends"):
		print("Not only will you be attending a school you want but also what you want")