from google.cloud import pubsub_v1
import json

PROJECT_ID = "bigdataarchitecture-michael"
TOPIC_NAME = "twitter_trends"

publisher = pubsub_v1.PublisherClient()
topic_path = publisher.topic_path(PROJECT_ID, TOPIC_NAME)

def callback(message_future):
    # When timeout is unspecified, the exception method waits indefinitely.
    if message_future.exception(timeout=15):
        print('Publishing message on {} threw an Exception {}.'.format(
            TOPIC_NAME, message_future.exception()))
    else:
        print(message_future.result())

def publish_message_to_pubsub_topic(data):
    # Data must be a bytestring

    data = json.dumps(data).encode('utf-8')
    # When you publish a message, the client returns a Future.
    message_future = publisher.publish(topic_path, data=data)
    message_future.add_done_callback(callback)

def main():
     publish_message_to_pubsub_topic({'trends':['America', 'Clinton']})

if __name__ == "__main__":
    # execute only if run as a script
    main()
