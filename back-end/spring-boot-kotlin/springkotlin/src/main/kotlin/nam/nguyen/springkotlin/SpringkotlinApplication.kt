package nam.nguyen.springkotlin

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class SpringkotlinApplication

fun main(args: Array<String>) {
	runApplication<SpringkotlinApplication>(*args)
}
