const ComingSoon = ({ title }) => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 pt-20">
            <div className="text-center space-y-6 animate-fade-in">
                <h1 className="text-5xl md:text-7xl font-bold gradient-text">
                    {title}
                </h1>
                <p className="text-xl text-gray-400">
                    This page is coming soon! 🚀
                </p>
                <div className="flex justify-center">
                    <div className="w-16 h-16 border-4 border-primaryPurple border-t-hoverBlue rounded-full animate-spin"></div>
                </div>
            </div>
        </div>
    );
};

export default ComingSoon;
