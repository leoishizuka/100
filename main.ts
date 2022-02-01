function succes (sprite: string) {
    scene.setBackgroundColor(1)
    return "Login succesfull " + "Hi, " + name
}
function failed (sprite: string) {
    scene.setBackgroundColor(15)
    return "Login failed " + "try again " + name
}
let fail = ""
let success = ""
let name = ""
scene.setBackgroundColor(8)
let login = 0
game.splash("Welcome!")
// asks what is your name
name = game.askForString("What is your name?")
game.splash("Hello " + name + "!")
// asks for what your password is
let password = game.askForString("What is your password?")
timer.debounce(name, 30000, function () {
    if (password != "img" && password != "tennis") {
        game.splash("Times up")
        music.wawawawaa.play()
        game.over(false)
    }
})
// input 1 and arcade equals together
if (password == "img" || password == "tennis") {
    login = 1
    success = succes("Login succesfull " + "Hi, " + name)
    game.splash(success)
} else {
    fail = failed("Login failed " + "try again " + name)
    game.splash(fail)
    // asks for what your password is
    password = game.askForString("What is your password?")
}
game.onUpdate(function () {
    while (login == 0) {
        music.baDing.play()
    }
})
