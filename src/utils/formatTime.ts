export const formatTime = (time: string) => {
    const date = new Date(time);

    const options: any = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };

    const formattedTime = new Intl.DateTimeFormat("en-US", options).format(
        date
    );
    return formattedTime;
};
