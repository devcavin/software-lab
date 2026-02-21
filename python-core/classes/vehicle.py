from abc import ABC, abstractmethod
from typing import override

class Vehicle(ABC):
    @abstractmethod
    def move(self):
        pass

    @abstractmethod
    def stop(self):
        pass


class Car(Vehicle):
    @override
    def move(self):
        return f"The car is moving"
    
    @override
    def stop(self):
        return f"The car is stopped"