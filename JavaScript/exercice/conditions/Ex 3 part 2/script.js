
let temperature = 15;

switch (true){
    case (temperature < 0):
        console.log("freezing weather");
        break;
    case (temperature < 10):
        console.log("Very cold weather");
        break;
    case (temperature < 20):
        console.log("Cold weather");
        break;
    case (temperature < 30):
        console.log("Normal in temp");
        break;
    case (temperature < 40):
        console.log("Its Hot");
        break;
    default:
        console.log("Its very hot.");
}