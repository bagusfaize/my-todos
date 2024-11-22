
type FilterBarProps = {
    selectedCategory: string;
    onSelect: (category: string) => void,
}

export default function FilterBar({
    selectedCategory,
    onSelect
}: FilterBarProps) {

    const filterList = ['all', 'personal', 'work'];

    const handleSelectCategory = (category: string) => onSelect(category)

    return (
        <div className="flex gap-4 items-center">
            <div className="font-semibold">Filter:</div>
            <div>
                {filterList.map(category => (
                    <button
                        onClick={() => handleSelectCategory(category)}
                        key={`btn-${category}`}
                        type="button"
                        className={`${selectedCategory === category ? 'bg-green-300' : ''} text-black bg-gray-200 hover:bg-green-400 font-semibold rounded-full text-xs md:text-sm px-5 py-2 me-2 uppercase`}
                    >
                        {category}
                    </button>

                ))}
            </div>
        </div>
    )
}
