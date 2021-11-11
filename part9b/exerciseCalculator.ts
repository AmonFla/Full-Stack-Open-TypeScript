interface Result{
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

interface dataCalculator{
    target: number,
    hours: Array<number>
}

const calculateExercises = (target:number, hours: Array<number>): Result =>{ 

    const average = hours.reduce((sum, hour) => sum+hour, 0)/hours.length;

    let rating = 2;
    let ratingDescription = 'great';
    if(average < target * 0.8){
        rating = 3;
        ratingDescription = 'too fast';
    }else if (average > target * 1.2){
        rating = 1;
        ratingDescription = 'not too bad but could be less time';
    }

    return{ 
        periodLength: hours.length,
        trainingDays: hours.filter(hours => hours > 0).length,
        success: average > target,
        rating,
        ratingDescription,
        target,
        average
    }
}

const parseArguments = (args: Array<string>): dataCalculator => { 
    if (args.length<4) throw new Error('Not enogh arguments');  

    let target: number = Number(args[2]);
    const hours: Array<number> = args.slice(3).map((number) => {
        if(!isNaN(Number(number))){
           return Number(number);
        }else{
            throw new Error(`Provided value(${number}) for hours must by a number`);
        }
    });
    
    if(isNaN(Number(args[2]))){ 
        throw new Error('Provided values for target must by a number');
    }

    return {
        target,
        hours
    };
}

try {
    const { target, hours } = parseArguments(process.argv); 
    console.log(calculateExercises(target, hours));
} catch (error: unknown) {
    let errorMessage = 'Something bad happened.'
    if(error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    console.log(errorMessage);
}
 