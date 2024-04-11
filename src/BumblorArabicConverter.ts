
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
        let I: number = 0;
        let negative: boolean = false;

        for(let i: number = 0; i < bumblorArray.length; i++){
                if ((bumblorArray[i] == '-') && (!negative)){
                        negative = true;
                }
                else if((bumblorArray[i] == 'M') && (M < 4)
                        && (D == 0)
                        && (C == 0)
                        && (L == 0)
                        && (X == 0)
                        && (V == 0)
                        && (I == 0)){
                       result = result + 1000;
                       M++;
                }
                else if(bumblorArray[i] == 'D' && (D < 1)
                    && (C == 0)
                    && (L == 0)
                    && (X == 0)
                    && (V == 0)
                    && (I == 0)){
                        result = result + 500;
                        D++;
                }
                else if(bumblorArray[i] == 'C' && (C < 4)
                    && (L == 0)
                    && (X == 0)
                    && (V == 0)
                    && (I == 0)){
                        result = result + 100;
                        C++;
                }
                else if(bumblorArray[i] == 'L' && (L < 1)
                    && (X == 0)
                    && (V == 0)
                    && (I == 0)){
                        result = result + 50;
                        L++
                }
                else if(bumblorArray[i] == 'X' && (X < 4)
                    && (V == 0)
                    && (I == 0)){
                        result = result + 10;
                        X++;
                }
                else if(bumblorArray[i] == 'V' && (V < 1)
                    && (I == 0)){
                        result = result + 5;
                        V++
                }
                else if(bumblorArray[i] == 'I' && (I < 4)){
                        result++;
                        I++;
                }
                else if((bumblorArray[i] == 'O') && (bumblorArray.length == 1)){
                        return result;
                }else{throw new Error('Malformed Number')}

        }
        if(negative){
                return (-1*result);
        }else{return result;}
}
export function arabic2bumblor(arabic: number): string {
        let i: number = 0;
        const bumblorArray:string[] = [];
        if((arabic > 4999) || (arabic < -4999)){
                throw new Error('Out of Range')
        }
        if(arabic == 0){
                return 'O'
        }
        let flooredArabic : number = Math.floor(arabic);
        for (i; ((flooredArabic/1000) >= 1); i++){
                flooredArabic = flooredArabic - 1000;
                bumblorArray[i] = 'M'
        }
        for (i; ((flooredArabic/500) >= 1); i++){
                flooredArabic = flooredArabic - 500;
                bumblorArray[i] = 'D'
        }
        for (i; ((flooredArabic/100) >= 1); i++){
                flooredArabic = flooredArabic - 100;
                bumblorArray[i] = 'C'
        }
        for (i; ((flooredArabic/50) >= 1); i++){
                flooredArabic = flooredArabic - 50;
                bumblorArray[i] = 'L'
        }
        for (i; ((flooredArabic/10) >= 1); i++){
                flooredArabic = flooredArabic - 10;
                bumblorArray[i] = 'X'
        }
        for (i; ((flooredArabic/5) >= 1); i++){
                flooredArabic = flooredArabic - 5;
                bumblorArray[i] = 'V'
        }
        for (i; (flooredArabic >= 1); i++){
                flooredArabic = flooredArabic - 1;
                bumblorArray[i] = 'I'
        }
        return bumblorArray.join('');
}