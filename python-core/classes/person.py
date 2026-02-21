class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    # methods
    def walk(self):
        print("Person is walking")
    
    def speak(self):
        print("Person is speaking")


# create an object
john = Person("John", 22)
alice = Person("Alice", 18)

print(f"My name is {john.name} and I am {john.age} years old")
print(f"My name is {alice.name} and I am {alice.age} years old")

# calling the class methods
john.speak()
alice.walk()