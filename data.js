var globalVariable={
    Users: [
        {name:"Gabriel", email:"Gabriel@gmail.com", password:"password1"},
        {name:"Emma", email:"Emma@gmail.com", password:"password2"},
        {name:"Rose", email:"Rose@gmail.com", password:"password3"},
        {name:"Leo", email:"Leo@gmail.com", password:"password4"},
        {name:"Arthur", email:"Arthur@gmail.com", password:"password5"},
    ],

    Hotels_And_Restourants: [
        {
            name: "Monastero Santa Rosa Hotel & Spa", 
            location: "Salerno, Italy", 
            stars: "images/5.png",
            img: "images/hotels and restaurants/hotel1.png",
            role: "hotel",
            rooms: 4,
            price: "2875 $",
            description: `<p>Set in a restored 17th-century monastery, this elegant clifftop hotel 
                        overlooking the sea is 1 km from the beach and 8 km from the gardens of Villa 
                        Rufolo.</p>
                        <p>The plush, upscale rooms come with Wi-Fi, flat-screen TVs and sea views; 
                        some have terraces. Most suites add separate living rooms, dining rooms and/or 
                        antique-style furnishings. Room service is available.</p>
                        <p>Breakfast is available. There's also a refined restaurant with a sea-view 
                        terrace, as well as a cozy bar. Other amenities include an outdoor pool and 
                        landscaped gardens, plus a gym (with some outdoor equipment) and a spa. Kids 
                        age 16 and older are welcome.</p>`
        },

        {
            name: "Grand Hotel Tremezzo", 
            location: "Lake Como, Italy", 
            stars: "images/3.png",
            img: "images/hotels and restaurants/hotel2.png",
            role: "hotel",
            rooms: 6,
            price: "1517 $",
            description: `<p>Overlooking Lake Como, this palatial art nouveau hotel is 250 m from 
                        the Villa Carlotta museum and botanic garden.</p>
                        <p>Formal rooms offer Wi-Fi, flat-screen TVs, minibars and park or lake views; 
                        some have balconies or sitting areas. Suites include whirlpool tubs, and some 
                        have private gardens. Rooftop suites add butlers, and terraces with hot tubs. 
                        Room service is available.</p>
                        <p>Breakfast is served in an elegant restaurant which has a terrace; there's 
                        also a casual trattoria, a posh bar, a beachfront bistro and a poolside 
                        pizzeria. Other amenities include 3 pools, a private beach and a marina, plus 
                        a spa, a fitness room and a tennis court.</p>`
        },

        {
            name: "The Oberoi Udaivilas, Udaipur", 
            location: "Udaipur, India", 
            stars: "images/4.png",
            img: "images/hotels and restaurants/hotel3.png",
            role: "hotel",
            rooms: 3,
            price: "405 $",
            description: `<p>Set amid gardens and overlooking Lake Pichola, this luxury hotel is 
                        2 km from both Jagdish Temple and the City Palace Museum.</p>
                        <p>Bright, elegant rooms and suites feature flat-screen TVs, free Wi-Fi, 
                        DVD players and sitting areas, plus minibars and iPod docks. Suites add 
                        dining rooms, living rooms and coffeemakers, as well as private pools and 
                        furnished courtyards with lake views. A 24-hour butler service is available.</p>
                        <p>Amenities include 2 upscale restaurants and a bar with lake views; private 
                        outdoor lakeside dining is available. There's also a gym, a spa and an outdoor 
                        pool, plus a business centre, meeting rooms and event space.</p>`
        },

        {
            name: "AKA Beverly Hills", 
            location: "Los Angeles, USA",
            stars: "images/5.png",
            img: "images/hotels and restaurants/hotel4.png",
            role: "hotel",
            rooms: 5,
            price: "650 $",
            description: `<p>This upscale, extended-stay hotel in the prestigious Golden Triangle 
                        area is 8 minutes on foot from the glitzy shops on Rodeo Drive and 6 miles 
                        from Santa Monica Airport.</p>
                        <p>Refined 1- and 2-bedroom suites feature kitchens, dining areas and 
                        balconies, as well as flat-screen TVs and free Wi-Fi. Upscale suites add 
                        living rooms with fireplaces, and townhouses have private entrances. Room 
                        service is available.</p>
                        <p>Local transfers in a Mercedes shuttle are complimentary. Other amenities 
                        include a terrace with fire pits, plus a private cinema, a 24-hour gym and 
                        direct access to Spago, an acclaimed restaurant. Secure parking is available.</p>`
        },

        {
            name: "Sheraton Vancouver Airport Hotel", 
            location: "Vancouver, Canada", 
            stars: "images/4.png",
            img: "images/hotels and restaurants/hotel5.png",
            role: "hotel",
            rooms: 4,
            price: "303 $",
            description: `<p>Set 5.8 km from Vancouver International Airport, this unfussy business 
                        hotel is also 14.1 km from Vancouver Art Gallery.</p>
                        <p>Understated rooms have free WiFi, 37-inch flat-screen TVs and balconies, 
                        plus work areas with desks and ergonomic chairs. Suites add separate seating 
                        areas. Club rooms provide access to a lounge with complimentary breakfast, 
                        all-day snacks and afternoon appetizers.</p>
                        <p>There's a complimentary 24-hour airport shuttle. Other amenities include a 
                        funky bistro-style restaurant, a bar, a Starbucks coffee shop, an outdoor pool 
                        and a gym. There's also a business center and 21,000 sq ft of meeting space. 
                        Breakfast and parking are extra.</p>`
        },

        {
            name: "Fairmont Vancouver Airport", 
            location: "Vancouver, Canada", 
            stars: "images/5.png",
            img: "images/hotels and restaurants/hotel6.png",
            role: "hotel",
            rooms: 5,
            price: "283 $",
            description: `<p>Set within the Vancouver International Airport, this upscale hotel 
                        is 1 km from YVR-Airport Station train station and 9 km from VanDusen 
                        Botanical Garden.</p>
                        <p>The chic rooms and suites offer flat-screens and coffeemakers, plus 
                        floor-to-ceiling soundproofed windows with runway, mountain or ocean views. 
                        They also come with minibars and Wi-Fi, while upgraded rooms and suites add 
                        access to a lounge with complimentary breakfast, plus whirlpool tubs, 
                        Nespresso machines and free Wi-Fi.</p>
                        <p>Amenities include a sophisticated restaurant and bar, an indoor pool, a 
                        fitness center with a spa, as well as a business center and meeting rooms. 
                        Parking is extra.</p>`
        },

        {
            name: "Ahn Luh Zhujiajiao", 
            location: "Zhujiajiao, China", 
            stars: "images/5.png",
            img: "images/hotels and restaurants/hotel7.png",
            role: "hotel",
            rooms: 4,
            price: "820 $",
            description: `<p>It’s impossible to look at Ahn Luh Zhujiajiao and not be 
                        impressed. Housed partially in a 600-year-old courthouse from 
                        the Ming Dynasty, this hotel looks like the film set for Raise 
                        the Red Lantern. The historic building, which had been beautifully 
                        restored, now serves as the hotel lobby and will transport you to 
                        another era the moment you arrive.</p>
                        <p>This hotel is certainly not a budget option. It consists of 35 new 
                        luxurious villas, each with its own private garden and immaculate 
                        design. The interiors are modern but loosely inspired by the style of 
                        the old Chinese mansion. They’re all perfectly indulgent; however, if 
                        you really want to spoil yourself, the Pool Pavilion features a heated 
                        outdoor swimming pool.</p>`
        },

        {
            name: "Shangri-La Paris", 
            location: "Paris, France", 
            stars: "images/5.png",
            img: "images/hotels and restaurants/hotel8.png",
            role: "hotel",
            rooms: 7,            
            price: "3374 $",
            description: `<p>Occupying a former royal home situated among elegant 
                        buildings, this ritzy hotel in the 16th arr. is a 2-minute walk from 
                        Iéna metro station, 11 minutes' walk from the Eiffel Tower and 
                        1 km from the Seine river.</p>
                        <p>Featuring marble bathrooms with heated floors, the plush 
                        rooms offer free Wi-Fi and flat-screen TVs, plus minibars, and 
                        tea and coffeemakers. Some have Eiffel Tower and/or river 
                        views, and upgraded rooms add balconies or terraces. Lavish 
                        suites come with living rooms; some provide dining rooms.</p>
                        <p>There are 3 posh dining options, including an acclaimed 
                        restaurant, as well as a chic bar. There's also a spa with an 
                        indoor pool and a gym.</p>`
        },
    ],

    Activities: [
        {title: "Sailing", img: "images/activities/1.png"},
        {title: "Climbing", img: "images/activities/2.png"},
        {title: "Skiing", img: "images/activities/3.png"},
        {title: "Hiking", img: "images/activities/4.png"},
        {title: "Skateboarding", img: "images/activities/5.png"},
        {title: "Snowboarding", img: "images/activities/6.png"},
        {title: "Roller-skating", img: "images/activities/7.png"},
        {title: "Mountain biking", img: "images/activities/8.png"},
        {title: "Wingsuit surfing", img: "images/activities/9.png"},
        {title: "Bungee jumping", img: "images/activities/10.png"},
        {title: "Ice climbing", img: "images/activities/11.png"},
        {title: "Diving", img: "images/activities/12.png"},
        {title: "Paragliding", img: "images/activities/13.png"},
        {title: "Rafting", img: "images/activities/14.png"},
        {title: "Surfing", img: "images/activities/15.png"},
        {title: "Surfing", img: "images/activities/16.png"},
    ]
}