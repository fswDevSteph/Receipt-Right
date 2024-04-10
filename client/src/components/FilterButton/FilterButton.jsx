import React, { useState } from 'react';

function FilterButton() {
    const [isOpen, setIsOpen] = useState(false); // State to manage dropdown visibility

    // Function to toggle dropdown visibility
    const toggleDropdown = () => {
        setIsOpen(!isOpen); // Toggle the state to show/hide the dropdown
    };

    // Function to handle item click in the dropdown
    const handleItemClick = (choice) => {
        console.log(`Selected choice: ${choice}`);

        setIsOpen(false); // Close the dropdown after selecting a choice
    };

    return (
        <div >
            {/* Button to toggle dropdown */}
            <button onClick={toggleDropdown} >Filter</button>

            {/* Dropdown menu */}
            {isOpen && (
                <div className="dropdown ">
                    <button onClick={() => handleItemClick('Choice 1')}>Category 1</button>
                    <button onClick={() => handleItemClick('Choice 2')}>Category 2</button>
                    <button onClick={() => handleItemClick('Choice 3')}>Category 3</button>

                </div>
            )
            }
        </div >
    );
}

export default FilterButton;
