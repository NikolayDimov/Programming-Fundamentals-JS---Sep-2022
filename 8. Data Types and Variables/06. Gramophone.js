function gramophone(bandName, albumName, songName) {
    let result = (albumName.length * bandName.length) * songName.length / 2;

    let rotations = Math.ceil(result / 2.5);

    console.log(`The plate was rotated ${rotations} times.`);
    
}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');
gramophone('Rammstein', 'Sehnsucht', 'Engel');