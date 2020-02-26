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
                center: [5.4, 5.7],
                zoom: 8.5,
                pitch: 40,
                bearing: -10,
               
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
            legend: {
                title: 'Tis the first',
                desccription: 'Nallllldsf',
                data: [
                    1,
                    2,
                    3,
                    4
                ]
            }
        },
        {
            id: 'reserve',
            title: 'Natural Gas Reserve ',
            image: './',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [5.4, 5.7],
                zoom: 8.5,
                pitch: 0,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'bunkering',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'bunkering',
                //     opacity: 0
                // }
            ],
            legend: {
                title: 'Tis the first',
                desccription: 'Nallllldsf',
                data: [
                    1,
                    2,
                    3,
                    4
                ]
            }
        },

        {
            id: 'seaports',
            title: 'Available Seaports ',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [5.4, 5.7],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'bunkering',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'bunkering',
                //     opacity: 0
                // }
            ],
            legend: {
                title: 'Tis the first',
                desccription: 'Nallllldsf',
                data: [
                    1,
                    2,
                    3,
                    4
                ]
            }
        },

        {
            id: 'water',
            title: 'Main Water ways ',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [5.4, 5.7],
                zoom: 8.5,
                pitch: 20,
                bearing: 0
            },
            onChapterEnter: [
                // {
                //     layer: 'bunkering',
                //     opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'bunkering',
                //     opacity: 0
                // }
            ],
            legend: {
                title: 'Tis the first',
                desccription: 'Nallllldsf',
                data: [
                    1,
                    2,
                    3,
                    4
                ]
            }
        }


    ]
};

export default config;