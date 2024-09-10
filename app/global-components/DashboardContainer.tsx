

const DashboardContainer = ({children} : { children: React.ReactNode }) => {
    return (
        <div className="w-80 h-full bg-slate-400">
            {children}
        </div>
    );
};

export default DashboardContainer;
