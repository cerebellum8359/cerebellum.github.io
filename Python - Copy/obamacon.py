from PIL import Image

# RGB values for recoloring.
darkBlue = (0, 51, 76)
red = (217, 26, 33)
lightBlue = (112, 150, 158)
yellow = (252, 227, 166)

# Import image
# change IMAGENAME to the path on your computer to the image 
# you're using'''

my_image = Image.open("brain.jpg") 

# each pixel is represented in the form 
# (red value, green value, blue value, transparency)
image_list = my_image.getdata()  

# Turns the sequence above into a list, it can be iterated through

image_list = list[image_list]

# list that will hold the pixel data for the new image
recolored = [] 
#**************************************************#
#**************************************************#
for x in image_list:
	image_list = [(400,200,50),(300,150,30), (200,100,20)]
	intensity = x[0] + x[1] + x[2]
	if intensity > 546:
		recolored.append(yellow)
	elif intensity >= 364 and =< 546:
		recolored.append(lightBlue)
	elif intensity >= 182 and =< 364:
		recolored.append(red)




#**************************************************#
#**************************************************#
# Create a new image using the recolored list. Display and save 
# the image.

# Creates a new image that will be the same size as the original
new_image = Image.new("RGB", my_image.size)

# Adds the data from the recolored list to the image
new_image.putdata(recolored)

# Opens the new image on the screen
new_image.show() 

# Saves the new image as "recolored.jpg"
new_image.save("recolored.jpg", "jpeg") 