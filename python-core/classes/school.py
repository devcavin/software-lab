class School:
    count = 0

    def __init__(self, name):
        self.name = name
        School.count += 1

    def get_info(self):
        return f"{self.name}"
    
    # class method
    @classmethod
    def get_count(cls):
        return f"{cls.count}"
    

school = School("YouTube University")

print(school.count)