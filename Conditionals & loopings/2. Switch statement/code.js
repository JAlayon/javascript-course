var userInput = prompt('Please input a season');
userInput = userInput.toLowerCase();

switch (userInput) {
    case "autumn":
        console.log('It is autumn time');
        break;
    case "fall":
        console.log('It is fall time');
        break;
    case "winter":
        console.log("It is winter time");
        break;
    case "spring":
        console.log("It is spring time");
        break;
    case "summer":
        console.log("It is summer time");
        break;
    default:
        console.log('I do not recognize this');
        break;
}