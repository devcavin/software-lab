import uuid
import json

from confluent_kafka import Producer

producer_config = {
    "bootstrap.servers": "localhost:9092"
}

def delivery_report(err, msg):
    if err is not None:
        print(f"Delivery failed: {err}")
    else:
        message = msg.value().decode("utf-8")
        print(f"Message delivered: {message}")

producer = Producer(producer_config)

orders = {
    "order_id": str(uuid.uuid4()),
    "user": "user",
    "item": "noodles",
    "quantity": 5
}

order_value = json.dumps(orders).encode("utf-8")

producer.produce(
    topic="orders",
    value=order_value,
    callback=delivery_report
)

producer.flush()
