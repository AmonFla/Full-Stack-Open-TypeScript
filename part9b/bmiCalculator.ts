interface dataBMI{
    height: number,
    weight: number
}

export const calculateBmi=(height:number, weight: number) :string => {
    const bmi = weight/(height/100)**2;
   
    if(bmi < 16.0) return 'Underweight (Severe thinness)';
    else if (bmi >=16 && bmi<17) return 'Underweight (Moderate thinness) ';
    else if (bmi >=17 && bmi<18.5) return 'Underweight (Mild thinness) ';
    else if (bmi >=18.5 && bmi<25) return 'Normal range';
    else if (bmi >=25 && bmi<30) return 'Overweight (Pre-obese)';
    else if (bmi >=30 && bmi<35) return 'Obese (Class I)';
    else if (bmi >=35 && bmi<40) return 'Obese (Class II)';
    else return 'Obese (Class III)';
};

const parseArgumentsBmi = (args: Array<string>): dataBMI => { 
    if (args.length<4) throw new Error('Not enogh arguments');
    if (args.length>4) throw new Error('To many arguments');

    if(!isNaN(Number(args[2])) && !isNaN(Number(args[3]))){
        return{
            height: Number(args[2]),
            weight: Number(args[3])
        };
    }else{
        throw new Error('Provided values were not numbers!');
    }
};

try {
    const { height, weight } = parseArgumentsBmi(process.argv);
    console.log(calculateBmi(height, weight));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.';
    if(error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}