
export default function TodoItemSkeleton() {
    return (
        <div className="grid grid-cols-12 md:gap-5 w-full p-5 bg-white rounded h-24 items-center">
            <div className="animate-pulse flex col-span-1 justify-center items-center">
                <div className="rounded bg-slate-300 h-5 md:w-5"></div>
            </div>
            <div className="animate-pulse gap-5 col-span-11">
                <div className="rounded bg-slate-300 h-5 w-1/3 mb-2"></div>
                <div className="h-5 bg-slate-300 rounded"></div>
            </div>
        </div>
    )
}
