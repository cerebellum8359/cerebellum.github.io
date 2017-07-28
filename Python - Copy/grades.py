#from numpy import

# Each of our grades
kristen_grades = [90, 85, 100, 77, 94]
clarisse_grades = [96, 83, 89, 97, 86]
sapna_grades = [82, 91, 94, 87, 99]

# Class grade book
grade_book = [kristen_grades, clarisse_grades, sapna_grades]

'''
This is what our grade book looks like
[	[90, 85, 100, 77, 94]
	[96, 83, 89, 97, 86]
	[82, 91, 94, 87, 99] ]

'''

# Traverse through the grade book and print all the indivdual grades
for g in grade_book:
	for n in g:
		print (n)


# Extensions: Find the class average, median, and standard deviation
# (For the extentions google for hints!)
sum(kristen_grades)
len(kristen_grades)
sum(kristen_grades)/len(kristen_grades)
print(sum(kristen_grades)/ len(kristen_grades))

sum(clarisse_grades)
len(clarisse_grades)
sum(clarisse_grades)/len(clarisse_grades)
print(sum(clarisse_grades))/len(clarisse_grades)


sum(sapna_grades)
len(sapna_grades)
sum(sapna_grades)/ len(sapna_grades)
print(sum(sapna_grades))/ len(sapna_grades)


Averages = [89,90,90]
sum(Averages)
len(Averages)
sum(Averages)/len(Averages)
print(sum(Averages))/len(Averages)


# Super extra extensions: calculate the student with highest/lowest average
