package main

import  (
  "strings"
  "fmt"
)

func main() {
  greeting := "Hello there friends"

  fmt.Println(strings.Contains(greeting, "hello"))
  fmt.Println(strings.ReplaceAll(greeting, "Hello", "hi"))
  fmt.Println(strings.Index(greeting, "th"))
}
