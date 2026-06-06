// scripts.js

let hoveredCharacter = false;

const characters = [
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
        playedBy: "TBD"
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
        address: "Lord Marquess",
        age: "29",
        faceclaim: "Richard Madden",
        hasInfo: true,
        playedBy: "TBD"
    },

    {
        id: "lucius",
        name: "Lucius Hilgrove",
        image: "images/SebastianAmoruso.png",
        peerage: "???",
        address: "???",
        age: "???",
        faceclaim: "Sebastian Amoruso",
        hasInfo: false,
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
        playedBy: "TBD"

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
        playedBy: "I forgot"
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
        playedBy: "TBD"
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
        playedBy: "Joel?"

    },

    {
        id: "rosalind",
        name: "Rosalind Hawthorne",
        image: "images/LarissaOpitz.png",
        peerage: "???",
        address: "???",
        age: "???",
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
        playedBy: "TBD"
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
        id: 'troy',
        name: "Troy Boulton",
        image: "images/ZachEffron.png",
        peerage: "None",
        address: "Mr. Boulton",
        age: "26",
        faceclaim: "Zac Effron",
        hasInfo: true,
        playedBy: "TBD"
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
        id: "ben",
        name: "Benedict Huntington IV",
        image: "images/Jungkook.png",
        peerage: "Marquess",
        address: "Lord Huntington",
        age: 25,
        faceclaim: "Jung Kook",
        hasInfo: true,
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
        playedBy: "TBD"
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
        playedBy: "TBD"
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

// Show the pop up box with the passed text
function showBox(id) {
    const character = characters.find(c => c.id === id);
    const moreInfoBtn = document.getElementById("moreInfoBtn");

    if (!character) return;

    document.getElementById("popupName").innerText = character.name;
    document.getElementById("popupImage").src = character.image;
    document.getElementById("popupPeerage").innerText = character.peerage;
    document.getElementById("popupAddress").innerText = character.address;
    document.getElementById("popupAge").innerText = character.age;
    document.getElementById("popupFace").innerText = character.faceclaim;
    document.getElementById("popupPlayedBy").innerText = character.playedBy;

    document.getElementById("moreInfoBtn").dataset.id = id;

    if (character.hasInfo) {
        moreInfoBtn.style.display = 'block';
    } else {
        moreInfoBtn.style.display = 'none';
    }
    
    const textBox = document.getElementById("moreInfoText");
    textBox.classList.remove("show");
    textBox.innerText = "";

    document.querySelector(".popup-content").classList.remove("expanded");

    document.getElementById("box").classList.add("active");
}

// More info button
document.getElementById("moreInfoBtn").onclick = async () => {
    const currentId = document.getElementById("moreInfoBtn").dataset.id;
    const textBox = document.getElementById("moreInfoText");

    // Toggle behavior
    if (textBox.classList.contains("show")) {
        textBox.classList.remove("show");
        textBox.innerText = "";
        document.querySelector(".popup-content").classList.remove("expanded");
        return
    }

    try {
        const response = await fetch(`data/${currentId}.txt`);
        const text = await response.text();

        textBox.innerText = text;
        textBox.classList.add("show");

        document.querySelector(".popup-content").classList.add("expanded");

    } catch (err) {
        console.error(err);
        textBox.innerText = "Could not load additional information.";
        textBox.classList.add("show");
    }
};

// Hide the pop up box
function hideBox() {
    document.getElementById("box").classList.remove("active");
}

// Allow clicking outside of pop up box to exit pop up box
document.getElementById("box").addEventListener('click', (e) => {
    if(e.target === document.getElementById("box")) {
        hideBox();
    }
});

// Define connections
const connections = [

    // Sort by character? Prioritize PCs
    { 
        from: 'elenor', 
        to: 'helena', 
        lineId: 'line1', 
        type: 'Platonic',
        subtype: 'Friends'
    },

    { 
        from: 'helena', 
        to: 'arthur', 
        lineId: 'line2',
        type: 'Familial',
        subtype: 'Parent/Child'
    },

    { 
        from: 'damian', 
        to: 'helena', 
        lineId: 'line3',
        type: 'Familial',
        subtype: 'Siblings'
    },

    { 
        from: 'elenor', 
        to: 'warren', 
        lineId: 'line4',
        type: 'Other',
        subtype: 'Employer/Body Guard'
    },

    { 
        from: 'elenor', 
        to: 'andrew', 
        lineId: 'line5',
        type: 'Other',
        subtype: 'Business Associate'
    },

    { 
        from: 'elenor', 
        to: 'forbes', 
        lineId: 'line6',
        type: 'Romantic',
        subtype: 'Former Spouse'
    },

    { 
        from: 'elenor', 
        to: 'nigel', 
        lineId: 'line7',
        type: 'Other',
        subtype: 'Business Associate'
    },

    { 
        from: 'damian',
        to: 'arthur', 
        lineId: 'line8',
        type: 'Familial',
        subtype: 'Parent/Child'
    },

    { 
        from: 'damian', 
        to: 'rosalind', 
        lineId: 'line9',
        type: 'Romantic',
        subtype: 'Childhood lovers'
    },

    { 
        from: 'rosalind', 
        to: 'damian', 
        lineId: 'line10',
        type: 'Romantic',
        subtype: 'Childhood lovers'
    },

    { 
        from: 'damian', 
        to: 'judith', 
        lineId: 'line11',
        type: 'Familial',
        subtype: 'Parent/Child'
    },

    { 
        from: 'helena', 
        to: 'judith', 
        lineId: 'line12',
        type: 'Familial',
        subtype: 'Parent/Child'
    },

    { 
        from: 'imelda', 
        to: 'edward', 
        lineId: 'line13',
        type: 'Familial',
        subtype: 'Parent/Child'
    },

    { 
        from: 'imelda', 
        to: 'esmerelda', 
        lineId: 'line14',
        type: 'Familial',
        subtype: 'Parent/Child'
    },

    { 
        from: 'arthur', 
        to: 'judith', 
        lineId: 'line15',
        type: 'Romantic',
        subtype: 'Former Spouse'
    },

    {
        from: 'edward',
        to: 'esmerelda',
        lineId: 'line16',
        type: 'Familial',
        subtype: 'Parent/Child'
    },

    {
        from: 'judith',
        to: 'simon',
        lineId: 'line17',
        type: 'Romantic',
        subtype: 'Spouse'
    },

    {
        from: 'helena',
        to: 'simon',
        lineId: 'line18',
        type: 'Familial',
        subtype: 'Uncle/Niece'
    },

    {
        from: 'damian',
        to: 'simon',
        lineId: 'line19',
        type: 'Familial',
        subtype: 'Uncle/Nephew'
    },

    {
        from: 'imelda',
        to: 'patricia',
        lineId: 'line20',
        type: 'Other',
        subtype: 'Employer/Maid'
    },

    {
        from: 'helena',
        to: 'daisy',
        lineId: 'line21',
        type: 'Platonic',
        subtype: 'Friends',
    },

    {
        from: 'elenor',
        to: 'daisy',
        lineId: 'line22',
        type: 'Platonic',
        subtype: 'Friends'
    },

    {
        from: 'james',
        to: 'rosalind',
        lineId: 'line23',
        type: 'Romantic',
        subtype: 'Married'
    },

    {
        from: 'imelda',
        to: 'elenor',
        lineId: 'line24',
        type: 'Other',
        subtype: 'Mentor/Mentee'
    },

    {
        from: 'daisy',
        to: 'ben',
        lineId: 'line25',
        type: 'Other',
        subtype: 'Grievant/Respondent'
    },
];

// Connections colors
const relationshipColors = {
    'Platonic': 'rgb(63, 104, 206)',
    'Familial': 'rgba(162, 201, 170, 1)',
    'Romantic': 'rgba(255, 29, 141, 1)',
    'Other':    'rgba(117, 117, 117, 1)'
};

// Define image and circle size
const container = document.body;
//const imageSize = 200; // must match .image-container width/height
const baseSize = 200;
const minSize = 85;
const imageSize = Math.max(
    minSize,
    baseSize - (characters.length - 6) * 10
);
const minSpacing = imageSize * 1.4;
//const radius = (characters.length * minSpacing) / (2 * Math.PI);
//const radius = Math.min(window.innerWidth, window.innerHeight) / 3; // adjust to make circle bigger/smaller
const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;
const maxRadius = Math.min(window.innerWidth, window.innerHeight) / 2 - imageSize;
const radius = Math.min(
    (characters.length * imageSize * 1.4) / (2 * Math.PI), maxRadius
);


// Plot images
characters.forEach((character, index) => { 

    // Create the image container div
    const imgContainer = document.createElement('div');
    imgContainer.classList.add('image-container');
    imgContainer.id = character.id;
    imgContainer.style.width = `${imageSize}px`;
    imgContainer.style.height = `${imageSize}px`;

    imgContainer.addEventListener('mouseenter', () => {
        hoveredCharacter = true;
        updateCenterTitle();
    });

    imgContainer.addEventListener('mouseleave', () => {
        hoveredCharacter = false;
        updateCenterTitle();
    });

    // Compute circular position
    const angle = (index / characters.length) * 2 * Math.PI;
    const x = centerX + radius * Math.cos(angle) - imageSize / 2;
    const y = centerY + radius * Math.sin(angle) - imageSize / 2;

    imgContainer.style.left = `${x}px`;
    imgContainer.style.top = `${y}px`;

    // Create the image element
    const img = document.createElement('img');
    //img.src = image.src; v1
    img.src = character.image;
    img.classList.add('clickable-img');

    // Create overlay div
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');

    // Create deceased icon
    const deceasedIcon = document.createElement('img');
    deceasedIcon.src = 'images/deadIcon.jpg';
    deceasedIcon.classList.add('deceased-icon');
    if (!character.deceased) {
        deceasedIcon.style.display = 'none';
    }
    
    const offset = imageSize / 2 + 30;
    deceasedIcon.style.left = `${imageSize / 2 + offset * Math.cos(angle)}px`;
    deceasedIcon.style.top = `${imageSize / 2 + offset * Math.sin(angle)}px`;
    deceasedIcon.style.transform = 'translate(-50%, -50%)';

    // Create left icon v1
    const iconLeft = document.createElement('img');
    iconLeft.src = 'images/connections_clear.png';
    iconLeft.classList.add('icon', 'left');

    iconLeft.onclick = () => {
        const imageId = character.id;

        const relatedConnections = connections.filter(conn =>
            conn.from === imageId || conn.to === imageId
        );

        const allVisible = relatedConnections.every(conn => {
            const line = document.getElementById(conn.lineId);
            return line && line.style.display === 'block';
        });

        relatedConnections.forEach(conn => {
            let line = document.getElementById(conn.lineId);

            if (!line) {
                drawLine(conn.from, conn.to, conn.lineId);
                line = document.getElementById(conn.lineId);
            }
            
            if (line) {
                const length = line.getTotalLength();

                if (allVisible) {
                    line.style.transition = "none";
                    line.style.strokeDasharray = length;
                    line.style.strokeDashoffset = "0";

                    line.getBoundingClientRect();

                    line.style.transition = "stroke-dashoffset 0.4s ease";
                    line.style.strokeDashoffset = length;

                    line.addEventListener('transitionend', () => {
                        line.style.display = 'none';
                        line.dataset.visible = "false";

                        updateButton(); // update AFTER animation completes
                    }, { once: true });
                } else {
                    line.style.display = 'block';
                    line.dataset.visible = "true";

                    line.style.transition = "none";
                    line.style.strokeDasharray = length;
                    line.style.strokeDashoffset = length;

                    line.getBoundingClientRect();

                    line.style.transition = "stroke-dashoffset 0.4s ease";
                    line.style.strokeDashoffset = "0";
                }
            }

        });
        updateButton();
    };
    

    // Create left icon

     
    // Create right icon
    const iconRight = document.createElement('img');
    iconRight.src = 'images/info.png';
    iconRight.classList.add('icon', 'right');
    //iconRight.onclick = () => showBox(image.id); v1
    iconRight.onclick = () => showBox(character.id);

    // Append icons to the overlay - v1
    overlay.appendChild(iconLeft);
    overlay.appendChild(iconRight);

    // Create label for hover text
    const label = document.createElement('div');
    label.classList.add('image-label');
    //label.innerText = characters[image.id].name; v1
    label.innerText = character.name;

    // Add image and overlay to the image container
    imgContainer.appendChild(img);
    imgContainer.appendChild(overlay);
    imgContainer.appendChild(label);
    imgContainer.appendChild(deceasedIcon);

    // Append image containter to the body
    container.appendChild(imgContainer);
});

// Draw lines between images
function drawLine(imgId1, imgId2, lineId) {
    const conn = connections.find(c => c.lineId === lineId);
    const color = conn ? relationshipColors[conn.type] || 'black' : 'black';

    const el1 = document.querySelector(`#${imgId1} .clickable-img`);
    const el2 = document.querySelector(`#${imgId2} .clickable-img`);

    if (!el1 || !el2) return;

    const img1 = el1.getBoundingClientRect();
    const img2 = el2.getBoundingClientRect();

    // Centers of the circles
    const c1 = {
        x: img1.left + img1.width / 2 + window.scrollX,
        y: img1.top + img1.height / 2 + window.scrollY
    };
    const c2 = {
        x: img2.left + img2.width / 2 + window.scrollX,
        y: img2.top + img2.height / 2 + window.scrollY
    };

    // Radius of circles (assumes width = height)
    const r1 = img1.width / 2;
    const r2 = img2.width / 2;

    // Vector from c1 → c2
    const dx = c2.x - c1.x;
    const dy = c2.y - c1.y;
    const dist = Math.sqrt(dx*dx + dy*dy);
    if (dist === 0) return;

    // Avoid division by zero
    const ux = dx / dist;
    const uy = dy / dist;

    // Line starts and ends at the edges of the circles
    const x1 = c1.x + ux * r1;
    const y1 = c1.y + uy * r1;
    const x2 = c2.x - ux * r2;
    const y2 = c2.y - uy * r2;

    // Ensure line element exists
    let line = document.getElementById(lineId);
    if (!line) {
        line = document.createElementNS("http://www.w3.org/2000/svg", "path");
        line.classList.add('connection-line');
        line.setAttribute("id", lineId);
        line.setAttribute("stroke-width", 2);
        line.setAttribute("stroke", color);
        line.setAttribute("fill", "none");
        line.style.display = 'block';
        line.dataset.visible = "true";
        document.getElementById("connections").appendChild(line);
    } else {
        line.setAttribute("stroke", color);
    }

    // Line hover
    if (!line.dataset.labelId) {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;

        const label = document.createElement('div');
        label.classList.add('line-label');
        label.innerText = conn.subtype; // Line label here
        label.style.left = `${mx}px`;
        label.style.top = `${my}px`;
        label.style.transform = 'translate(-50%, -50%)';
        label.style.position = 'absolute';
        label.style.background = 'rgba(0,0,0,0.7)';
        label.style.color = 'white';
        label.style.padding = '2px 6px';
        label.style.borderRadius = '6px';
        label.style.fontSize = '15px';
        label.style.zIndex = 100;
        label.style.pointerEvents = 'none';
        label.style.opacity = 0;
        label.style.transition = 'opacity 0.3s ease';

        label.id = `label-${lineId}`;
        line.dataset.labelId = label.id;
        document.body.appendChild(label);

        // Invisible hover path
        const hoverPath = document.createElementNS("http://www.w3.org/2000/svg", "path");

        hoverPath.classList.add('hover-path');

        hoverPath.setAttribute("fill", "none");
        hoverPath.setAttribute("stroke", "transparent");
        hoverPath.setAttribute("stroke-width", 20); // hover path thickness
        hoverPath.style.pointerEvents = "stroke";
        hoverPath.style.cursor = "pointer";

        hoverPath.id = `hover-${lineId}`;

        document.getElementById("connections").appendChild(hoverPath);

        hoverPath.addEventListener('mouseenter', () => {
            label.style.opacity = 1;
        });

        hoverPath.addEventListener('mouseleave', () => {
            label.style.opacity = 0;
        });
    }

    const index1 = characters.findIndex(c => c.id === imgId1);
    const index2 = characters.findIndex(c => c.id === imgId2);

    let diff = Math.abs(index1 - index2);
    diff = Math.min(diff, characters.length - diff);
    const isAdjacent = diff <= 1;

    let d;

    if (isAdjacent) {
        d = `M ${x1} ${y1} L ${x2} ${y2}`;
    } else {

        const cx = window.innerWidth /2;
        const cy = window.innerHeight / 2;
        const curveStrength = 0.3;
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const controlX = mx + (cx - mx) * curveStrength;
        const controlY = my + (cy - my) * curveStrength;

        d = `M ${x1} ${y1} Q ${controlX} ${controlY} ${x2} ${y2}`;
        
    }
    line.setAttribute("d",d);

    const hoverPath = document.getElementById(`hover-${lineId}`);
    if (hoverPath) {
        hoverPath.setAttribute("d",d);
    }

    const label = document.getElementById(`label-${lineId}`);

    if (label) {
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;

        label.style.left = `${mx}px`;
        label.style.top = `${my}px`;
    }

    // Animate line drawing
    const length = line.getTotalLength();
    line.style.strokeDasharray = length;
    line.style.strokeDashoffset = length;

    line.getBoundingClientRect();
    line.style.transition = "stroke-dashoffset 0.4s ease";
    line.style.strokeDashoffset = "0";
}

// Event listener for search
document.getElementById('searchBox').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const imageContainers = document.querySelectorAll('.image-container');

    // Loop through all the images
    imageContainers.forEach(container => {
        const imageName = container.querySelector('.image-label').innerText.toLowerCase();

        const img = container.querySelector('.clickable-img');

        if (imageName.includes(searchTerm)) {
            //img.style.filter = '';
            img.classList.remove('dimmed');
        } else {
            img.classList.add('dimmed');
        }
    });
});

