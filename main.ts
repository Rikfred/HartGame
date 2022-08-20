input.onButtonPressed(Button.A, function () {
    if (liv > 0) {
        paus = 0
        for (let index = 0; index < liv; index++) {
            basic.clearScreen()
            basic.showIcon(IconNames.Heart)
            basic.clearScreen()
            basic.pause(400)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    if (paus == 0) {
        paus = 1
        if (liv > 0) {
            liv += -1
        }
        if (liv == 0) {
            basic.showIcon(IconNames.Skull)
        } else {
            basic.showIcon(IconNames.No)
        }
    }
})
let paus = 0
let liv = 0
liv = 3
paus = 1
basic.forever(function () {
	
})
