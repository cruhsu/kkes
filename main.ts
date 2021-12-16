input.onButtonPressed(Button.A, function () {
    num = input.acceleration(Dimension.X)
})
let num = 0
pins.digitalWritePin(DigitalPin.P0, 1)
pins.digitalWritePin(DigitalPin.P1, 0)
basic.forever(function () {
    if (Math.abs(num - 20) > 20) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (Math.abs(num - 20) <= 20) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 0)
    }
    basic.showNumber(num)
})
