from abc import *
from typing import override
from math import pi, pow

class Shape(ABC):
    
    @abstractmethod
    def area(self):
        pass

class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    @override
    def area(self):
        return pi * pow(self.radius, 2)
    

class Square(Shape):
    def __init__(self, width):
        self.width = width

    @override
    def area(self):
        return pow(self.width, 2)


class Triangle(Shape):
    def __init__(self, width, height):
        self.width = width
        self.height = height

    @override
    def area(self):
        return 0.5 * self.height * self.width

circle = Circle("blue", True, 7)
print(circle.is_filled)

print(circle.area())

square = Square("green", False, 5)
print(square.area())

triangle = Triangle("white", False, 10, 8)
print(triangle.area())