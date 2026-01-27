import json

from confluent_kafka import Consumer

consumer_config = {
    "bootstrap.servers": "localhost:9092",
    "group.id": "order-tracker",
    "auto.offset.reset": "earliest"
}

consumer = Consumer(consumer_config)

consumer.subscribe(["orders"]) # you can add several topics 

try:
    while True:
        message = consumer.poll(1.0)
        if message is None:
            continue
        
        if message.error():
            print(f"Error, {message.error()} occured!")
            continue

        new_message = message.value().decode("utf-8")
        new_order = json.loads(new_message)

        print(
        f"Received order: {new_order['quantity']}, "
        f"{new_order['item']} from {new_order['user']}"
        )
except KeyboardInterrupt:
    print("Stopping consumer")
finally:
    consumer.close()