"use client";
const Skeleton = () => {
  return (
    <div className="flex animate-pulse flex-col items-center space-y-4">
      <div className="h-80 w-80 rounded-xl bg-slate-300 dark:bg-slate-700"></div>
      <div className="space-y-2">
        <div className="h-4 w-40 rounded bg-slate-300 dark:bg-slate-700"></div>
        <div className="h-4 w-20 rounded bg-slate-300 dark:bg-slate-700"></div>
      </div>
    </div>
  );
};

export default Skeleton;
