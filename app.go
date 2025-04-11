package main

import (
	"context"
	"fmt"
	"strconv"
	"strings"
	"time"

	"golang.org/x/text/cases"
	"golang.org/x/text/language"
)

// ? TODO: Make a system for making an algorithm that based on ppl stats give a percentage.
type Person struct {
	Name   string
	Age    int
	Weight int
	Height int
}

// App struct
type App struct {
	ctx context.Context
}

// NewApp creates a new App application struct
func NewApp() *App {
	return &App{}
}

// startup is called at application startup
func (a *App) startup(ctx context.Context) {
	// Perform your setup here
	a.ctx = ctx
}

// domReady is called after front-end resources have been loaded
func (a App) domReady(ctx context.Context) {
	// Add your action here
}

// beforeClose is called when the application is about to quit,
// either by clicking the window close button or calling runtime.Quit.
// Returning true will cause the application to continue, false will continue shutdown as normal.
func (a *App) beforeClose(ctx context.Context) (prevent bool) {
	return false
}

// shutdown is called at application termination
func (a *App) shutdown(ctx context.Context) {
	// Perform your teardown here
}

// GenerarRandomPercent generates a random percentage between min and max using LGC algorithm https://en.wikipedia.org/wiki/Linear_congruential_generator.
func (a *App) GenerarRandomPercent(min, max int) (string, error) {
	var seed uint64 = uint64(time.Now().UnixNano())
	const b = 1664525
	const c = 1013904223

	const m = 1 << 32

	seed = (b*seed + c) % m
	return strconv.Itoa(int(seed%uint64(max-min+1))+min) + "%", nil
}

// Sum returns the sum of two numbers started as a string.
func (a *App) Sum(x, y string) (string, error) {
	z, _ := strconv.Atoi(x)
	c, _ := strconv.Atoi(y)
	res := strconv.Itoa(z + c)

	return fmt.Sprint(res), nil
}

// Amar, main alogorithm for the app, returns a string with the result of the algorithm which is the percentage of love between two people.
func (a *App) Amar(x, y string) (string, error) {
	c := cases.Title(language.Spanish)
	angelNames := []string{"angel", "goldo", "alt-f4", "altf4", "la masa", "el planeta", "goido"}
	loveNames := []string{"vaiolet", "titito", "hendrick", "onielkis", "german", "titita"}

	// contains checks if a given string is present in a list
	contains := func(s []string, str string) bool {
		for _, v := range s {
			if v == str {
				return true
			}
		}
		return false
	}

	def := c.String(x) + " ama a " + c.String(y) + " un "
	x = strings.ToLower(x)

	y = strings.ToLower(y)

	// switch that checks for predefined answers
	switch {
	//	case x == "vaiolet" && y == "titito" || x == "titito" && y == "vaiolet":
	case contains(loveNames, x) && !contains(loveNames, y) || !contains(loveNames, x) && contains(loveNames, y):
		if contains(loveNames, x) {
			def = c.String(x) + " no quiere a nadie mas que no sea su mujer."
		} else if x == "jose luis" || x == "jl" {
			percent, _ := a.GenerarRandomPercent(0, 100)
			def += percent
		} else if y == "jose luis" || y == "jl" {
			percent, _ := a.GenerarRandomPercent(0, 100)
			def += percent
		} else {
			def = c.String(y) + " no quiere a nadie mas que no sea su mujer."
		}
		return fmt.Sprint(def), nil

	case contains(loveNames, x) && contains(loveNames, y):
		def = "CLARIO QUE NOS AMAMOS (que te pasa?)"
		return fmt.Sprint(def), nil
		//	case x == "angel" || y == "angel" || x == "goldo" || y == "goldo":
	case contains(angelNames, x) || contains(angelNames, y):
		def = "NO GOLDO, NADIE TE AMA, AQUEROSO"
		return fmt.Sprint(def), nil
	default:
		percent, _ := a.GenerarRandomPercent(0, 100)
		def += percent
	}

	return fmt.Sprint(def), nil
}
