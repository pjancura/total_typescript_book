// void allows you to not care about the return type of a function
// how is this different than any?
// in this case void is better because the return type of the returnString is going to be ignored
// i am still defining that callback is a function whose return value will be ignored
// where as any means that the type will go unchecked entirely
// callback wouldn't care about the return type of the function and let it go unchecked 
const acceptsCallback = (callback: () => void) => {
    callback();
};

const returnString = () => {
    return "Hello!";
};

acceptsCallback(returnString);