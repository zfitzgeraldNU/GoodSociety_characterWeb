// Define characters and their associated information
// This is the information used to a) give character ID for later calls, b) connect other information, and c) populate the text field on the info popup.

/* 
Structure

id: name of the character object used to reference it
name: displayed name
image: displayed image, be sure to match the image name EXACTLY (including file type extension)
peerage, address, age, faceclaim, playedBy: self-explanatory. Populates text in the info popup box- will need to edit popup.js if changes are made to character object info
hasInfo: flags whether to search for text document and displays 'more info' button in info popup

*/
export const characters = [
    {
        id: "elenor",
        name: "Elenor Huntley",
        image: "images/AK.jpg",
        peerage: "Countess",
        address: "Lady Huntley",
        age: 24,
        faceclaim: "Alina Kovalenko",
        hasInfo: true,
        playedBy: "Kay"
    },

    {
        id: "forbes",
        name: "Forbes Bland",
        image: "images/BirkanSokullu.png",
        peerage: "Baron",
        address: "Bland (never warmly) or Forbes among those who tolerate him",
        age: "36 (deceased)",
        faceclaim: "Birkan Sokullu",
        deceased: true,
        hasInfo: false,
        playedBy: "None"
    },

    {
        id: "nigel",
        name: "Nigel Vaughan",
        image: "images/AdeelAkhtar.png",
        peerage: "Marquis",
        address: "Monsieur le Marquis de Vaughan",
        age: "55 (deceased)",
        faceclaim: "Adeel Akhtar",
        deceased: true,
        hasInfo: false,
        playedBy: "None"
    },

    {
        id: "matthew",
        name: "Matthew Caunter",
        image: "images/RichardMadden.png",
        peerage: "Marquess",
        address: "Lord Caunter",
        age: "29",
        faceclaim: "Richard Madden",
        hasInfo: true,
        playedBy: "Kay"
    },

    {
        id: "lucius",
        name: "Lucius Hilgrove",
        image: "images/SebastianAmoruso.png",
        peerage: "Count",
        address: "Count Hilgrove",
        age: "24",
        faceclaim: "Sebastian Amoruso",
        hasInfo: true,
        playedBy: "Nevi"
    },

    {
        id: "patricia",
        name: "Patricia Bell",
        image: "images/LucyLawless.png",
        peerage: "None",
        address: "None",
        age: "60",
        faceclaim: "Lucy Lawless",
        hasInfo: true,
        playedBy: "Nevi"

    },

    {
        id: "esmerelda",
        name: "Esmerelda Hyde",
        image: "images/AnyaTaylorJoy.png",
        peerage: "None",
        address: "Lady Hyde",
        age: "18",
        faceclaim: "Anya Taylor-Joy",
        hasInfo: true,
        playedBy: "Nevi"
    },

    {
        id: "imelda",
        name: "Imelda Hyde",
        image: "images/JENNIFER_COOLIDGE_5.png",
        peerage: "Baroness (in her husband's right)",
        address: "Lady Hyde",
        age: 64,
        faceclaim: "Jennifer Coolidge",
        hasInfo: true,
        playedBy: "Joel"
    },

    {
        id: "edward",
        name: "Edward Hyde",
        image: "images/PatrickGibson.png",
        peerage: "Baron",
        address: "Lord Hyde",
        age: "21",
        faceclaim: "Patrick Gibson",
        hasInfo: true,
        playedBy: "JD"
    },

    {
        id: "oliver",
        name: "Oliver Gracefeld",
        image: "images/RufusSewell.png",
        peerage: "Earl",
        address: "Count Gracefeld",
        age: "25",
        faceclaim: "Rufus Sewell",
        hasInfo: true,
        playedBy: "Zach"
    },

    {
        id: "james",
        name: "James Lancaster",
        image: "images/TobyAlexanderSmith.png",
        peerage: "Baron",
        address: "Lord Lancaster",
        age: "27",
        faceclaim: "Toby-Alexander Smith",
        hasInfo: true,
        playedBy: "Joel"

    },

    {
        id: "rosalind",
        name: "Rosalind Lancaster",
        image: "images/LarissaOpitz.png",
        peerage: "Baroness",
        address: "Lady Lancaster",
        age: "25",
        faceclaim: "Larissa Opitz",
        hasInfo: false,
        playedBy: "Kay"
    },

    {
        id: "damian",
        name: "Damian Ravenscroft",
        image: "images/ChristianDaloi3.png",
        peerage: "Viscount",
        address: "Lord Ravenscroft",
        age: 26,
        faceclaim: "Christian Daloi",
        hasInfo: true,
        playedBy: "JD"
    },

    {
        id: "arthur",
        name: "Arthur Ravenscroft",
        image: "images/HenryIanCusick.jpg",
        peerage: "Viscount",
        address: "Lord Ravenscroft",
        age: "58 (deceased)",
        faceclaim: "Henry Ian Cusick",
        deceased: true,
        hasInfo: false,
        playedBy: "None"
    },

    {
        id: "judith",
        name: "Judith Ravenscroft",
        image: "images/melissa-ponzio.png",
        peerage: "Viscountess",
        address: "Lady Ravenscroft",
        age: "49",
        faceclaim: "Melissa Ponzio",
        hasInfo: false,
        playedBy: "Zach"
    },

    {
        id: "simon",
        name: "Simon Ravenscroft",
        image: "images/EoinMacke.png",
        peerage: "Viscount",
        address: "Lord Ravenscroft",
        age: "53",
        faceclaim: "Eoin Macke",
        hasInfo: false,
        playedBy: "Zach"
    },

    {
        id: "helena",
        name: "Helena Ravenscroft",
        image: "images/Sarah Vidorreta 2.jpg",
        peerage: "Sister of a Viscount",
        address: "Miss Ravenscroft",
        age: 23,
        faceclaim: "Sarah Vidorreta",
        hasInfo: true,
        playedBy: "Nevi"
    },

    {
        id: 'timothy',
        name: "Timothy Belmont",
        image: "images/ZachEffron.png",
        peerage: "None",
        address: "Mr. Belmont",
        age: "26",
        faceclaim: "Zac Effron",
        hasInfo: true,
        playedBy: "Zach"
    },

    {
        id: "piers",
        name: "Piers Graham",
        image: "images/JamesNorton.png",
        peerage: "Clergy",
        address: "Father Graham",
        age: "34",
        faceclaim: "James Norton",
        hasInfo: true,
        playedBy: "Zach"
    },

    {
        id: "cecil",
        name: "Cecil Whitmore",
        image: "images/LouisGarrel.jpg",
        peerage: "Duke",
        address: "Lord Whitmore",
        age: "39",
        faceclaim: "Louis Garrel",
        hasInfo: true,
        playedBy: "Zach"
    },

    {
        id: "ben",
        name: "Benedict Huntington IV",
        image: "images/Jungkook.png",
        peerage: "Marquess",
        address: "Lord Huntington",
        age: 25,
        faceclaim: "Jung Kook",
        hasInfo: false,
        playedBy: "TBD"
    },

    {
        id: "daisy",
        name: "Daisy Warwick",
        image: "images/EssieDavis.jpg",
        peerage: "Daughter of a Count",
        address: "Miss Warwick",
        age: 24,
        faceclaim: "Essie Davis",
        hasInfo: true,
        playedBy: "Joel"
    },

    {
        id: "sophia",
        name: "Sophia Lloyd",
        image: "images/TanyaRavichandran.png",
        peerage: "Daughter of a Duke",
        address: "Lady Lloyd",
        age: "24",
        faceclaim: "Tanya Ravichandran",
        hasInfo: false,
        playedBy: "Kay"
    },

    {
        id: "andrew",
        name: "Andrew Partridge",
        image: "images/CallumTurner.png",
        peerage: "Earl of Glenroth",
        address: "Lord Glenroth",
        age: "22 (deceased)",
        faceclaim: "Callum Turner",
        deceased: true,
        hasInfo: false,
        playedBy: "None"
    },
    
    {
        id: "warren",
        name: "Warren Beckham",
        image: "images/AidanTurner.png",
        peerage: "None",
        address: "Mr. Beckham",
        age: 29,
        faceclaim: "Aidian Turner",
        hasInfo: false,
        playedBy: "Zach"
    }
]