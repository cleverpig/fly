namespace SpriteKind {
    export const a = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.ay += 80
})
scene.onOverlapTile(SpriteKind.Projectile, assets.tile`myTile2`, function (sprite, location) {
    scene.cameraShake(4, 500)
    mySprite.startEffect(effects.halo, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 300, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile1`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.field1, function (sprite, location) {
    game.over(true, effects.confetti)
})
let projectile: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
tiles.setTilemap(tilemap`级别1`)
mySprite = sprites.create(img`
    .......f......................
    .......2.eeeeeeeeeeeee........
    ......fffeeeeeeeeeeeeeef......
    .......2.eeeeeeeeeeeee........
    .......f.d..........d.........
    .........d...........d........
    .........d....fff....d........
    .........d.fffff2f...d........
    .........ffeeeee22ff.d........
    ........ffeeeeee222ffd........
    ........feeeefffeeeefd........
    ........fffffeee2222ef........
    .......fffe222fffffe2f........
    .......fffffffffeeefff.......e
    .......fefe44ebbf44eefffffffff
    ........fee4d4bbfddeff11fff...
    .........feee4dddddfeefff.....
    ..........f2222222eedde.f.....
    ..........f444445e44deff......
    ..........ffffffffeeef........
    ..........fff...ff............
    ..............................
    ..............................
    ..............................
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . c c c c c c . . . . . . . 
    . . c 6 7 7 7 7 6 c . . . . . . 
    . c 7 7 7 7 7 7 7 7 c . . . . . 
    c 6 7 7 7 7 7 7 7 7 6 c . . . . 
    c 7 c 6 6 6 6 c 7 7 7 c . . . . 
    f 7 6 f 6 6 f 6 7 7 7 f . . . . 
    f 7 7 7 7 7 7 7 7 7 7 f . . . . 
    . f 7 7 7 7 6 c 7 7 6 f . . . . 
    . . f c c c c 7 7 6 f c c c . . 
    . . c 6 2 7 7 7 f c c 7 7 7 c . 
    . c 6 7 7 2 7 7 c f 6 7 7 7 7 c 
    . c 1 1 1 1 7 6 6 c 6 6 6 c c c 
    . c 1 1 1 1 1 6 6 6 6 6 6 c . . 
    . c 6 1 1 1 1 1 6 6 6 6 6 c . . 
    . . c 6 1 1 1 1 1 7 6 6 c c . . 
    . . . c c c c c c c c c c . . . 
    `, SpriteKind.Enemy)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
