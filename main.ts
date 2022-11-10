let c = 0
let F = 0
input.onButtonPressed(Button.A, function () {
    c = input.temperature()
    basic.showString("" + (c))
})
input.onButtonPressed(Button.B, function () {
    F = c * 1.8 + 32
    basic.showString("" + (F))
})
