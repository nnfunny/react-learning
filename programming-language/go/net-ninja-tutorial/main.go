package main

import  (
  "strings"
  "fmt"
)

func getInitials(n string) (string, string) {
  s := strings.ToUpper(n)
  name := strings.Split(s, " ")

  var initials []string

  for _, value := range name {
    initials = append(initials, value[:1])
  }

  if (len(initials) > 1) {
    return initials[0], initials[1]
  }

  return initials[0], "_"
}

func main() {
  first, second := getInitials("nam nguyen")

  fmt.Println(first, second)
}
