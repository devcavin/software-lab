class Employee:
    def __init__(self, name, position):
        self.name = name
        self.position = position

    def get_info(self):
        return f"{self.name} = {self.position}"

    
    @staticmethod
    def is_valid_position(position):
        valid_positions = ["Manager", "Engineer", "Clerk", "Officer"]

        return position in valid_positions
    

employee = Employee("Sarah", "Manager")
print(employee.is_valid_position(employee.position))