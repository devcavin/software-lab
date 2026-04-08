package io.github.devcavin.core

import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.runBlocking
import kotlinx.coroutines.sync.Mutex
import kotlinx.coroutines.sync.withLock
import kotlin.time.Duration.Companion.seconds

fun main() = runBlocking {
    val mutex = Mutex()
    var counter = 0

    repeat(1000) {
        launch(Dispatchers.Default) {
            mutex.withLock {
                counter++
            }
        }
    }
    delay(10.seconds)
    println("Counter: $counter")
}