let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
//userName = userInput; //err for userInput: unknown; not err for userInput: any

if (typeof userInput === 'string') {
    userName = userInput;
}

// this function never returns anything, always throw an error
function generateError(message: string, code: number): never {
    throw {message: MessageChannel, errorCode: code};

    // while (true) {} // never returns
}

generateError('An error occured!', 500);