function App() {
    const url = process.env.PUBLIC_URL;

    return (
        <main className="p-[1.5rem] flex flex-col justify-center items-center min-h-[100dvh]">
            <div className="bg-cardBg p-[1.5rem] rounded-[.9rem] w-full max-w-[21.5rem]">
                <div className="relative cursor-pointer">
                    <img src={`${url}/images/image-equilibrium.jpg`} alt="equilibrium NFT" className="rounded-[.5rem]" />
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-cyan bg-opacity-50 rounded-[.5rem] opacity-0 transition-opacity duration-300 hover:opacity-100">
                        <img src={`${url}/images/icon-view.svg`} alt="eye icon" />
                    </div>
                </div>
                <div className="flex flex-col gap-y-[1rem]">
                    <h2 className="text-white font-semibold text-[1.3rem] mt-[1.7rem] leading-none hoverable">Equilibrium #3429</h2>
                    <p className="text-gray font-light">Our Equilibrium collection promotes balance and calm.</p>
                    <div className="flex justify-between items-center">
                        <span className="flex text-cyan font-medium">
                            <img src={`${url}/images/icon-ethereum.svg`} alt="ethereum icon" className="mr-[.4rem]" /> 0.041 ETH
                        </span>
                        <span className="flex text-gray font-light">
                            <img src={`${url}/images/icon-clock.svg`} alt="clock icon" className="mr-[.4rem]" /> 3 days left
                        </span>
                    </div>
                </div>
                <div className="w-full h-[.065rem] bg-line my-[.9rem]"></div>
                <div className="flex mt-[.2rem] items-center">
                    <img
                        src={`${url}/images/image-avatar.png`}
                        alt="creator avatar"
                        className="w-[2rem] border-white border-[.065rem] rounded-full mr-[1rem]"
                    />
                    <p className="text-gray font-light">
                        Creation of <span className="text-white hoverable">Jules Wyvern</span>
                    </p>
                </div>
            </div>
            <footer className="text-[.9rem] text-center mt-[2rem] text-gray font-light">
                <p>
                    Challenge by{' '}
                    <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer">
                        Frontend Mentor
                    </a>
                    . Coded by <a href="https://MomboteQ.github.io">MomboteQ</a>.
                </p>
            </footer>
        </main>
    );
}

export default App;
