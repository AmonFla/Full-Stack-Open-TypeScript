interface Result{
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: string,
    target: number,
    average: number
}

const calculateExercises = (hours: Array<number>, target:number): Result =>{ 
    
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

console.log(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));