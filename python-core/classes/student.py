class Student:

    class_year = 2025
    total_number_of_students = 0

    def __init__(self, name, age):
        self.name = name
        self.age = age
        Student.total_number_of_students += 1

student = Student("Kelly", 15)

print(Student.total_number_of_students)
