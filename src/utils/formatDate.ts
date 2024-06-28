export const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const options: any = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = date.toLocaleDateString("en-GB", options);

    return formattedDate;
};
