controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 f f f 1 f 1 1 f 1 f f f 1 1 
1 1 1 f 1 1 f f 1 f 1 1 f 1 1 1 
1 1 1 f 1 1 f 1 f f 1 1 f 1 1 1 
1 1 1 f 1 1 f 1 1 f 1 1 f 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, mySprite, 9999, 0)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    projectile = sprites.createProjectileFromSprite(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 f f f 1 f 1 1 f 1 f f f 1 1 
1 1 1 f 1 1 f f 1 f 1 1 f 1 1 1 
1 1 1 f 1 1 f 1 f f 1 1 f 1 1 1 
1 1 1 f 1 1 f 1 1 f 1 1 f 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, mySprite, 9999, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 f f f 1 f 1 1 f 1 f f f 1 1 
1 1 1 f 1 1 f f 1 f 1 1 f 1 1 1 
1 1 1 f 1 1 f 1 f f 1 1 f 1 1 1 
1 1 1 f 1 1 f 1 1 f 1 1 f 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, mySprite, 9999, 0)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    projectile = sprites.createProjectileFromSprite(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 f f f 1 f 1 1 f 1 f f f 1 1 
1 1 1 f 1 1 f f 1 f 1 1 f 1 1 1 
1 1 1 f 1 1 f 1 f f 1 1 f 1 1 1 
1 1 1 f 1 1 f 1 1 f 1 1 f 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, mySprite, 9999, 0)
})
info.onLifeZero(function () {
    game.reset()
})
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 2 7 7 2 7 7 . . . . 
. . . . 7 7 2 7 7 2 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 f f f f 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 7 7 . . . . 
. . 7 7 7 7 . . . . 7 7 7 7 . . 
. . 7 7 7 7 . . . . 7 7 7 7 . . 
. . 7 7 7 7 . . . . 7 7 7 7 . . 
. . 7 7 7 7 . . . . 7 7 7 7 . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
info.setScore(0)
info.setLife(3)
scene.setBackgroundColor(15)
info.setScore(0)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
