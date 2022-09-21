input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        Jimmy_steve.change(LedSpriteProperty.X, 1)
    }
})
input.onButtonPressed(Button.B, function () {
    Jimmy_steve.change(LedSpriteProperty.Y, -1)
})
let Jimmy_steve: game.LedSprite = null
basic.showIcon(IconNames.Heart)
Jimmy_steve = game.createSprite(3, 3)
loops.everyInterval(500, function () {
	
})
basic.forever(function () {
	
})