// Event listener for "Clear Search" button
document.getElementById('clearSearchBtn').addEventListener('click', function() {
    document.getElementById('searchBox').value = '';

    const imageContainers = document.querySelectorAll('.image-container');
    imageContainers.forEach(container => {
        const img = container.querySelector('.clickable-img');
        img.classList.remove('dimmed');
    });
});

// Update button state
function updateButton() {
    const anyVisible = Array.from(
    document.querySelectorAll('#connections .connection-line')).some(line => line.dataset.visible === "true");

    const btn = document.getElementById('toggleConnectionsBtn');

    if (anyVisible) {
        btn.innerText = "Clear All Connections";
    } else {
        btn.innerText = "Show All Connections";
    }
}

function updateCenterTitle() {
    const title = document.getElementById('centerTitle');
    const anyVisibleConnections = Array.from(
        document.querySelectorAll('#connections .connection-line')
    ).some(line => line.dataset.visible === "true");

    const anyHovered = hoveredCharacter;

    if (anyVisibleConnections || anyHovered) {
        title.classList.add('hidden');
    } else {
        title.classList.remove('hidden');
    }
}

// Show all connections
function showAllConnections() {
   connections.forEach(conn => {
    drawLine(conn.from, conn.to, conn.lineId);

        const line = document.getElementById(conn.lineId);
        if (line) {
            line.style.display = 'block';
            line.dataset.visible =  "true";

            const length = line.getTotalLength();

            line.style.transition = "none";
            line.style.strokeDasharray = length;
            line.style.strokeDashoffset = length;

            line.getBoundingClientRect();

            line.style.transition = "stroke-dashoffset 0.4s ease";
            line.style.strokeDashoffset = "0";
        }
   });

   requestAnimationFrame(() => {
    updateButton();
   });
}

