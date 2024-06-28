export const formatTime = (time: string) => {
    const date = new Date(time);

    const options: any = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
    };

    const formattedTime = date.toLocaleTimeString("en-US", options);
    return formattedTime;
};
