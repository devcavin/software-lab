import asyncio

async def main():
    print("Started...")
    await foo("This is an async foo method")
    print("Finished")

async def foo(text):
    print(text)
    await asyncio.sleep(1)

asyncio.run(main())