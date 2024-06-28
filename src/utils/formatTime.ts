export const formatTime = (time: any) => {
    const date = new Date(time);

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    const formattedTime = date.toLocaleTimeString("en-US", options);
    return formattedTime;
};
