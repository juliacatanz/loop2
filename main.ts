input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        Jimmy_steve.change(LedSpriteProperty.X, 1)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        Jimmy_steve.change(LedSpriteProperty.Y, 1)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        Jimmy_steve.change(LedSpriteProperty.X, -1)
        basic.pause(100)
    }
    for (let index = 0; index <= 4; index++) {
        Jimmy_steve.change(LedSpriteProperty.Y, -1)
        basic.pause(100)
    }
})
let Jimmy_steve: game.LedSprite = null
basic.showIcon(IconNames.Heart)
Jimmy_steve = game.createSprite(4, 4)
basic.forever(function () {
	
})
