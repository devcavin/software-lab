class Staff:
    def __init__(self, name):
        self._name = name

    @property
    def name(self):
        return self._name
    
    @name.setter
    def name(self, value):
        self._name = value

    @name.deleter
    def name(self):
        del self._name


staff1 = Staff("John")
staff2 = Staff("Mary")


del staff1.name

print(staff2.name)