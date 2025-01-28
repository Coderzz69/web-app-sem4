// State details data
const stateDetails = {
    'Maharashtra': {
        capital: 'Mumbai',
        description: 'Maharashtra is India\'s second-most populous state and third-largest by area.',
        founded: '1 May 1960',
        chiefMinister: 'Uddhav Thackeray',
        gdp: '400 billion USD',
        touristAttractions: ['Gateway of India', 'Ajanta and Ellora Caves', 'Shirdi']
    },
    'Gujarat': {
        capital: 'Gandhinagar',
        description: 'Gujarat is known for its diverse culture and rich heritage.',
        founded: '1 May 1960',
        chiefMinister: 'Bhupendrabhai Patel',
        gdp: '230 billion USD',
        touristAttractions: ['Statue of Unity', 'Gir National Park', 'Rann of Kutch']
    },
    'Rajasthan': {
        capital: 'Jaipur',
        description: 'Rajasthan is famous for its royal palaces and vibrant festivals.',
        founded: '30 March 1949',
        chiefMinister: 'Ashok Gehlot',
        gdp: '140 billion USD',
        touristAttractions: ['Hawa Mahal', 'Amber Fort', 'Jaisalmer Fort']
    },
    'Karnataka': {
        capital: 'Bengaluru',
        description: 'Karnataka is known for its technology industry and historical sites.',
        founded: '1 November 1956',
        chiefMinister: 'Basavaraj Bommai',
        gdp: '250 billion USD',
        touristAttractions: ['Mysore Palace', 'Hampi', 'Coorg']
    },
    'Tamil Nadu': {
        capital: 'Chennai',
        description: 'Tamil Nadu is known for its Dravidian-style Hindu temples and classical arts.',
        founded: '26 January 1950',
        chiefMinister: 'M. K. Stalin',
        gdp: '260 billion USD',
        touristAttractions: ['Meenakshi Temple', 'Marina Beach', 'Ooty']
    },
    'West Bengal': {
        capital: 'Kolkata',
        description: 'West Bengal is known for its cultural heritage and colonial architecture.',
        founded: '1 November 1956',
        chiefMinister: 'Mamata Banerjee',
        gdp: '180 billion USD',
        touristAttractions: ['Victoria Memorial', 'Sundarbans', 'Darjeeling']
    },
    'Uttar Pradesh': {
        capital: 'Lucknow',
        description: 'Uttar Pradesh is known for its historical monuments and religious significance.',
        founded: '24 January 1950',
        chiefMinister: 'Yogi Adityanath',
        gdp: '220 billion USD',
        touristAttractions: ['Taj Mahal', 'Varanasi', 'Fatehpur Sikri']
    },
    'Punjab': {
        capital: 'Chandigarh',
        description: 'Punjab is known for its vibrant culture and agricultural productivity.',
        founded: '1 November 1966',
        chiefMinister: 'Charanjit Singh Channi',
        gdp: '80 billion USD',
        touristAttractions: ['Golden Temple', 'Jallianwala Bagh', 'Wagah Border']
    },
    'Kerala': {
        capital: 'Thiruvananthapuram',
        description: 'Kerala is known for its backwaters, beaches, and Ayurvedic tourism.',
        founded: '1 November 1956',
        chiefMinister: 'Pinarayi Vijayan',
        gdp: '110 billion USD',
        touristAttractions: ['Alleppey Backwaters', 'Munnar', 'Kochi']
    },
    'Bihar': {
        capital: 'Patna',
        description: 'Bihar is known for its ancient history and cultural heritage.',
        founded: '22 March 1912',
        chiefMinister: 'Nitish Kumar',
        gdp: '70 billion USD',
        touristAttractions: ['Mahabodhi Temple', 'Nalanda University', 'Vikramshila']
    },
    'Madhya Pradesh': {
        capital: 'Bhopal',
        description: 'Madhya Pradesh is known for its historical sites and wildlife reserves.',
        founded: '1 November 1956',
        chiefMinister: 'Shivraj Singh Chouhan',
        gdp: '130 billion USD',
        touristAttractions: ['Khajuraho Temples', 'Kanha National Park', 'Sanchi Stupa']
    },
    'Andhra Pradesh': {
        capital: 'Amaravati',
        description: 'Andhra Pradesh is known for its rich cultural heritage and historical significance.',
        founded: '1 November 1956',
        chiefMinister: 'Y. S. Jagan Mohan Reddy',
        gdp: '150 billion USD',
        touristAttractions: ['Tirupati Temple', 'Araku Valley', 'Vijayawada']
    },
    'Assam': {
        capital: 'Dispur',
        description: 'Assam is known for its tea plantations and diverse wildlife.',
        founded: '26 January 1950',
        chiefMinister: 'Himanta Biswa Sarma',
        gdp: '60 billion USD',
        touristAttractions: ['Kaziranga National Park', 'Kamakhya Temple', 'Majuli']
    },
    'Chhattisgarh': {
        capital: 'Raipur',
        description: 'Chhattisgarh is known for its temples and waterfalls.',
        founded: '1 November 2000',
        chiefMinister: 'Bhupesh Baghel',
        gdp: '50 billion USD',
        touristAttractions: ['Chitrakote Falls', 'Bhoramdeo Temple', 'Barnawapara Wildlife Sanctuary']
    },
    'Goa': {
        capital: 'Panaji',
        description: 'Goa is known for its beaches and Portuguese heritage.',
        founded: '30 May 1987',
        chiefMinister: 'Pramod Sawant',
        gdp: '11 billion USD',
        touristAttractions: ['Baga Beach', 'Basilica of Bom Jesus', 'Dudhsagar Falls']
    },
    'Haryana': {
        capital: 'Chandigarh',
        description: 'Haryana is known for its agricultural productivity and historical sites.',
        founded: '1 November 1966',
        chiefMinister: 'Manohar Lal Khattar',
        gdp: '95 billion USD',
        touristAttractions: ['Sultanpur Bird Sanctuary', 'Kurukshetra', 'Pinjore Gardens']
    },
    'Himachal Pradesh': {
        capital: 'Shimla',
        description: 'Himachal Pradesh is known for its hill stations and scenic beauty.',
        founded: '25 January 1971',
        chiefMinister: 'Jai Ram Thakur',
        gdp: '35 billion USD',
        touristAttractions: ['Shimla', 'Manali', 'Dharamshala']
    },
    'Jharkhand': {
        capital: 'Ranchi',
        description: 'Jharkhand is known for its mineral resources and waterfalls.',
        founded: '15 November 2000',
        chiefMinister: 'Hemant Soren',
        gdp: '45 billion USD',
        touristAttractions: ['Dassam Falls', 'Betla National Park', 'Ranchi Hill']
    },
    'Manipur': {
        capital: 'Imphal',
        description: 'Manipur is known for its classical dance and scenic landscapes.',
        founded: '21 January 1972',
        chiefMinister: 'N. Biren Singh',
        gdp: '4 billion USD',
        touristAttractions: ['Loktak Lake', 'Kangla Fort', 'Keibul Lamjao National Park']
    },
    'Meghalaya': {
        capital: 'Shillong',
        description: 'Meghalaya is known for its rainfall and living root bridges.',
        founded: '21 January 1972',
        chiefMinister: 'Conrad Sangma',
        gdp: '5 billion USD',
        touristAttractions: ['Cherrapunji', 'Mawsynram', 'Umiam Lake']
    },
    'Mizoram': {
        capital: 'Aizawl',
        description: 'Mizoram is known for its bamboo products and vibrant festivals.',
        founded: '20 February 1987',
        chiefMinister: 'Zoramthanga',
        gdp: '3 billion USD',
        touristAttractions: ['Phawngpui', 'Vantawng Falls', 'Aizawl']
    },
    'Nagaland': {
        capital: 'Kohima',
        description: 'Nagaland is known for its tribal culture and festivals.',
        founded: '1 December 1963',
        chiefMinister: 'Neiphiu Rio',
        gdp: '4 billion USD',
        touristAttractions: ['Kohima War Cemetery', 'Dzukou Valley', 'Hornbill Festival']
    },
    'Odisha': {
        capital: 'Bhubaneswar',
        description: 'Odisha is known for its temples and classical dance forms.',
        founded: '1 April 1936',
        chiefMinister: 'Naveen Patnaik',
        gdp: '75 billion USD',
        touristAttractions: ['Konark Sun Temple', 'Puri Beach', 'Chilika Lake']
    },
    'Sikkim': {
        capital: 'Gangtok',
        description: 'Sikkim is known for its monasteries and scenic beauty.',
        founded: '16 May 1975',
        chiefMinister: 'Prem Singh Tamang',
        gdp: '3 billion USD',
        touristAttractions: ['Tsomgo Lake', 'Nathula Pass', 'Rumtek Monastery']
    },
    'Telangana': {
        capital: 'Hyderabad',
        description: 'Telangana is known for its historical sites and rich culture.',
        founded: '2 June 2014',
        chiefMinister: 'K. Chandrashekar Rao',
        gdp: '130 billion USD',
        touristAttractions: ['Charminar', 'Golconda Fort', 'Ramoji Film City']
    },
    'Tripura': {
        capital: 'Agartala',
        description: 'Tripura is known for its palaces and temples.',
        founded: '21 January 1972',
        chiefMinister: 'Biplab Kumar Deb',
        gdp: '5 billion USD',
        touristAttractions: ['Ujjayanta Palace', 'Neermahal', 'Sepahijala Wildlife Sanctuary']
    },
    'Uttarakhand': {
        capital: 'Dehradun',
        description: 'Uttarakhand is known for its pilgrimage sites and natural beauty.',
        founded: '9 November 2000',
        chiefMinister: 'Pushkar Singh Dhami',
        gdp: '40 billion USD',
        touristAttractions: ['Nainital', 'Haridwar', 'Rishikesh']
    },
    'Andaman and Nicobar Islands': {
        capital: 'Port Blair',
        description: 'Andaman and Nicobar Islands are known for their beaches and marine life.',
        founded: '1 November 1956',
        chiefMinister: 'Admiral D K Joshi',
        gdp: '1 billion USD',
        touristAttractions: ['Radhanagar Beach', 'Cellular Jail', 'Havelock Island']
    },
    'Chandigarh': {
        capital: 'Chandigarh',
        description: 'Chandigarh is a union territory and the capital of both Punjab and Haryana.',
        founded: '1 November 1966',
        chiefMinister: 'V. P. Singh Badnore',
        gdp: '5 billion USD',
        touristAttractions: ['Rock Garden', 'Sukhna Lake', 'Rose Garden']
    },
    'Dadra and Nagar Haveli and Daman and Diu': {
        capital: 'Daman',
        description: 'Dadra and Nagar Haveli and Daman and Diu are known for their beaches and Portuguese heritage.',
        founded: '26 January 2020',
        chiefMinister: 'Praful Khoda Patel',
        gdp: '2 billion USD',
        touristAttractions: ['Jampore Beach', 'Diu Fort', 'Silvassa']
    },
    'Lakshadweep': {
        capital: 'Kavaratti',
        description: 'Lakshadweep is known for its exotic beaches and coral reefs.',
        founded: '1 November 1956',
        chiefMinister: 'Praful Khoda Patel',
        gdp: '1 billion USD',
        touristAttractions: ['Agatti Island', 'Bangaram Island', 'Minicoy Island']
    },
    'Delhi': {
        capital: 'New Delhi',
        description: 'Delhi is the capital territory of India and known for its historical monuments.',
        founded: '1 November 1956',
        chiefMinister: 'Arvind Kejriwal',
        gdp: '210 billion USD',
        touristAttractions: ['Red Fort', 'Qutub Minar', 'India Gate']
    },
    'Puducherry': {
        capital: 'Puducherry',
        description: 'Puducherry is known for its French colonial architecture and beaches.',
        founded: '1 November 1954',
        chiefMinister: 'N. Rangasamy',
        gdp: '4 billion USD',
        touristAttractions: ['Auroville', 'Promenade Beach', 'Paradise Beach']
    },
    'Ladakh': {
        capital: 'Leh',
        description: 'Ladakh is known for its mountainous landscapes and Buddhist monasteries.',
        founded: '31 October 2019',
        chiefMinister: 'Radha Krishna Mathur',
        gdp: '2 billion USD',
        touristAttractions: ['Pangong Lake', 'Nubra Valley', 'Leh Palace']
    }
};


function showStateDetails(state) {
    const details = stateDetails[state];
    if (details) {
        document.getElementById('state-title').innerText = state;
        document.getElementById('state-capital').innerText = details.capital;
        document.getElementById('state-founded').innerText = details.founded;
        document.getElementById('state-description').innerText = details.description;
        document.getElementById('state-chief-minister').innerText = details.chiefMinister;
        document.getElementById('state-gdp').innerText = details.gdp;
        document.getElementById('state-tourist-attractions').innerText = details.touristAttractions.join(', ');

        // Show the slideshow section
        document.querySelector('.slideshow-section').style.display = 'block';
    }
}

// Add click handlers to map areas
document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('area');
    areas.forEach(area => {
        area.addEventListener('click', function(e) {
            e.preventDefault();
            const stateName = this.getAttribute('title');
            showStateDetails(stateName);
        });
    });
});