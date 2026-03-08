from dataclasses import dataclass

@dataclass # (frozen = True) # makes the objects immutable
class Plant:
    name: str
    is_green: bool = True

plant = Plant("Maize")

print(plant.is_green)
print(plant.name)