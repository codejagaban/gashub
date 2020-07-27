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
            id: 'reserve',
            title: 'Natural Gas Reserve ',
            chart: `<div id="doughnutChart" class="chart"></div>  `,
            // image: './gas.jpg',
            description: ' According to Nigerian National Petroleum Corporation (NNPC), Nigeria has around 202 trillion cubic feet (Tcf) of proven gas reserves plus about 600 TCF unproven gas reserves. There is no data for the number of gas reserves in Delta state, so we aggregated the total number of flared gas, spread across 15 LGA\'s in Delta, totaling 528 million cube feet (Mcf). We have about 42 onshore locations where gas are been flared in Delta State.',
            location: {
                center: [6, 5.8],
                zoom: 8.5,
                bearing: 0,
                pitch: 0,
                duration: 6000,
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [
         
            ],
          
        },

        {
            id: 'seaports',
            title: 'Available Seaports ',
            chart: `<div class="chartBarsWrap chartBarsHorizontal"> 
            <div class="chartBars"> 
                <ul class="bars">  
                    <li> 
                        <div data-percentage="25" class="bar darkBlueBarFlat"></div><b>Warri South</b></li>
                    <li>
                        <div data-percentage="25" class="bar mediumBlueBarFlat"></div><b>Burutu</b></li>
                    <li>
                        <div data-percentage="20" class="bar blueBarFlat"></div><b>Sapele</b></li>
                
                </ul>
            </div>
        </div>
        `,
            // image: './seaport.jpg',
            description: `Delta state has three (3) seaports spread across three (3) local governments area in Delta state. Namely <li>Burutu ( with a depth of 21 - 25 feet, 6.4m - 7.6 m)</li> <li>Sapele ( with a depth of 16 - 20 feet, 4.9m - 6.1 m) </li> <li>Warri ( with a depth of 21 - 25, feet 6.4m - 7.6 m).</li>`,
            location: {
                center: [6.2, 5.7],
                zoom: 8.8,
                pitch: 40,
                bearing: 0,
                duration: 4000,
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
            description: 'Out of the 15 local governments that flare gas, thirteen (13) out of fifteen (15) have major rivers passing through them. Namely: <li>Burutu</li> <li>Sapele</li> <li>Warri South</li> <li>Warri North</li> <li>Warri south-west</li> <li>Ughelli North</li><li>Ughelli South</li> <li>Ndokwa East</li> <li>Ndokwa West</li> <li>Udu</li> <li>Isoko North</li><li>Isoko South</li> <li>Uvwie</li>',
            location: {
                center: [6, 5.7],
                zoom: 8.5,
                pitch: 20,
                bearing: 0,
                duration: 6000,
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [
         
            ],
          
        },

       
        {
            id: 'gas-existing', 
            title: 'Existing Gas Plants',
            // image: './path/to/image/source.png',
            description: 'In Delta state, there are two (2) existing gas plant, located at Ughelli North and Ughelli South.',
            location: {
                center: [6, 5.7],
                zoom: 8.8,
                pitch: 30,
                bearing: -30,
                duration: 5000,
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [],
          
        },
        {
            id: 'pipelines', 
            title: 'Pipelines',
            description: 'Gas Pipelines passed through (10) locations in Delta state, with some locations having more than just one gas pipeline passing through them..',
            location: {
                center: [6, 5.7],
                zoom: 8.8,
                pitch: 0,
                bearing: 0,
                duration: 3000,
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [],
          
        },

        {
            id: 'road-express', 
            title: 'Road Expressway',
            // description: 'Copy these sections to add to your story.',
            location: {
                center: [6, 5.7],
                zoom: 8.5,
                pitch: 0,
                bearing: 0,
                duration: 4000,
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [],
          
        },

        {
            id: 'settlement', 
            title: 'Settlements',
            // description: 'Copy these sections to add to your story.',
            location: {
                center: [6, 5.7],
                zoom: 8.5,
                pitch: 0,
                bearing: 0,
                duration: 5500,
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [],
          
        },

        {
            id: 'bunkering', 
            title: 'Bunkering',
            // description: 'Copy these sections to add to your story.',
            location: {
                center: [6, 5.7],
                zoom: 8.5,
                pitch: 0,
                bearing: 0,
                duration: 3000,
                
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [],
          
        },

        {
            id: 'result', 
            title: 'Results',
            // description: 'Copy these sections to add to your story.',
            location: {
                center: [6, 5.7],
                zoom: 8.5,
                pitch: 0,
                bearing: 0,
                duration: 4000,
            },
            onChapterEnter: [
            
            ],
            onChapterExit: [],
          
        }





    ]
};

export default config;