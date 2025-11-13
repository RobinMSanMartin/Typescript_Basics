interface AudioPlayer{
    audioVolume:number;
    songDuration:number;
    song:string;
    details:Details;
}

interface Details{
    author: string;
    year:number;
}


const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Spread Your Wings",
    details: {
        author: "Queen",
        year: 1977
    }
}

const song = 'We Will Rock You';
//tipoVariable { CampoEnObjeto : NombreVariable } = Objeto;
const { song: songTwo } = audioPlayer;

const { 
    song:thirdSong,
    songDuration:duration,
    details:{author:auhtorSong}
} = audioPlayer;

//console.log("Song: ",audioPlayer.song);
//console.log("Song: ", song);
//console.log("Song: ", songTwo);

//array Destructuring
const dbz : string[] = ['Goku','Vegeta','Gohan'];
const [ , , , p4 = 'Not Found']:string[] = dbz;

console.log("Personaje 3", p4);
console.log("Personaje 3", dbz[2]);
console.log("Personaje 3", dbz[3] || 'Personaje no encontrado');









export {};