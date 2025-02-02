const AuthImagePattern = ({ title, subtitle }) => {
    return (
        <>
            {/* <div className="hidden lg:block bg-base-200 sm:p-12 ">
                <div className="lg:flex flex-col gap-y-6 mb-7">
                    <div className="chat chat-start animate-pulse">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full bg-primary/20" >
                            </div>
                        </div>
                        <div className="chat-bubble w-72 bg-primary/20" ></div>
                    </div>

                    <div className="chat chat-end animate-pulse">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full bg-primary/20" >
                            </div>
                        </div>
                        <div className="chat-bubble w-80 bg-primary/20" ></div>
                    </div>

                    <div className="chat chat-start animate-pulse">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full bg-primary/20">
                            </div>
                        </div>
                        <div className="chat-bubble w-56 bg-primary/20" ></div>
                    </div>

                    <div className="chat chat-end animate-pulse">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full bg-primary/20" >
                            </div>
                        </div>
                        <div className="chat-bubble w-96 bg-primary/20"></div>
                    </div>

                    <div className="chat chat-start animate-pulse">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full bg-primary/20">
                            </div>
                        </div>
                        <div className="chat-bubble w-72 bg-primary/20"></div>
                    </div>

                    <div className="chat chat-start animate-pulse">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full bg-primary/20">
                            </div>
                        </div>
                        <div className="chat-bubble w-56 bg-primary/20" ></div>
                    </div>

                    <div className="chat chat-end animate-pulse">
                        <div className="chat-image avatar">
                            <div className="w-10 rounded-full bg-primary/20" >
                            </div>
                        </div>
                        <div className="chat-bubble w-80 bg-primary/20" ></div>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p className="text-base-content/60">{subtitle}</p>
                </div>
            </div> */}

            <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
                <div className="max-w-md text-center">
                    <div className="grid grid-cols-3 gap-3 mb-8">
                        {
                            [...Array(9)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`aspect-square rounded-2xl bg-primary/20 ${i % 2 === 0 ? "animate-pulse" : ""}`}
                                />
                            ))
                        }
                    </div>
                    <h2 className="text-2xl font-bold mb-4">{title}</h2>
                    <p className="text-base-content/60">{subtitle}</p>
                </div>
            </div>
        </>
    )
}

export default AuthImagePattern