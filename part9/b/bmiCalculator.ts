
const calculateBmi = (height: number, weight: number) : string => {
    const bmi = weight / (Math.pow(height/100, 2));
    // console.log(bmi);
    if(bmi < 18.5){
        return 'Underweight';
    } else if(bmi >= 18.5 && bmi < 24.9){
        return 'Normal (healthy weight)';
    } else if(bmi >= 24.9 && bmi < 29.9){
        return 'Overweight';
    } else{
        return 'Obese';
    }
  };
  
console.log(process.argv);



if(process.argv.length > 2){
    const h = Number(process.argv[2]);
    const w = Number(process.argv[3]);
    console.log(calculateBmi(h, w));
}


export default calculateBmi;