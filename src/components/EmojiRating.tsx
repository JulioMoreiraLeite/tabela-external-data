type Props = {
    nota:number
}

export const EmojiRating = ({ nota }: Props) =>{
    if(nota > 5 ) nota = 5;
    if(nota < 0 ) nota = 0;
    
    let emojis = ['','⭐','😬','😑','🤨','😛'];
    let notaInt = Math.floor(nota);
    let stars = `${emojis[notaInt]}`.repeat(notaInt) + '😶'.repeat(5 - notaInt);
    /*if(notaInt == 1){
        stars = '⭐'.repeat(notaInt) + '😶'.repeat(5 - notaInt)
    }
    if(notaInt == 2){
        stars = '😬'.repeat(notaInt) + '😶'.repeat(5 - notaInt)
    }
    if(notaInt == 3){
        stars = '😑'.repeat(notaInt) + '😶'.repeat(5 - notaInt)
    }
    if(notaInt == 4){
        stars = '🤨'.repeat(notaInt) + '😶'.repeat(5 - notaInt)
    }
    if(notaInt == 5){
        stars = '😛'.repeat(notaInt) + '😶'.repeat(5 - notaInt)
    }*/
    //const stars = '⭐'.repeat(notaInt) + '😶'.repeat(5 - notaInt)}
    return(
        <div className="h-screen w-screen flex justify-center items-center text-9xl">
            <h1 className="bg-gray-500 p-2 font-bold">{nota.toFixed(1)}</h1>
            <h1>{stars}</h1>
        </div>
    )
}