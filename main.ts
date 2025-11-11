let szám = 0
input.onGesture(Gesture.Shake, function () {
    szám = randint(1, 250)
    basic.showNumber(szám)
    if (szám > 77 && szám < 177) {
        music.play(music.stringPlayable("B A G A G F A C5 ", 241), music.PlaybackMode.InBackground)
    }
})
