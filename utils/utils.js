
// Normalize helper
const normalize = (str) => str.toLowerCase().replace(/[^a-z0-9]/gi, '')

// Strip 'Sapphire' from parallel name
const removeSapphire = (parallelName) => {
    const words = parallelName.split(' ')
    const match = words.findIndex(w => w === 'sapphire')
    if (match === -1) {
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

const checkForMultiColorParallel = (title) => {
    const MULTI_COLORS = [
        'Purple/Green Refractor',
        'Gold/Purple Refractor',
        'Orange/Red Refractor',
        'Red/Green Refractor',
    ]

    const MULTI_COLORS_REVERSE = [
        'Green/Purple Refractor',
        'Purple/Gold Refractor',
        'Red/Orange Refractor',
        'Green/Red Refractor'
    ]

    const normalizedTitle = normalize(title)

    for (let i = 0; i < MULTI_COLORS.length; i++) {
        const normal = normalize(MULTI_COLORS[i])
        const reverse = normalize(MULTI_COLORS_REVERSE[i])

        if (normalizedTitle.includes(normal) || normalizedTitle.includes(reverse)) {
            return MULTI_COLORS[i] // Always return the canonical form
        }
    }

    return undefined
}

const insertDashAt = (str, index) => {
    if (index < 0 || index > str.length) {
        return str
    }

    return str.slice(0, index) + '-' + str.slice(index)
}

module.exports = {
    normalize,
    removeSapphire,
    checkSetName,
    checkImageVariation,
    delay,
    isPreviousDay,
    removeDiacritics,
    checkForMultiColorParallel,
    insertDashAt
}