function Pyramid(base, increment) {
 
    let totalstone = 0;
    let totalmarble = 0;
    let totallapis = 0;
    let totalgold = 0;
    let row = 0;
    let currentbase=base;
 
    while (currentbase>2) {
     let marbel=currentbase*4-4;
     let stone=currentbase*currentbase-marbel;
        totalstone+=stone;
 
        row++;
        if(row%5===0){
            totallapis+=marbel;
        }else{
            totalmarble+=marbel;
        }
        currentbase-=2;
    }
    row++;
    let gold=currentbase*currentbase;
 
    stone = Math.ceil(totalstone * increment);
    marble = Math.ceil(totalmarble * increment);
    lapis = Math.ceil(totallapis * increment);
    totalgold = Math.ceil(gold * increment);
    totalHeight = Math.floor(row*increment);
 
    console.log(`Stone required: ${stone}`);
    console.log(`Marble required: ${marble}`);
    console.log(`Lapis Lazuli required: ${lapis}`);
    console.log(`Gold required: ${totalgold}`);
    console.log(`Final pyramid height: ${totalHeight}`);
 
}

Pyramid(11, 1);

//_________________ dava 50%

function materials(size, increment) {
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let steps = 1;

    while (size >= 1) {
        if (size > 2) {
            if (steps % 5 == 0) {
                lapisLazuli += size * 4 - 4 * increment;
            } else {
                marble += size * 4 - 4 * increment;
            }
            steps++;

            stone += Math.pow(size - 2, 2) * increment;
        } else {
            gold += Math.pow(size, 2) * increment;
        }
        
        size -= 2;
    }
    console.log(`Stone required: ${Math.ceil(stone)}\nMarble required: ${Math.ceil(marble)}\nLapis Lazuli required: ${Math.ceil(lapisLazuli)}\nGold required: ${gold}\nFinal pyramid height: ${Math.floor(steps * increment)}`);
}

materials(11, 1);