const Notification = () => {
    return (
        <div className="p-5">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-3xl">
                The Joke Tax Chronicles
            </h1>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                Once upon a time, in a far-off land, there was a very lazy king
                who spent all day lounging on his throne. One day, his advisors
                came to him with a problem: the kingdom was running out of
                money.
            </p>
            <h2 className="mt-10 scroll-m-20  pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                The King's Plan
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
                The king thought long and hard, and finally came up with{" "}
                <a href="#" className="font-medium text-primary">
                    a brilliant plan
                </a>
                : he would tax the jokes in the kingdom.
            </p>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
                "After all," he said, "everyone enjoys a good joke, so it's only
                fair that they should pay for the privilege."
            </blockquote>
            <blockquote className="mt-6 border-l-2 pl-6 italic">
                "After all," he said, "everyone enjoys a good joke, so it's only
                fair that they should pay for the privilege."
            </blockquote>
        </div>
    );
};

export default Notification;
