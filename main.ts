function check (cislo: number) {
    valueNumber += cislo
    whaleysans.showNumber(valueNumber)
}
input.onButtonPressed(Button.A, function () {
    check(-1)
})
input.onButtonPressed(Button.AB, function () {
    if (!(success)) {
        checkCounter += 1
    }
    if (secretNumber < valueNumber) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            . . # . .
            . . . # .
            `)
    } else if (secretNumber > valueNumber) {
        basic.showLeds(`
            . # . . .
            . . # . .
            . . . # .
            . . # . .
            . # . . .
            `)
    } else {
        success = true
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.B, function () {
    check(1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showNumber(checkCounter)
})
let secretNumber = 0
let valueNumber = 0
let checkCounter = 0
let success = false
success = false
checkCounter = 0
valueNumber = 15
secretNumber = randint(1, 30)
whaleysans.showNumber(valueNumber)
basic.forever(function () {
	
})
