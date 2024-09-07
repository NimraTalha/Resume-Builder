// Ensure the DOM is fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the button and the skills list
    const toggleSkillsButton = document.getElementById('toggle-skills') as HTMLButtonElement;
    const skillsList = document.getElementById('skills-list') as HTMLUListElement;

    // Ensure elements exist
    if (!toggleSkillsButton || !skillsList) {
        console.error('Elements not found');
        return;
    }

    // Initialize the skills list to be hidden by default
    skillsList.style.display = 'none';

    // Add an event listener to the button
    toggleSkillsButton.addEventListener('click', () => {
        if (skillsList.style.display === 'none') {
            skillsList.style.display = 'block';  // Show the list
            toggleSkillsButton.textContent = 'Hide Skills';  // Update button text
        } else {
            skillsList.style.display = 'none';  // Hide the list
            toggleSkillsButton.textContent = 'Show Skills';  // Update button text
        }
    });
});
