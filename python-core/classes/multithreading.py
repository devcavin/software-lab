import threading, time

def sleeping():
    time.sleep(2)
    print("I am waking up")

def take_bath():
    time.sleep(3)
    print("I am done taking shower")

def travel_to_work():
    time.sleep(5)
    print("I have arrived at work")


task1 = threading.Thread(target=sleeping)
task2 = threading.Thread(target=take_bath)
task3 = threading.Thread(target=travel_to_work)

task1.start()
task2.start()
task3.start()

task1.join()
task2.join()
task3.join()

print("I am done with all the tasks")