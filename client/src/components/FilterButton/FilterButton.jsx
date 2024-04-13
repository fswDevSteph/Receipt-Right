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
                    <button onClick={() => handleItemClick('Choice_1')}>Groceries</button>
                    <button onClick={() => handleItemClick('Choice_2')}>Education</button>
                    <button onClick={() => handleItemClick('Choice_3')}>Medical</button>
                    <button onClick={() => handleItemClick('Choice_4')}>Business</button>
                </div>
            )
            }
        </div >
    );
}

export default FilterButton;
