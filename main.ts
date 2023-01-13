input.onButtonPressed(Button.A, function () {
    music.playMelody("D G C5 E B A C5 B ", 120)
})
input.onGesture(Gesture.Shake, function () {
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
basic.showIcon(IconNames.Chessboard)
