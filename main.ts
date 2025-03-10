let bAşLaNgIç_zAmAnI = 0
let PARlakLIK = 0
input.onButtonPressed(Button.A, function () {
    bAşLaNgIç_zAmAnI = input.runningTime()
    PARlakLIK = 255
    basic.pause(2000)
})
basic.forever(function () {
    if (PARlakLIK > 0) {
        PARlakLIK += -3
    }
    led.plotBrightness(randint(0, 4), randint(0, 4), PARlakLIK)
})
