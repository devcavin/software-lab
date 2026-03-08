from dataclasses import dataclass, field

@dataclass 
class User:
    name: str
    age: int
    password: str = field(repr=False)