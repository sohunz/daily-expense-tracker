const MainPage = () => {
    return (
        <main className="w-full flex flex-col items-center justify-center h-full gap-20">
            <p className="flex flex-col items-center gap-4">
                <span className="text-sm text-gray-500">Spent this month</span>
                <span className="text-5xl font-semibold text-red-500">
                    $ -200
                </span>
            </p>

            <div className="w-full p-5 space-y-5">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <p className="text-3xl">🏠</p>
                        <p className="flex flex-col gap-1">
                            Rent{" "}
                            <span className="text-[13px] text-gray-500">
                                10:15 AM
                            </span>
                        </p>
                    </div>
                    <p className="text-red-500">-250$</p>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <p className="text-3xl">⛽</p>
                        <p className="flex flex-col gap-1">
                            Gas{" "}
                            <span className="text-[13px] text-gray-500">
                                10:15 AM
                            </span>
                        </p>
                    </div>
                    <p className="text-red-500">-650$</p>
                </div>
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <p className="text-3xl">🚗</p>
                        <p className="flex flex-col gap-1">
                            Car{" "}
                            <span className="text-[13px] text-gray-500">
                                10:15 AM
                            </span>
                        </p>
                    </div>
                    <p className="text-red-500">-570$</p>
                </div>
            </div>
        </main>
    );
};

export default MainPage;
