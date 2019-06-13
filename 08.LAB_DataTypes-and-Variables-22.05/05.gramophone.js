function gramophone(bandName, albumName, songName) {
    // Write a function which as input will receive 3 parameters (strings) • First string is the name of the band • Second string is the name of the album • The third is holding a song name from the album. You have to find out how many times the plate will rotate the given song from the album. The plate makes a full rotation every 2.5 seconds. The song duration in seconds is calculate by the given formula: (albumName.length * bandName.length) * song name.length / 2). Rotations should be ROUND UP (with Math.ceil();).

    let time = (bandName.length * albumName.length) * songName.length / 2;
    // console.log(time);
    let rotations = Math.ceil(time / 2.5);
    
    console.log(`The plate was rotated ${rotations} times.`);
}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');   // The plate was rotated 167 times.
