
// type Bumblor = string;

// let dictionary: string[][] =
//     [
//         ['M','1000'],
//         ['D','500'],
//         ['C','100'],
//         ['L','50'],
//         ['X','10'],
//         ['V','5'],
//         ['I','1'],
//         ['O','0']
//     ]

export function bumblor2arabic(Bumblor: string): number {
        let bumblorArray: string[] = Bumblor.split('');
        var result: number = 0;
        let D: number = 0;
        let L: number = 0;
        let V: number = 0;
        let M: number = 0;
        let C: number = 0;
        let X: number = 0;

        for(let i: number = 0; i < bumblorArray.length; i++){
                if(bumblorArray[i] == 'M' && (M < 4)){
                       result = result + 1000;
                       M++;
                }
                else if(bumblorArray[i] == 'D' && (D < 1)){
                        result = result + 500;
                        D++;
                }
                else if(bumblorArray[i] == 'C' && (C < 4)){
                        result = result + 100;
                        C++;
                }
                else if(bumblorArray[i] == 'L' && (L < 1)){
                        result = result + 50;
                        L++
                }
                else if(bumblorArray[i] == 'X' && (X < 4)){
                        result = result + 10;
                        X++;
                }
                else if(bumblorArray[i] == 'V' && (V < 1)){
                        result = result + 5;
                        V++
                }
                else if(bumblorArray[i] == 'I'){
                        result++;
                }
                else if((bumblorArray[i] == 'O') && (bumblorArray.length == 1)){
                        return result;
                }else{throw new Error('Malformed Number')}

        }
        return result;
}
export function arabic2bumblor(arabic: number): string {
        Math.floor(arabic);
        return '';
}