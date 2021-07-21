input.onButtonPressed(Button.A, function () {
    if (Move == 0) {
        Move = 1
        for (let index = 0; index < randint(5, 20); index++) {
            Fireball.move(1)
            Fireball.ifOnEdgeBounce()
            basic.pause(100)
        }
        Fireball.set(LedSpriteProperty.X, 1)
        Fireball.set(LedSpriteProperty.Y, 3)
        Move = 0
    }
})
let Move = 0
let Fireball: game.LedSprite = null
game.setLife(3)
let Monster = game.createSprite(4, 0)
let Wizard = game.createSprite(1, 3)
Fireball = game.createSprite(1, 3)
Move = 0
basic.forever(function () {
    if (Move == 0) {
        Fireball.turn(Direction.Right, randint(0, 359))
        if (Fireball.isTouching(Monster)) {
            game.addScore(25)
        }
    }
    basic.pause(500)
})
basic.forever(function () {
    Monster.turn(Direction.Right, randint(0, 359))
    Monster.move(1)
    Monster.ifOnEdgeBounce()
    if (Wizard.isTouching(Monster)) {
        game.removeLife(1)
        Monster.set(LedSpriteProperty.X, 4)
        Monster.set(LedSpriteProperty.Y, 0)
    }
    basic.pause(750)
})
