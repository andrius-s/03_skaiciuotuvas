input.onButtonPressed(Button.A, function () {
    skaicius += 2
    basic.showNumber(skaicius)
})
input.onButtonPressed(Button.B, function () {
    skaicius += -2
    basic.showNumber(skaicius)
})
input.onPinPressed(TouchPin.P1, function () {
    skaicius = 0
    basic.showNumber(skaicius)
})
let skaicius = 0
skaicius = 5
basic.showNumber(skaicius)
