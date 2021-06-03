package main

type bill struct {
	name  string
	items map[string]float64
	tips  float64
}

// make new bill
func newBill(name string) bill {
	b := bill{
		name:  name,
		items: map[string]float64{},
		tips:  0,
	}

	return b
}
