// Sapphire 1/1s
const PAD = "Padparadascha"

// Chrome 1/1s
const SUPER = "Superfractor"
const SUPER_70 = "70th Anniversary Superfractor"
const BLACK_RAYWAVE = "Black RayWave Refractor"

// Paper 1/1s
const FOILFRACTOR = "Foilfractor"

// Logofractor
const ROSE_GOLD = "Rose Gold Logofractor"

// Paddock Pass
const GOLD_RAINBOW_FOIL = "Gold Rainbow Foil"
const GOLD_RAINBOW_INSERT = "Gold Rainbow Insert"
const GOLD_RAINBOW_AUTO = "Gold Rainbow Autograph"
const FOIL_RELIC = "Foilfractor Relic"

// Printing Plates
const BLACK_PLATE = "Printing Plate Black"
const CYAN_PLATE = "Printing Plate Cyan"
const MAGENTA_PLATE = "Printing Plate Magenta"
const YELLOW_PLATE = "Printing Plate Yellow"

const PSA_ONE_OF_ONE_MAP = [
    // 2020 Topps
    // SAPPHIRE
    { setName: '2020 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-sapphire-edition/192785', logName: `${PAD} - #1-200` },

    // CHROME 1-200
    { setName: '2020 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'superfractor 1/1', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1/191594', logName: `${SUPER} - #1-200` },
    { setName: '2020 Topps Chrome Formula 1', parallel: SUPER_70, searchTerm: 'anniversary-super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1/191594', logName: `${SUPER_70} - #1-200` },
    { setName: '2020 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1/191594', logName: `${BLACK_PLATE} - #1-200` },
    { setName: '2020 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1/191594', logName: `${CYAN_PLATE} - #1-200` },
    { setName: '2020 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1/191594', logName: `${MAGENTA_PLATE} - #1-200` },
    { setName: '2020 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1/191594', logName: `${YELLOW_PLATE} - #1-200` },

    // 1954 World On Wheels
    { cardNumberPrefix: '54W-', setName: '2020 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-1954-world-wheels/191620', logName: `${SUPER} - 1954 World on Wheels` },
    { cardNumberPrefix: '54W-', setName: '2020 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-1954-world-wheels/191620', logName: `${BLACK_PLATE} - 1954 World on Wheels` },
    { cardNumberPrefix: '54W-', setName: '2020 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-1954-world-wheels/191620', logName: `${CYAN_PLATE} - 1954 World on Wheels` },
    { cardNumberPrefix: '54W-', setName: '2020 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-1954-world-wheels/191620', logName: `${MAGENTA_PLATE} - 1954 World on Wheels` },
    { cardNumberPrefix: '54W-', setName: '2020 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-1954-world-wheels/191620', logName: `${YELLOW_PLATE} - 1954 World on Wheels` },

    // Autos
    { cardNumberPrefix: 'F1A-', setName: '2020 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-autographs/191614', logName: `${SUPER} - Autos` },
    { cardNumberPrefix: 'F1A-', setName: '2020 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-autographs/191614', logName: `${BLACK_PLATE} - Autos` },
    { cardNumberPrefix: 'F1A-', setName: '2020 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-autographs/191614', logName: `${CYAN_PLATE} - Autos` },
    { cardNumberPrefix: 'F1A-', setName: '2020 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-autographs/191614', logName: `${MAGENTA_PLATE} - Autos` },
    { cardNumberPrefix: 'F1A-', setName: '2020 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2020/topps-chrome-formula-1-autographs/191614', logName: `${YELLOW_PLATE} - Autos` },

    // ================================================================================================================
    // 2021 Topps
    // SAPPHIRE
    { setName: '2021 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-sapphire-edition/213045', logName: `${PAD}` },

    // CHROME
    // Main #'d cards
    { setName: '2021 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1/208841', logName: `${SUPER}` },
    { setName: '2021 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black print', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1/208841', logName: `${BLACK_PLATE}` },
    { setName: '2021 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1/208841', logName: `${CYAN_PLATE}` },
    { setName: '2021 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1/208841', logName: `${MAGENTA_PLATE}` },
    { setName: '2021 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1/208841', logName: `${YELLOW_PLATE}` },

    // Inserts
    // 1961 Sports Cars
    { dashIndex: 3, setName: '2021 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-1961-sports-cars/208868', logName: `${SUPER} - 1961 Sports Cars` },
    { dashIndex: 3, setName: '2021 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-1961-sports-cars/208868', logName: `${BLACK_PLATE} - 1961 Sports Cars` },
    { dashIndex: 3, setName: '2021 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-1961-sports-cars/208868', logName: `${CYAN_PLATE} - 1961 Sports Cars` },
    { dashIndex: 3, setName: '2021 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-1961-sports-cars/208868', logName: `${MAGENTA_PLATE} - 1961 Sports Cars` },
    { dashIndex: 3, setName: '2021 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-1961-sports-cars/208868', logName: `${YELLOW_PLATE} - 1961 Sports Cars` },

    // Path To Podium
    { dashIndex: 3, setName: '2021 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-path-podium/208869', logName: `${SUPER} - Path to Podium` },
    { dashIndex: 3, setName: '2021 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-path-podium/208869', logName: `${BLACK_PLATE} - Path to Podium` },
    { dashIndex: 3, setName: '2021 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-path-podium/208869', logName: `${CYAN_PLATE} - Path to Podium` },
    { dashIndex: 3, setName: '2021 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-path-podium/208869', logName: `${MAGENTA_PLATE} - Path to Podium` },
    { dashIndex: 3, setName: '2021 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-path-podium/208869', logName: `${YELLOW_PLATE} - Path to Podium` },

    // Redliners
    { dashIndex: 2, setName: '2021 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-redliners/208870', logName: `${SUPER} - Redliners` },
    { dashIndex: 2, setName: '2021 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-redliners/208870', logName: `${BLACK_PLATE} - Redliners` },
    { dashIndex: 2, setName: '2021 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-redliners/208870', logName: `${CYAN_PLATE} - Redliners` },
    { dashIndex: 2, setName: '2021 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-redliners/208870', logName: `${MAGENTA_PLATE} - Redliners` },
    { dashIndex: 2, setName: '2021 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-redliners/208870', logName: `${YELLOW_PLATE} - Redliners` },

    // Autos
    { dashIndex: 2, setName: '2021 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-autographs/208865', logName: `${SUPER} - Autos` },
    { dashIndex: 2, setName: '2021 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-autographs/208865', logName: `${BLACK_PLATE} - Autos` },
    { dashIndex: 2, setName: '2021 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-autographs/208865', logName: `${CYAN_PLATE} - Autos` },
    { dashIndex: 2, setName: '2021 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-autographs/208865', logName: `${MAGENTA_PLATE} - Autos` },
    { dashIndex: 2, setName: '2021 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-chrome-formula-1-autographs/208865', logName: `${YELLOW_PLATE} - Autos` },

    // FLAGSHIP
    // Main #'d cards
    { setName: '2021 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-formula-1/207596', logName: `${FOILFRACTOR}` },

    // Inserts
    { dashIndex: 2, setName: '2021 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-formula-1-apex-predators/207626', logName: `${FOILFRACTOR} - Apex Predators` }, // Apex Predators
    { dashIndex: 1, setName: '2021 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-formula-1-debrief/207631', logName: `${FOILFRACTOR} - Debrief` }, // Debrief
    { setName: '2021 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-formula-1-flags-foundation/207599', logName: `${FOILFRACTOR} - Flags Foundation` }, // Flags Foundation

    // Relics
    { dashIndex: 3, setName: '2021 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2021/topps-formula-1-f1-relics/207598', logName: `${FOILFRACTOR} - Relics` },

    // ================================================================================================================
    // 2022 Topps

    // SAPPHIRE
    { setName: '2022 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-sapphire-edition/231377', logName: `${PAD}` },

    // CHROME
    // Main #'d Cards
    { setName: '2022 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1/226946', logName: `${SUPER}` },
    { setName: '2022 Topps Chrome Formula 1', parallel: BLACK_RAYWAVE, searchTerm: 'black ray', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1/226946', logName: `${BLACK_RAYWAVE}` },
    { setName: '2022 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black print', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1/226946', logName: BLACK_PLATE },
    { setName: '2022 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1/226946', logName: CYAN_PLATE },
    { setName: '2022 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1/226946', logName: MAGENTA_PLATE },
    { setName: '2022 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1/226946', logName: YELLOW_PLATE },

    // 1968 Hot Rods
    { dashIndex: 3, setName: '2022 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-1968-hot-rods/227002', logName: `${SUPER} - 1968 Hot Rods` },
    { dashIndex: 3, setName: '2022 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-1968-hot-rods/227002', logName: `${BLACK_PLATE} - 1968 Hot Rods` },
    { dashIndex: 3, setName: '2022 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-1968-hot-rods/227002', logName: `${CYAN_PLATE} - 1968 Hot Rods` },
    { dashIndex: 3, setName: '2022 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-1968-hot-rods/227002', logName: `${MAGENTA_PLATE} - 1968 Hot Rods` },
    { dashIndex: 3, setName: '2022 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-1968-hot-rods/227002', logName: `${YELLOW_PLATE} - 1968 Hot Rods` },

    // Art Du Grand Prix - SKIP MAGENTA, YELLOW
    { cardNumberPrefix: 'ADGPC-', setName: '2022 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-art-du-grand-prix/227015', logName: `${SUPER} - ADGP` },
    { cardNumberPrefix: 'ADGPC-', setName: '2022 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-art-du-grand-prix/227015', logName: `${BLACK_PLATE} - ADGP` },
    { cardNumberPrefix: 'ADGPC-', setName: '2022 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-art-du-grand-prix/227015', logName: `${CYAN_PLATE} - ADGP` },

    // Autos
    { dashIndex: 3, setName: '2022 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-autographs/226996', logName: `${SUPER} - Autos` },
    { dashIndex: 3, setName: '2022 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-autographs/226996', logName: `${BLACK_PLATE} - Autos` },
    { dashIndex: 3, setName: '2022 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-autographs/226996', logName: `${CYAN_PLATE} - Autos` },
    { dashIndex: 3, setName: '2022 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-autographs/226996', logName: `${MAGENTA_PLATE} - Autos` },
    { dashIndex: 3, setName: '2022 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-autographs/226996', logName: `${YELLOW_PLATE} - Autos` },

    // Constructors Coalition
    { dashIndex: 2, setName: '2022 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-constructors-coalition/227010', logName: `${SUPER} - Constructor's Coalition` },
    { dashIndex: 2, setName: '2022 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-constructors-coalition/227010', logName: `${BLACK_PLATE} - Constructor's Coalition` },
    { dashIndex: 2, setName: '2022 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-constructors-coalition/227010', logName: `${CYAN_PLATE} - Constructor's Coalition` },
    { dashIndex: 2, setName: '2022 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-constructors-coalition/227010', logName: `${MAGENTA_PLATE} - Constructor's Coalition` },
    { dashIndex: 2, setName: '2022 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-constructors-coalition/227010', logName: `${YELLOW_PLATE} - Constructor's Coalition` },

    // Speed Demons
    { dashIndex: 2, setName: '2022 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-speed-demons/227012', logName: `${SUPER} - Speed Demons` },
    { dashIndex: 2, setName: '2022 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-speed-demons/227012', logName: `${BLACK_PLATE} - Speed Demons` },
    { dashIndex: 2, setName: '2022 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-speed-demons/227012', logName: `${CYAN_PLATE} - Speed Demons` },
    { dashIndex: 2, setName: '2022 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-speed-demons/227012', logName: `${MAGENTA_PLATE} - Speed Demons` },
    { dashIndex: 2, setName: '2022 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-chrome-formula-1-speed-demons/227012', logName: `${YELLOW_PLATE} - Speed Demons` },

    // FLAGSHIP
    { setName: '2022 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-formula-1/225592', logName: FOILFRACTOR }, // Main #'d Cards
    { dashIndex: 3, setName: '2022 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-formula-1-1968-hot-rod/225650', logName: `${FOILFRACTOR} - 1968 Hot Rods` }, // 1968 Hot Rod
    // SKIP - { dashIndex: 4, setName: '2022 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-formula-1-art-du-grand-prix/225667' }, // Art Du Grand Prix
    { dashIndex: 4, setName: '2022 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-formula-1-bounce-rock-race-roll/225662', logName: `${FOILFRACTOR} - Bounce Rock Race Roll` }, // Bounce Rock Race Roll
    // SKIP { dashIndex: 4, setName: '2022 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-formula-1/225592' }, // Clean Air Blue Skies
    { dashIndex: 4, setName: '2022 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-formula-1-f1-relics/225634', logName: `${FOILFRACTOR} - Relic` }, // Relics
    { dashIndex: 3, setName: '2022 Topps Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2022/topps-formula-1-flash-brilliance/225666', logName: `${FOILFRACTOR} - Flash of Brilliance` }, // Flash of Brilliance

    // ================================================================================================================
    // 2023 Topps
    // SAPPHIRE
    { setName: '2023 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-sapphire-edition/263698', logName: PAD },

    // CHROME
    // Main #'d
    { setName: '2023 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1/261728', logName: SUPER },
    { setName: '2023 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1/261728', logName: BLACK_PLATE },
    { setName: '2023 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1/261728', logName: CYAN_PLATE },
    { setName: '2023 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1/261728', logName: MAGENTA_PLATE },
    { setName: '2023 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1/261728', logName: YELLOW_PLATE },

    // Art Du Grand Prix
    { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-art-du-grand-prix/261820', logName: `${SUPER} - ADGP` },
    // SKIP - { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-art-du-grand-prix/261820' },
    // SKIP - { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-art-du-grand-prix/261820' },
    // SKIP - { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-art-du-grand-prix/261820' },
    { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-art-du-grand-prix/261820', logName: `${YELLOW_PLATE} - ADGP` },

    // Autos of 1977
    { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-autos-1977/261825', logName: `${SUPER} - Autos of 1977` },
    { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-autos-1977/261825', logName: `${BLACK_PLATE} - Autos of 1977` },
    { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-autos-1977/261825', logName: `${CYAN_PLATE} - Autos of 1977` },
    { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-autos-1977/261825', logName: `${MAGENTA_PLATE} - Autos of 1977` },
    { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-autos-1977/261825', logName: `${YELLOW_PLATE} - Autos of 1977` },

    // Camber
    { dashIndex: 3, setName: '2023 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-camber/261829', logName: `${SUPER} - Camber` },
    { dashIndex: 3, setName: '2023 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-camber/261829', logName: `${BLACK_PLATE} - Camber` },
    { dashIndex: 3, setName: '2023 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-camber/261829', logName: `${CYAN_PLATE} - Camber` },
    { dashIndex: 3, setName: '2023 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-camber/261829', logName: `${MAGENTA_PLATE} - Camber` },
    { dashIndex: 3, setName: '2023 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-camber/261829', logName: `${YELLOW_PLATE} - Camber` },

    // Autos
    { dashIndex: 3, setName: '2023 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-autographs/261809', logName: `${SUPER} - Autos` },
    { dashIndex: 3, setName: '2023 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-autographs/261809', logName: `${BLACK_PLATE} - Autos` },
    { dashIndex: 3, setName: '2023 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-autographs/261809', logName: `${CYAN_PLATE} - Autos` },
    { dashIndex: 3, setName: '2023 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-autographs/261809', logName: `${MAGENTA_PLATE} - Autos` },
    { dashIndex: 3, setName: '2023 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-autographs/261809', logName: `${YELLOW_PLATE} - Autos` },

    // Constructor Crests
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-constructors-crest/262273', logName: `${SUPER} - Crests` },
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-constructors-crest/262273', logName: `${BLACK_PLATE} - Crests` },
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-constructors-crest/262273', logName: `${CYAN_PLATE} - Crests` },
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-constructors-crest/262273', logName: `${MAGENTA_PLATE} - Crests` },
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-constructors-crest/262273', logName: `${YELLOW_PLATE} - Crests` },

    // F1 Armor
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-f1-armour/262434', logName: `${SUPER} - F1 Armor` },
    // SKIP - { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-f1-armour/262434' },
    // SKIP - { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-f1-armour/262434' },
    // SKIP - { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-f1-armour/262434' },
    // SKIP - { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-f1-armour/262434' },

    // Futuro Auto
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'autograph-super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-futuro/261818', logName: `${SUPER} - Futuro Auto` },

    // Speed Demons
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-speed-demons/262436', logName: `${SUPER} - Speed Demons` },
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-speed-demons/262436', logName: `${BLACK_PLATE} - Speed Demons` },
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-speed-demons/262436', logName: `${CYAN_PLATE} - Speed Demons` },
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-speed-demons/262436', logName: `${MAGENTA_PLATE} - Speed Demons` },
    { dashIndex: 2, setName: '2023 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-speed-demons/262436', logName: `${YELLOW_PLATE} - Speed Demons` },

    // Turn Up The Lights
    { dashIndex: 4, setName: '2023 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2023/topps-chrome-formula-1-turn-up-lights/262439', logName: `${SUPER} - Turn Up The Lights` },
    // ================================================================================================================
    // 2024 Topps

    // SAPPHIRE
    { setName: '2024 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-sapphire-edition/292516', logName: `${PAD} - #1-200` }, // Main #'d Cards
    { cardNumberPrefix: '1954-', setName: '2024 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-sapphire-edition-1954/293886', logName: `${PAD} - 1954` }, // 1954
    { cardNumberPrefix: '1954-', setName: '2024 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-sapphire-edition-1954-signatures/291548', logName: `${PAD} - 1954 Autos` }, // 1954 Autos
    { cardNumberPrefix: 'CAC-', setName: '2024 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-sapphire-edition-autographs/289779', logName: `${PAD} - Autos` }, // Autos
    { dashIndex: 3, setName: '2024 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-sapphire-edition-camber/293988', logName: `${PAD} - Camber` }, // Camber
    { dashIndex: 2, setName: '2024 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-sapphire-edition-helmet-collection/292517', logName: `${PAD} - Helmets` }, // Helmet
    { cardNumberPrefix: 'RECH-', setName: '2024 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-sapphire-edition-re-charged/293982', logName: `${PAD} - Recharged` }, // RE-Charged
    { dashIndex: 2, setName: '2024 Topps Chrome Sapphire Formula 1', parallel: PAD, searchTerm: 'pad', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-sapphire-edition-speed-demons/293885', logName: `${PAD} - Speed Demons` }, // Speed Demons

    // LOGOFRACTOR
    { setName: '2024 Topps Chrome Logofractor Formula 1', parallel: ROSE_GOLD, searchTerm: 'rose', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-logofractor-edition/291842', logName: `${ROSE_GOLD} - #1-200` }, // Main #'d Cards
    { setName: '2024 Topps Chrome Logofractor Formula 1', parallel: ROSE_GOLD, searchTerm: 'rose', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-logofractor-edition-1954/291843', logName: `${ROSE_GOLD} - 1954` }, // 1954
    { dashIndex: 3, setName: '2024 Topps Chrome Logofractor Formula 1', parallel: ROSE_GOLD, searchTerm: 'rose', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-logofractor-edition-camber/291841', logName: `${ROSE_GOLD} - Camber` }, // Camber
    { dashIndex: 2, setName: '2024 Topps Chrome Logofractor Formula 1', parallel: ROSE_GOLD, searchTerm: 'rose', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-logofractor-edition-helmet-collection/291693', logName: `${ROSE_GOLD} - Helmets` }, // Helmet
    { dashIndex: 4, setName: '2024 Topps Chrome Logofractor Formula 1', parallel: ROSE_GOLD, searchTerm: 'rose', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-logofractor-edition-re-charged/291861', logName: `${ROSE_GOLD} - Recharged` }, // RE-Charged
    { setName: '2024 Topps Chrome Logofractor Formula 1', parallel: ROSE_GOLD, searchTerm: 'rose', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-logofractor-edition-speed-demons/291688', logName: `${ROSE_GOLD} - Speed Demons` }, // Speed Demons

    // CHROME
    { setName: '2024 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1/286923', logName: SUPER }, // Main #'d Cards
    { setName: '2024 Topps Chrome Formula 1', parallel: BLACK_RAYWAVE, searchTerm: 'black ray', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1/286923', logName: BLACK_RAYWAVE },
    { setName: '2024 Topps Chrome Formula 1', parallel: BLACK_PLATE, searchTerm: 'black print', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1/286923', logName: BLACK_PLATE },
    { setName: '2024 Topps Chrome Formula 1', parallel: CYAN_PLATE, searchTerm: 'cyan', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1/286923', logName: CYAN_PLATE },
    { setName: '2024 Topps Chrome Formula 1', parallel: MAGENTA_PLATE, searchTerm: 'magenta', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1/286923', logName: MAGENTA_PLATE },
    { setName: '2024 Topps Chrome Formula 1', parallel: YELLOW_PLATE, searchTerm: 'yellow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1/286923', logName: YELLOW_PLATE },

    { setName: '2024 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-1954/286983', logName: `${SUPER} - 1954` }, // 1954
    { dashIndex: 4, setName: '2024 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-1954-autographs/286992', logName: `${SUPER} - 1954 Autos` }, // 1954 Autos
    { dashIndex: 3, setName: '2024 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-autographs/286984', logName: `${SUPER} - Autos` }, // Autos
    { dashIndex: 3, setName: '2024 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-camber/287005', logName: `${SUPER} - Camber` }, // Camber
    { dashIndex: 3, setName: '2024 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-circuit-master-signatures/286985', logName: `${SUPER} - CMS` }, // Circuit Master Signature
    { dashIndex: 3, setName: '2024 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-futuro-autographs/286991', logName: `${SUPER} - Futuro Autos` }, // Futuro Auto
    { dashIndex: 2, setName: '2024 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-helmet-collection/287021', logName: `${SUPER} - Helmets` }, // Helmet
    { dashIndex: 4, setName: '2024 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-re-charged/287024', logName: `${SUPER} - Recharged` }, // RE-Charged
    { dashIndex: 2, setName: '2024 Topps Chrome Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-chrome-formula-1-speed-demons/287025', logName: `${SUPER} - Speed Demons` }, // Speed Demons

    // FINEST
    { setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1/301243', logName: `${SUPER} - #1-300` }, // # 1 - 300
    { dashIndex: 2, setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-chaos/301751', logName: `${SUPER} - Chaos` }, // Chaos
    { dashIndex: 3, setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-f1-relics/301898', logName: `${SUPER} - F1 Relics` }, // F1 Relics
    { dashIndex: 3, setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-autographs/301391', logName: `${SUPER} - Finest Autos` }, // Finest Autos
    { dashIndex: 3, setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-duos-relics/301899', logName: `${SUPER} - Duo Relics` }, // Duo Relics
    { dashIndex: 2, setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-formulas-relics/301900', logName: `${SUPER} - Finest Relics` }, // Finest Relics
    // SKIP - { dashIndex: 3, setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-finishers/301904' }, // Finishers
    { dashIndex: 2, setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-headliners/301905', logName: `${SUPER} - Headliners` }, // Headliners
    // SKIP - { setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-intimidators/301674' }, // Intimidators
    // SKIP - { setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-masters/301906' }, // Masters
    // SKIP - { setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: '' }, // Raceday Relics
    // SKIP - { setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: '' }, // Signature Fashion Autos
    { dashIndex: 3, setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-starting-grid-signatures/301683', logName: `${SUPER} - Starting Grid Signatures` }, // Starting Grid Signatures
    // SKIP - { setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: '' }, // Track Attack Relics
    { dashIndex: 2, setName: '2024 Topps Finest Formula 1', parallel: SUPER, searchTerm: 'super', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-finest-formula-1-worlds/301746', logName: `${SUPER} - World's Finest` }, // World's Finest

    // PADDOCK PASS
    // NOTE: 1-80 done manually due to image variations not having clear number
    { dashIndex: 2, setName: '2024 Topps Paddock Pass Formula 1', parallel: GOLD_RAINBOW_INSERT, searchTerm: 'gold rainbow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-aerodynamic/290840', logName: `${GOLD_RAINBOW_INSERT} - Aerodynamics` }, // Aerodynamic
    { dashIndex: 2, setName: '2024 Topps Paddock Pass Formula 1', parallel: GOLD_RAINBOW_INSERT, searchTerm: 'gold rainbow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-angle-attack/290844', logName: `${GOLD_RAINBOW_INSERT} - Angle of Attack` }, // Angle of Attack
    { cardNumberPrefix: 'AP-', setName: '2024 Topps Paddock Pass Formula 1', parallel: GOLD_RAINBOW_AUTO, searchTerm: 'gold rainbow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-apex-autographs/290969', logName: `${GOLD_RAINBOW_AUTO} - Apex Autos` }, // Apex Auto
    { dashIndex: 2, setName: '2024 Topps Paddock Pass Formula 1', parallel: GOLD_RAINBOW_INSERT, searchTerm: 'gold rainbow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-blur/290898', logName: `${GOLD_RAINBOW_INSERT} - In A Blur` }, // In A Blur
    { cardNumberPrefix: 'LS-', setName: '2024 Topps Paddock Pass Formula 1', parallel: GOLD_RAINBOW_AUTO, searchTerm: 'gold rainbow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-lone-star-signatures/290658', logName: `${GOLD_RAINBOW_AUTO} - Lone Star Signatures` }, // Lone Star Signature
    { dashIndex: 2, setName: '2024 Topps Paddock Pass Formula 1', parallel: GOLD_RAINBOW_INSERT, searchTerm: 'gold rainbow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-nightscapes/290902', logName: `${GOLD_RAINBOW_INSERT} - Nightscapes` }, // Nightscapes
    { cardNumberPrefix: 'FR-', setName: '2024 Topps Paddock Pass Formula 1', parallel: FOIL_RELIC, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-relics/290920', logName: `${FOIL_RELIC} - Paddock Pass Relics` }, // Paddock Pass Relics
    { cardNumberPrefix: 'PPS-', setName: '2024 Topps Paddock Pass Formula 1', parallel: GOLD_RAINBOW_AUTO, searchTerm: 'gold rainbow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-signatures/291016', logName: `${GOLD_RAINBOW_AUTO} - Paddock Pass Signatures` }, // Paddock Pass Signatures
    { dashIndex: 2, setName: '2024 Topps Paddock Pass Formula 1', parallel: GOLD_RAINBOW_INSERT, searchTerm: 'gold rainbow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-power-packed/290904', logName: `${GOLD_RAINBOW_INSERT} - Power Packed` }, // Power Packed
    { cardNumberPrefix: 'RL-', setName: '2024 Topps Paddock Pass Formula 1', parallel: GOLD_RAINBOW_AUTO, searchTerm: 'gold rainbow', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-racing-line-signatures/290257', logName: `${GOLD_RAINBOW_AUTO} - Racing Line Signatures` }, // Racing Line Signatures
    { cardNumberPrefix: 'TV-', setName: '2024 Topps Paddock Pass Formula 1', parallel: FOIL_RELIC, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-terminal-velocity-relics/290965', logName: `${FOIL_RELIC} - Terminal Velo Relic` }, // Terminal Velocity Relic
    { cardNumberPrefix: 'TC-', setName: '2024 Topps Paddock Pass Formula 1', parallel: FOIL_RELIC, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2024/topps-paddock-pass-formula-1-top-crop-relics/290967', logName: `${FOIL_RELIC} - Top Crop Relic` }, // Top Crop Relic
    // ================================================================================================================
    // 2025 Topps
    // Fanatics Fest
    { setName: '2025 Topps Fanatics Fest Formula 1', parallel: FOILFRACTOR, searchTerm: 'foilfractor', psaUrl: 'https://www.psacard.com/pop/misc-cards/2025/topps-formula-1-fanatics-fest-nyc/308871', logName: `${FOILFRACTOR} - Base` }, // Base
]

const COMMUNITY_ONE_OF_ONE_MAP = []

module.exports = {
    PSA_ONE_OF_ONE_MAP,
    COMMUNITY_ONE_OF_ONE_MAP,
}