function clearAllConnections() {
    //document.querySelectorAll('#connections path').forEach(line => {
    document.querySelectorAll('#connections .connection-line').forEach(line => {
        const length = line.getTotalLength();

        line.style.transition = "none";
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = "0";

        line.getBoundingClientRect();

        line.style.transition = "stroke-dashoffset 0.4s ease";
        line.style.strokeDashoffset = length;

        line.addEventListener('transitionend', () => {
            line.style.display = 'none';
            line.dataset.visible = "false";
            updateButton();
        }, {once: true});
    });
}

// New show all connection button
const toggleBtn = document.getElementById('toggleConnectionsBtn');

toggleBtn.addEventListener('click', () => {
    const anyVisible = Array.from(document.querySelectorAll('#connections .connection-line'))
        .some(line => line.dataset.visible === "true");

        if (anyVisible) {
            clearAllConnections();
        } else {
            showAllConnections();
        }
});

// Help layout of images to accomodate window size changes
function layoutImages() {
    //const radius = Math.min(window.innerWidth, window.innerHeight) / 3;
    const maxRadius = Math.min(window.innerWidth, window.innerHeight) / 2 - imageSize;

    const radius = Math.min(
        (characters.length * imageSize * 1.4) / (2 * Math.PI), maxRadius
    );
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    characters.forEach((character, index) => {
        const angle = (index / characters.length) * 2 * Math.PI;
        const x = centerX + radius * Math.cos(angle) - imageSize / 2;
        const y = centerY + radius * Math.sin(angle) - imageSize / 2;

        const imgContainer = document.getElementById(character.id);
        imgContainer.style.left = `${x}px`;
        imgContainer.style.top = `${y}px`;
    });
}

window.addEventListener('load', () => {
    layoutImages();
    updateButton();
});

window.addEventListener('resize', () => {
    layoutImages();

    connections.forEach(conn => {
        const line = document.getElementById(conn.lineId);
        if (line?.dataset.visible === "true") {
            drawLine(conn.from, conn.to, conn.lineId);
        }
    });
});

setInterval(updateCenterTitle, 100);