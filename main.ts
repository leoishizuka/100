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
let password = ""
let name = ""
scene.setBackgroundColor(13)
game.splash("Welcome!")
// asks what is your name
name = game.askForString("What is your name?")
game.splash("Hello " + name + "!")
while (!(password == "ab" || password == "Leo")) {
    music.wawawawaa.play()
}
// asks for what your password is
password = game.askForString("What is your password?")
// input 1 and arcade equals together
if (password == "ab" || password == "Leo") {
    success = succes("Login succesfull " + "Hi, " + name)
    game.splash(success)
} else {
    fail = failed("Login failed " + "try again " + name)
    game.splash(fail)
}
