// Define connections
export const connections = [

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
export const relationshipColors = {
    'Platonic': 'rgb(63, 104, 206)',
    'Familial': 'rgba(162, 201, 170, 1)',
    'Romantic': 'rgba(255, 29, 141, 1)',
    'Other':    'rgba(117, 117, 117, 1)'
};