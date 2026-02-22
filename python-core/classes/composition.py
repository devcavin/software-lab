class Engine:
    def __init__(self, horse_power):
        self.horse_power =horse_power

class Wheel:
    def __init__(self, size):
        self.size = size


class Car:
    def __init__(self, make, model, horse_power, wheel_size):
        self.make = make
        self.model = model
        self.horse_power = Engine(horse_power)
        self.wheel_size = [Wheel(wheel_size) for wheel in range(4)]


