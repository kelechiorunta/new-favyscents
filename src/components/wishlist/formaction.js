export const simulateSubmit = async(message) => {
    //Simulate a delay of 2s before returning the message
    await new Promise((res) => setTimeout(res, 2000))
    return message;
}

export const delaySubmit = async(message) => {
    await new Promise((res) => setTimeout(res, 3000))
    return message;
}

