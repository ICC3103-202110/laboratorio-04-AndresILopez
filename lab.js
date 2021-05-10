const view = counter => {
    return (`\n   Counter: ${counter} \n   (+) (-)\n   (q) to quit\nWhat would you do? `);
}

function update(msg, counter){
    if (msg === "+")
        counter += 1;
    if (msg === "-")
        if (msg != 0)
            counter -= 1;
    if (msg === "q")
        Process.exit;
    return counter
}

function app(counter){
    while(true)

    return
}

console.log(view(1));