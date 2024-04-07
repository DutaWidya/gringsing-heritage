export const NavigationBar = () => {
    return (
        <div className="w-full contianer mx-auto my-3 px-5 flex justify-between items-center">
            <span className="flex-1">Gringsing Heritage</span>
            <ul className="flex gap-3 flex-auto items-center justify-center">
                <li>navlink1</li>
                <li>navlink2</li>
                <li>navlink3</li>
            </ul>
            <span className="flex-1 flex justify-end">search</span>
        </div>
    );
};
