const view = counter => {
    return (`\n   Counter: ${counter} \n   (+) (-)\n   (q) to quit\nWhat would you do? `);
}

function update(msg, counter){
    if (msg === "+")
        counter += 1;
    if (msg === "-")
        counter -= 1;
    return counter
}

function app(counter){
    while(true){
        const currentView = view(counter);
        console.clear()
        console.log(currentView)
        const prompt = require('prompt-sync')();
        const msg = prompt();
        if (msg === "q")
            break
        var counter = update(msg, counter);
    }
    return
}

app(0)