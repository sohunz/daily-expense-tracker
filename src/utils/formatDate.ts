export const convertDate = (dateString: Date) => {
    const date = new Date(dateString);
    const options: any = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
};
