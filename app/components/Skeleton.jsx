// components/LoadingSkeleton.js
const Skeleton = () => {
    return (
      <div className="animate-pulse flex flex-col items-center space-y-4">
        <div className="h-80 w-80 bg-slate-300 dark:bg-slate-700 rounded-xl"></div>
        <div className="space-y-2">
          <div className="h-4 w-40 bg-slate-300 dark:bg-slate-700 rounded"></div>
          <div className="h-4 w-20 bg-slate-300 dark:bg-slate-700 rounded"></div>
        </div>
      </div>
    );
  };
  
  export default Skeleton;
  