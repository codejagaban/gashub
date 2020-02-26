var config = {
    style: 'mapbox://styles/codekyd/ck6xowui21ty81ipb5i994bc7',
    accessToken: 'pk.eyJ1IjoiY29kZWt5ZCIsImEiOiJjazZxazBzeXowMXJvM3NuMW5pc3R0YTRlIn0.798H93rU-1ikw0jJV1HgCQ',
    showMarkers: true,
    theme: 'light',
    alignment: 'left',
    title: 'GasHub',
    byline: '',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            title: 'Display Title',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint oading lpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [6, 5.6],
                zoom: 8.4,
                bearing: 0,
                pitch: 0,
               
            },
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ],
          
        },
        {
            id: 'reserve',
            title: 'Natural Gas Reserve ',
            // image: './',
            description: ' According to Nigerian National Petroleum Corporation (NNPC), Nigeria has around 202 trillion cubic feet (Tcf) of proven gas reserves plus about 600 TCF unproven gas reserves. There is no data for the number of gas reserves in Delta state, so we aggregated the total number of flared gas, spread across 15 LGA\'s in Delta, totaling 528 million cube feet (Mcf). We have about 42 onshore locations where gas are been flared in Delta State.',
            location: {
                center: [6, 5.6],
                zoom: 8.4,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [
         
            ],
          
        },

        {
            id: 'seaports',
            title: 'Available Seaports ',
            // image: './path/to/image/source.png',
            description: `Delta state has three (3) seaports spread across three (3) local governments area in Delta state. Namely <li>Burutu ( with a depth of 21 - 25 feet, 6.4m - 7.6 m)</li> <li>Sapele ( with a depth of 16 - 20 feet, 4.9m - 6.1 m) </li> <li>Warri ( with a depth of 21 - 25, feet 6.4m - 7.6 m).</li>`,
            location: {
                center: [6, 5.7],
                zoom: 8.5,
                pitch: 40,
                bearing: 0
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [
         
            ],
          
        },

        {
            id: 'waters',
            title: 'Major Rivers ',
            // image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6, 5.7],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [
         
            ],
          
        },

       
        {
            id: 'gas-existing', 
            title: 'Existing Gas Plants',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6, 5.7],
                zoom: 8.8,
                pitch: 30,
                bearing: -30
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [],
          
        },
        {
            id: 'pipelines', 
            title: 'Pipelines',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6, 5.7],
                zoom: 8.8,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [],
          
        }


    ]
};

export default config;