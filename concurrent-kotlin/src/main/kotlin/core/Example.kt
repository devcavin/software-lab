package io.github.devcavin.core

import kotlinx.coroutines.*
import kotlin.time.Duration.Companion.milliseconds

suspend fun doSomethingSlowly() {
    delay(timeMillis = 500)
    println("I am done")
}

private var zeroTime = System.currentTimeMillis()

fun log(message: Any?) {
    println("${System.currentTimeMillis() - zeroTime}ms" + "[${Thread.currentThread().name}]: $message")
}

suspend fun slowlyAddNumbers(a: Int, b: Int): Int {
    log("Waiting a bit before calculating $a + $b")
    delay(100.milliseconds * a)
    return a + b
}

fun main() = runBlocking {
    /*log("The first parent coroutine starts")

    launch {
        log("The second parent coroutine starts and is ready to be suspended")
        println("State: ${Thread.currentThread().state}")
        delay(100)
        log("The second coroutine is resumed")
        println("State: ${Thread.currentThread().state}")
    }
    launch {
        log("The third coroutine can run in the meantime")
    }

    log("The first coroutine has launched two more coroutines")*/

    log("Starting the async computation")
    val myFirstDeferred = async { slowlyAddNumbers(2, 2) }
    val mySecondDeferred = async { slowlyAddNumbers(4, 4) }
    log("Waiting for the deferred value to be available")
    log("The first result: ${myFirstDeferred.await()}")
    log("The second result: ${mySecondDeferred.await()}")
}