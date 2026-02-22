# decorator function
def add_sprinkles(some_func):
    def wrapper():
        print("You added sprinkles!")
        some_func()

    return wrapper

def add_fudge(func):
    def wrapper():
        print("You add fudge")
        func()
    
    return wrapper

@add_sprinkles
@add_fudge
def get_ice_cream():
    print("Here is your ice cream!")

get_ice_cream()