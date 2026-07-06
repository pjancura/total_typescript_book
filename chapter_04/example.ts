const run = (message: string) => {
    const element = document.getElementById("header")!;
    
    element.textContent = message;
};

run("Hello, World!")