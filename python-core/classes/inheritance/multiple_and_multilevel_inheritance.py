from typing import override

class Animal:
    def eat(self):
        pass

    def sleep(self):
        pass

class Prey(Animal):
    def flee(self):
        pass

class Predator(Animal):
    def hunt(self):
        pass

class Fish(Prey, Predator):
    @override
    def flee(self):
        return f"Fish is fleeing"
    
    @override
    def hunt(self):
        return f"Fish is hunting"

class Rabbit(Prey):
    @override
    def flee(self):
        return f"Rabbit is fleeing"
    
    @override
    def eat(self):
        return f"Rabbit is eating grass"

class Hawk(Predator):
    @override
    def hunt(self):
        return f"Hawk is hunting"
    

fish = Fish()
list_of_fish_methods = [fish.flee(), fish.hunt()]

for method in list_of_fish_methods:
    print(method)


rabbit = Rabbit()
print(rabbit.eat())