
// Normalize helper
const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/gi, '')

// Strip 'Sapphire' from parallel name
const removeSapphire = (parallelName) => {
    const words = parallelName.split(' ')
    const match = words.findIndex(w => w === 'sapphire')
    if (match === -1) {
        // Use this for the multicolor parallels
        if (parallelName.includes('/')) {
            return parallelName.replace('/', ' ')
        }
        return parallelName
    }

    let modifiedParallel = ''
    for (let i = 0; i < match; i++) {
        modifiedParallel += match[i]
        if (i < match - 1) {
            modifiedParallel += ' '
        }
    }

    return modifiedParallel
}

/**
 * Returns true if this card belongs in the set, false if we need to skip
 * @param setName   Name of the set currently getting sale data for
 * @param title     Title of the eBay sale found
 */
const checkSetName = (setName, title) => {
    // Base case
    if (title.includes(setName)) {
        return true
    }

    // Check if the year matches before continuing
    const setYear = setName.substring(0, 4)
    if (!title.includes(setYear)) {
        return false
    }

    // Case 1: Set name is sapphire, but title words are out of place
    if (setName.includes('sapphire') && title.includes('sapphire')) {
        return true
    }

    if (setName.includes('logofractor') && title.includes('logofractor')) {
        return true
    }

    // Case 2: Set name is chrome, but title includes variant
    if (!setName.includes('sapphire') && title.includes('sapphire')) {
        return false
    }

    if (!setName.includes('logofractor') && title.includes('logofractor')) {
        return false
    }

    // Case 3: F1 in name instead of Formula 1
    const modifiedSetName = setName.replace('formula 1', 'f1')
    if (title.includes(modifiedSetName)) {
        return true
    }

    // Default: Assume false as we can't get enough info from the title
    return false
}

const checkImageVariation = (title, foundCardNumber, foundDriver) => {
    // Check if title contains something about a variation
    const lowercaseTitle = title.toLowerCase()
    if ((lowercaseTitle.includes('image variation')
        || lowercaseTitle.includes('variation')
        || lowercaseTitle.includes('iv')) && !foundDriver.toLowerCase().includes('iv') && !lowercaseTitle.includes('drive')) {

        // This is an image variation
        // Return opposite of if the found card number already includes the variation character 'a'
        return /^\d+$/.test(foundCardNumber)
    }

    // Default: false as this is not an image variation
    return false
}

const delay = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const isPreviousDay = (dateString) => {
    // Parse YYYY-MM-DD as local date (not UTC!)
    const [year, month, day] = dateString.split("-").map(Number);
    const inputDate = new Date(year, month - 1, day); // Local midnight

    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Check if inputDate is exactly yesterday
    return (
        inputDate.getFullYear() === yesterday.getFullYear() &&
        inputDate.getMonth() === yesterday.getMonth() &&
        inputDate.getDate() === yesterday.getDate()
    )
}

const removeDiacritics = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

module.exports = {
    normalize,
    removeSapphire,
    checkSetName,
    checkImageVariation,
    delay,
    isPreviousDay,
    removeDiacritics,
}