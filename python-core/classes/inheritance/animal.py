from typing import override

class Animal:
    def __init__(self, name, isAlive = True):
        self.name = name
        self.isAlive = isAlive
    
    def eat(self):
        return f"{self.name} is eating"

    def sleep(self):
        return f"{self.name} is sleeping"


class Cat(Animal):

    @override
    def eat(self):
        return f"{self.name} is eating a mouce"

    def sound(self):
        return f"Meow!"


my_cat = Cat("Bruno")
print(my_cat.eat())