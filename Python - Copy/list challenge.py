import random 

#List of first and last names
names = ["James", "Carter", "Addison", "Kate", "Gernard", "Billy"]
last = ["smith","johnson", "duggan", "doe", "riley","brown","test"]

#List of names already used
names_used = []
last_names_used = []

for index in range(len(names)):

	random_num1 = random.randint(0, (len(names) - 1))

	random_num2 = random.randint(0, 5)
	#Get a random index for first and last name,save them
	random_first = names[random_num1]
	random_last = last[random_num2]
	#If random first name was used, pick another



	while random_first in names_used:
		random_num1 = random.randint(0, len(names)-1)
		random_first = names[random_num1]
		#If random last name was used, pick another

	while random_last in last_names_used:	
		random_num2 = random.randint(0, len(last_names)-1)
		random_last = names[random_num2]
		#Add the names used to their lists

		names_used.append(random_first)
		last_names_used.append(random_last)
		#Print the name
	print(random_first + " " + random_last)