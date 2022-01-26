controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monkey.y == 94) {
        monkey.vy = -200
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
function welcome (age: number) {
    game.showLongText("Welcome to MONKEY RUN!!", DialogLayout.Bottom)
    return age
}
let Obstacle: Sprite = null
let monkey: Sprite = null
game.splash("Your goal is: " + welcome(game.askForNumber("What is your age?", 2)) * 10)
game.splash("Please press 'A' to Start")
info.setScore(0)
monkey = sprites.create(img`
    . . . . . . . f f f f f . . . . 
    . . . . . . f e e e e e f . . . 
    . . . . f f e e e d d d d f . . 
    . . . f d d e e d d d d d d c . 
    . . . c d b e e d f d d f d c . 
    f f . c d b e e d f d d f d d c 
    f e f . c f e e d d d d e e d c 
    f e f . . f e e e d c d d d d c 
    f e f . . f f e e e d c c c f . 
    f e f . f e e e e f f f f f . . 
    . f f f e e e e e e e f . . . . 
    . . f e e e e f e e f e f f . . 
    . . f e e e f f f e e f f e f . 
    . f b f f f f f f c d d b d d f 
    . f d d c f . . f d d d c d d f 
    . . f f f . . . f f f f f f f . 
    `, SpriteKind.Player)
monkey.setStayInScreen(true)
monkey.setPosition(60, 94)
monkey.ay = 600
game.onUpdate(function () {
    while (monkey.y > 94) {
        monkey.y = 94
    }
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
    Obstacle = sprites.createProjectileFromSide(img`
        . . . . . . . . . . 
        . . c c b b b a c . 
        . c c a b a c b a c 
        . c a b c f f f b c 
        . c a c f f f 8 a c 
        . c a 8 f f 8 c a c 
        . c c a c c c c a c 
        . c a a a c c c a c 
        . . a b 6 a c c a . 
        . . . . . . . . . . 
        `, randint(-100, -120), 0)
    Obstacle.setPosition(160, randint(90, 100))
})
