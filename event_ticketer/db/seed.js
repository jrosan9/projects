const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

async function main() {
  try {
    await prisma.customer_Account.create({
      data: {
        firstName: "John",
        lastName: "Doe",
        username: "jd2424",
        password: await bcrypt.hash("pass123", 10),
        email: "jr242@gmail.com",
        phoneNumber: "123-456-7890",
      },
    });
  } catch (err) {
    throw err;
  }

  await prisma.venues.createMany({
    data: [
      {
        name: "Al Hirschfeld Theatre",
        type: "Theatre",
        location: "302 West 45th Street, New York, NY 10036",
        city: "New York, NY",
        country: "United States",
        seating_arrangement_img:
          "https://seatplan.com/cdn/images/c/map_al-hirschfeld-theatre-seating-plan-new-york.webp",
        ticket_availability: 500,
        seat_capacity: 1304,
      },
      {
        name: "New Amsterdam Theatre",
        type: "Theatre",
        location: "214 West 42nd Street, New York, NY 10036",
        city: "New York, NY",
        country: "United States",
        seating_arrangement_img:
          "https://seatplan.com/cdn/images/c/map_new-amsterdam-theatre-seating-plan-new-york.webp",
        ticket_availability: 1702,
        seat_capacity: 1702,
      },
      {
        name: "Richard Rodgers Theatre",
        type: "Theatre",
        location: "226 West 46th Street, New York, NY 10036",
        city: "New York, NY",
        country: "United States",
        seating_arrangement_img:
          "https://seatplan.com/cdn/images/c/map_richard-rodgers-theatre-seating-plan-new-york.webp",
        ticket_availability: 300,
        seat_capacity: 1302,
      },
      {
        name: "Gershwin Theatre",
        type: "Theatre",
        location: "222 West 51st Street, New York, NY 10019",
        city: "New York, NY",
        country: "United States",
        seating_arrangement_img:
          "https://seatplan.com/cdn/images/c/map_gershwin-theatre-seating-plan-new-york.webp",
        ticket_availability: 200,
        seat_capacity: 1950,
      },
      {
        name: "Madison Square Garden",
        type: "Arena",
        location: "7th Ave & 32nd Street, New York, NY 10001",
        city: "New York, NY",
        country: "United States",
        seating_arrangement_img:
          "https://www.rateyourseats.com/assets/images/seating_charts/static/madison-square-garden-concert-seating-chart-for-end-stage-shows.jpg",
        ticket_availability: 10000,
        seat_capacity: 20000,
      },
      {
        name: "Town Hall",
        type: "Performance-Space/Theatre",
        location: "123 West 43rd Street, New York, NY 10036",
        city: "New York, NY",
        country: "United States",
        seating_arrangement_img:
          "https://images.squarespace-cdn.com/content/v1/55695205e4b0b0ed5ed23665/1441824610573-8FPR2RATY0T0N8BAC3QX/image-asset.png",
        ticket_availability: 500,
        seat_capacity: 1500,
      },
      {
        name: "Radio City Music Hall ",
        type: "Concert Hall",
        location: "1260 6th Avenue, New York, NY 10020",
        city: "New York, NY",
        country: "United States",
        seating_arrangement_img:
          "https://www.rateyourseats.com/assets/images/seating_charts/static/radio-city-music-hall-seating-chart.jpg",
        ticket_availability: 3000,
        seat_capacity: 6020,
      },
      {
        name: "Chase Center",
        type: "arena",
        location: "300 16th Street, San Francisco, CA",
        city: "San Fransisco, CA",
        country: "United States",
        seating_arrangement_img:
          "https://cdn.nba.com/teams/uploads/sites/1610612744/2024/02/CC_Portals_Map_Update_3202x2550_2024-.jpg",
        ticket_availability: 3000,
        seat_capacity: 18100,
      },
      {
        name: "Global Life Field ",
        type: "Stadium",
        location: "734 Stadium Dr, Arlington, TX 76011",
        city: "Arlington, TX",
        country: "United States",
        seating_arrangement_img:
          "https://www.ballparksofbaseball.com/wp-content/uploads/2016/06/globe-life-field-seating-chart.jpg",
        ticket_availability: 30000,
        seat_capacity: 40300,
      },
      {
        name: "Yankee Stadium",
        type: "Stadium",
        location: "1 East 161st Street, Bronx, NY",
        city: "Bronx, NY",
        country: "United States",
        seating_arrangement_img:
          "https://blog.ticketiq.com/hs-fs/hubfs/Yankee%20Stadium%20-%20Soccer%20Seating%20Chart.png?width=600&name=Yankee%20Stadium%20-%20Soccer%20Seating%20Chart.png",
        ticket_availability: 48000,
        seat_capacity: 48000,
      },
      {
        name: "Citi Field ",
        type: "Stadium",
        location: "123-01 Roosevelt Avenue, Flushing, NY",
        city: "Flushing, NY",
        country: "United States",
        seating_arrangement_img:
          "https://www.citifieldstadium.com/wp-content/uploads/2018/01/citi-field-stadium-seating-chart.gif",
        ticket_availability: 41800,
        seat_capacity: 41800,
      },
      {
        name: "Metlife Stadium",
        type: "Stadium",
        location: "1 MetLife Stadium Drive, East Rutherford, NJ",
        city: "East Rutherfold, NJ",
        country: "United States",
        seating_arrangement_img:
          "https://www.metlifestadium.com/images/default-source/default-album/metlife-stadium-seating-map-(5-13-24)2.jpg?sfvrsn=7db67c7b_0" ||
          "https://www.rateyourseats.com/assets/images/seating_charts/static/metlife-stadium-concert-seating-chart-for-end-stage-shows.jpg",
        ticket_availability: 83000,
        seat_capacity: 83000,
      },
      {
        name: "Barclays Center",
        type: "Arena",
        location: "620 Atlantic Ave, Brooklyn, NY 11217",
        city: "Brooklyn, NY",
        country: "United States",
        seating_arrangement_img:
          "https://www.barclayscenter.com/assets/img/bc-basketball-seating-chart-ba9611f272.png" ||
          "https://www.barclayscenter.com/assets/img/bc-show-seating-chart-7a91f5f9fd.png",
        ticket_availability: 19000,
        seat_capacity: 19000,
      },
      {
        name: "UBS Arena ",
        type: "Arena",
        location: "2150 Hempstead Turnpike, Elmont, NY",
        city: "Elmont, NY",
        country: "United States",
        seating_arrangement_img:
          "https://preview.redd.it/jz7zxwhfy9hc1.jpeg?auto=webp&s=e268e416792b3fa5aadbaeff4e7748a8c34ad11b" ||
          "https://www.rateyourseats.com/assets/images/seating_charts/static/ubs-arena-concert-seating-chart-for-end-stage-shows.jpg",
        ticket_availability: 18500,
        seat_capacity: 18500,
      },
    ],
  });
  await prisma.categories.createMany({
    data: [
      {
        name: "Theatre/Arts",
        subCategories: "Broadway",
      },
      {
        name: "Theatre/Arts",
        subCategories: "Comedy",
      },
      {
        name: "Theatre/Arts",
        subCategories: "Classical",
      },
      {
        name: "Sports",
        subCategories: "NBA",
      },
      {
        name: "Sports",
        subCategories: "MLB",
      },
      {
        name: "Sports",
        subCategories: "MLS",
      },
      {
        name: "Sports",
        subCategories: "NFL",
      },
      {
        name: "Sports",
        subCategories: "NHL",
      },
      {
        name: "Sports",
        subCategories: "WNBA",
      },
      {
        name: "Music",
        subCategories: "Pop",
      },
      {
        name: "Music",
        subCategories: "Hip-Hop",
      },
      {
        name: "Music",
        subCategories: "Latin",
      },
      {
        name: "Music",
        subCategories: "Rock",
      },
      {
        name: "Music",
        subCategories: "folk",
      },
      {
        name: "Music",
        subCategories: "other",
      },
    ],
  });

  await prisma.events.createMany({
    data: [
      {
        name: "Moulin Rouge! The Musical on Broadway",
        event_type: "Broadway",
        date: "08-02-2024",
        time: "7-8:30pm EST",
        info: "Originally premiering at Boston’s Emerson Colonial Theatre to critical acclaim, the stage adaptation of Baz Luhrmann’s classic musical jukebox film Moulin Rouge! opens in New York this spring. A theatrical extravaganza full of pop hits, Moulin Rouge! The Musical will dazzle theatergoers at the Al Hirschfeld Theatre.",
        price_range: 200.0,
        headliner_image:
          "https://seatplan.com/cdn/images/c/show/moulin-rouge-broadway-hero-710wx355h-1700844304.webp",
        category_id: 1,
        venue_id: 1,
        trending: true,
      },

      {
        name: "Chicago Fire FC at New York City FC ",
        event_type: "Sporting game/event",
        date: "08-12-2024",
        time: "7:30pm EST",
        info: "Chicago Fire is going head to head with New York City FC starting on 12 August 2024  at Citi Field stadium, USA. The match is a part of the MLS.Currently, Chicago Fire rank 13th, while New York City FC hold 4th position. Looking to compare the best-rated player on both teams? Sofascore's rating system assigns each player a specific rating based on numerous data factors",
        price_range: 200.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-city-fc-4cd3e9%2F297993%2F1500x2000.jpg&w=3840&q=75",
        category_id: 6,
        venue_id: 11,
        trending: true,
      },
      {
        name: "Wicked",
        event_type: "Broadway",
        date: "08-06-2024",
        time: "7-8:30pm EST",
        info: "Since premiering at Broadway’s Gershwin Theatre in 2003, WICKED has been mesmerizing audiences and breaking records, becoming the second highest-grossing musical in Broadway history with over $1.4 billion in tickets sold. Composer-lyricist Stephen Schwartz and book writer Winnie Holzman’s magical “untold true story of the Witches of Oz” has been nominated for 10 Tony Awards — winning three — including Idina Menzel for Best Actress in a Musical as heroine Elphaba. ",
        price_range: 300.0,
        headliner_image:
          "https://variety.com/wp-content/uploads/2022/04/Wicked.jpg?w=1000",
        category_id: 1,
        venue_id: 4,
        trending: true,
      },
      {
        name: "John Bishop: Back At It Tour",
        event_type: "Stand-up Comedy event",
        date: "08-24-2024",
        time: "9:00-10:15pm EST",
        info: "Multi award-winning, stand-up comedy superstar John Bishop is finally coming to the US and Canada this Summer with his ‘Back At It’ Tour.After two years spent TV presenting, stage acting, podcast hosting, dog walking and decorating the spare room, John is now back doing the thing he loves most; standing on stage and making people laugh. John said: I cannot wait to come to America and Canada with my Back At It Tour. It will be a dream come true and after doing a few weeks in the comedy clubs of New York I am fairly confident people will understand my accent as the audiences laughed in all the right places... ",
        price_range: 200.0,
        headliner_image:
          "https://images.squarespace-cdn.com/content/v1/55695205e4b0b0ed5ed23665/1717516797481-SOIS1K8XU1N70WSHQCSF/Static_Digital-Website_1920x1080_JohnBishop_2024_Regional_TheTownHall_0719.jpg?format=2500w",
        category_id: 2,
        venue_id: 6,
        trending: true,
      },
      {
        name: "Aladin",
        event_type: "Broadway",
        date: "08-12-2024",
        time: "3-4:30pm EST",
        info: "Disney’s ALADDIN is a dazzling and extravagant showcase of special effects — including a flying magic carpet during “A Whole New World” — as well as glittering-gold costumes and art deco-style sets that mirror the grandeur of a Busby Berkeley musical. One of Broadway’s most popular musical comedies, the show opened at the legendary New Amsterdam Theatre on March 20, 2014, and has since broken numerous house records (grossing over $500 million on Broadway). Eight-time Oscar winner Alan Menken composed the show’s music. ",
        price_range: 300.0,
        headliner_image:
          "https://www.broadwayinbound.com/product-resources/Aladdin-Broadway-Musical-Tickets-500-240520.jpg",
        category_id: 1,
        venue_id: 2,
        trending: true,
      },
      {
        name: "Hamilton",
        event_type: "Broadway",
        date: "08-16-2024",
        time: "6-7:30pm EST",
        info: "For nearly a decade, HAMILTON at New York’s Richard Rodgers Theatre, with its innovative mix of history and hip-hop, has remained “The Room Where It Happens” on Broadway. The groundbreaking Lin-Manuel Miranda production, based on Ron Chernow’s 2004 biography of founding father Alexander Hamilton, has gripped theatergoers since its 2015 debut. Immediately hailed as another milestone achievement by Miranda, who previously won a Tony Award and a Grammy for his first musical, In The Heights, HAMILTON became the most-nominated production in Tony Awards’ history and won 11 of its 16 contests, the second-largest haul in the ceremony's history. Among many other accolades, the musical earned a Pulitzer Prize in Drama, two Emmys for the stage film released on Disney+ in 2020, and a Grammy for the 2015 original Broadway cast recording, which peaked at No. 2 on the Billboard 200 chart and became the first Broadway cast album to reach Diamond certification by the RIAA in 2023 ",
        price_range: 300.0,
        headliner_image:
          "https://npr.brightspotcdn.com/dims4/default/5b88d27/2147483647/strip/true/crop/1042x586+77+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fuploads%2F2018%2F7%2F16%2Fhamilton_FB.jpg",
        category_id: 1,
        venue_id: 3,
        trending: true,
      },
      {
        name: "Hamilton",
        event_type: "Broadway",
        date: "08-16-2024",
        time: "1-2:30pm EST",
        info: "For nearly a decade, HAMILTON at New York’s Richard Rodgers Theatre, with its innovative mix of history and hip-hop, has remained “The Room Where It Happens” on Broadway. The groundbreaking Lin-Manuel Miranda production, based on Ron Chernow’s 2004 biography of founding father Alexander Hamilton, has gripped theatergoers since its 2015 debut. Immediately hailed as another milestone achievement by Miranda, who previously won a Tony Award and a Grammy for his first musical, In The Heights, HAMILTON became the most-nominated production in Tony Awards’ history and won 11 of its 16 contests, the second-largest haul in the ceremony's history. Among many other accolades, the musical earned a Pulitzer Prize in Drama, two Emmys for the stage film released on Disney+ in 2020, and a Grammy for the 2015 original Broadway cast recording, which peaked at No. 2 on the Billboard 200 chart and became the first Broadway cast album to reach Diamond certification by the RIAA in 2023 ",
        price_range: 300.0,
        headliner_image:
          "https://npr.brightspotcdn.com/dims4/default/5b88d27/2147483647/strip/true/crop/1042x586+77+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Flegacy%2Fuploads%2F2018%2F7%2F16%2Fhamilton_FB.jpg",
        category_id: 1,
        venue_id: 3,
        trending: false,
      },
      {
        name: "The Music Of Monk, Muhly, And Reich",
        event_type: "Classical Performance",
        date: "08-18-2024",
        time: "8-9:30pm EST",
        info: " Featuring 4 time Grammy Award winning sextet Eight Blackbird the incomparable performer composer Nico Muhly and illustrious alumni of the Blackbird Creative Lab The Town Hall July 17 concert foregrounds chamber music by Meredith Monk Nico Muhly and Steve Reich including his Pulitzer prize winning Double Sextet 2008 as well as the world premiere of Two Pianos 2021 written for Muhly and Eighth Blackbirds Lisa Kaplan. Muhly and Kaplan will also perform Monks beautiful homage to the immigrants who passed through Ellis Island 1981 and her haunting Phantom Waltz 1989.",
        price_range: 100.0,
        headliner_image:
          "https://s1.ticketm.net/dam/c/f7b/ef64d601-8740-43cd-86ea-ed9b392e4f7b_105961_EVENT_DETAIL_PAGE_16_9.jpg",
        category_id: 3,
        venue_id: 6,
        trending: false,
      },
      {
        name: "The Music Of Monk, Muhly, And Reich",
        event_type: "Classical Performance",
        date: "08-20-2024",
        time: "6-7:30pm EST",
        info: " Featuring 4 time Grammy Award winning sextet Eight Blackbird the incomparable performer composer Nico Muhly and illustrious alumni of the Blackbird Creative Lab The Town Hall July 17 concert foregrounds chamber music by Meredith Monk Nico Muhly and Steve Reich including his Pulitzer prize winning Double Sextet 2008 as well as the world premiere of Two Pianos 2021 written for Muhly and Eighth Blackbirds Lisa Kaplan. Muhly and Kaplan will also perform Monks beautiful homage to the immigrants who passed through Ellis Island 1981 and her haunting Phantom Waltz 1989.",
        price_range: 200.0,
        headliner_image:
          "https://s1.ticketm.net/dam/c/f7b/ef64d601-8740-43cd-86ea-ed9b392e4f7b_105961_EVENT_DETAIL_PAGE_16_9.jpg",
        category_id: 3,
        venue_id: 6,
        trending: false,
      },

      {
        name: "oe Hisaishi Symphonic Concert: Music From the Studio Ghibli Films",
        event_type: "Orchestral performance",
        date: "08-08-2024",
        time: "8-9:30pm EST",
        info: "e Hisaishi Symphonic Concert: Music from the Studio Ghibli Films of Hayao Miyazaki will return to New York City this time at Madison Square Garden on August 8th, 2024. The event celebrates the esteemed partnership between revered composer Joe Hisaishi (Departures, Spirited Away) and beloved filmmaker Hayao Miyazaki (Spirited Away). Long standing friends and collaborators, Hisaishi and Miyazaki have worked together for over thirty years, combining their musical and storytelling talents on eleven films for the renowned production house Studio Ghibli. Hisaishi’s illustrious scores - including those from Princess Mononoke, My Neighbor Totoro and the Oscar-winning Spirited Away – will be performed by the American Symphony Orchestra, the Brooklyn Youth Chorus and MasterVoices conducted by Hisaishi.",
        price_range: 1000.0,
        headliner_image:
          "https://news.imz.at/imzfiles/819261-slideshow-joe-hisaishi-in-concert-11711410.jpg",
        category_id: 3,
        venue_id: 5,
        trending: false,
      },
      {
        name: "Ellen's Last Stand-up",
        event_type: "Broadway",
        date: "08-01-2024",
        time: "8-9:00pm EST",
        info: "As a beloved television icon and entertainment pioneer, Ellen DeGeneres' distinctive comedic voice has resonated with audiences from her first stand-up comedy appearance through her work today on television, in film, and in the literary world.",
        price_range: 700.0,
        headliner_image:
          "https://s1.ticketm.net/dam/a/33d/52646a86-fdcc-48a3-a42a-708dd78a733d_EVENT_DETAIL_PAGE_16_9.jpg",
        category_id: 2,
        venue_id: 7,
        trending: false,
      },
      {
        name: "NBA All-star Game",
        event_type: "Basketball game",
        date: "02-18-2024",
        time: "8-9:30pm EST",
        info: "The 2025 NBA All-Star Game will be an exhibition game played on February 16, 2025, during the National Basketball Association's 2024–25 season. It will be the 74th edition of the NBA All-Star Game. It will be hosted by the Golden State Warriors at Chase Center. ",
        price_range: 100000.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnba-all-star-game-1-285dd0%2F798921%2F1500x2000.jpg&w=3840&q=75",
        category_id: 4,
        venue_id: 8,
        trending: false,
      },
      {
        name: "MLB All-Star: Celebrity Softball Game & Future Game",
        event_type: "Sporting event",
        date: "08-03-2024",
        time: "10-11:20am EST",
        info: "Players for the 2024 All-Star Celebrity Softball Game are here! 🥎 - Gina Rodriguez - Marcello Hernández - Eladio Carrion - Myke Towers - Kane Brown - Tyrese Maxey - West Wilson - Matt James - Terrell Owens - Camille Kostek - Tyler Toney - Garrett Hilbert - Payo Solis - Julian Peña Jr.",
        price_range: 300.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fmlb-futures-and-legends-game-b94dde%2F803002%2F1500x2000.jpg&w=3840&q=75",
        category_id: 5,
        venue_id: 9,
        trending: false,
      },
      {
        name: "MLB All-Star Game",
        event_type: "Sporting event",
        date: "08-16-2024",
        time: "10-11:30am EST",
        info: "The Major League Baseball All-Star Game, also known as the 'Midsummer Classic', is an annual professional baseball game sanctioned by Major League Baseball and contested between the all-stars from the American League and National League.",
        price_range: 3000.0,
        headliner_image:
          "https://www.google.com/imgres?q=MLB%20All-Star%20Game&imgurl=https%3A%2F%2Fimg.mlbstatic.com%2Fmlb-images%2Fimage%2Fupload%2Ft_4x5%2Ft_w2208%2Fmlb%2Faiba4tldwhtzdeprqq8f.png&imgrefurl=https%3A%2F%2Fwww.mlb.com%2Fall-star&docid=3Y57YZzXEbcqjM&tbnid=tqclYpcxhGiBnM&vet=12ahUKEwiA56atl46HAxWTEVkFHT_tB_cQM3oECBsQAA..i&w=2208&h=2761&hcb=2&ved=2ahUKEwiA56atl46HAxWTEVkFHT_tB_cQM3oECBsQAA",
        category_id: 5,
        venue_id: 9,
        trending: false,
      },
      {
        name: "HBCU Swingman Classic",
        event_type: "Sporting game/event",
        date: "08-20-2024",
        time: "12-1:00pm EST",
        info: "The Major League Baseball All-Star Game, also known as the 'Midsummer Classic', is an annual professional baseball game sanctioned by Major League Baseball and contested between the all-stars from the American League and National League.",
        price_range: 100.0,
        headliner_image:
          "https://img.mlbstatic.com/mlb-images/image/upload/t_16x9/t_w1024/mlb/rdu32l1bqx8ynsfssbnv.jpg",
        category_id: 5,
        venue_id: 9,
        trending: false,
      },
      {
        name: "Leagues Cup - Group Stage: Queretaro FC at New York City FC",
        event_type: "Sporting game/event",
        date: "08-24-2024",
        time: "7:00pm EST",
        info: "Today New York City FC can confirm the date, kickoff times and venues for its matches against Querétaro FC and FC Cincinnati for this year’s edition of Leagues Cup.The ‘Boys in Blue’ welcome Mexican side Querétaro FC to The Bronx on, August 24 at 7pm ET at Yankee Stadium.",
        price_range: 100.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-city-fc-4cd3e9%2F297993%2F1500x2000.jpg&w=3840&q=75",
        category_id: 6,
        venue_id: 10,
        trending: false,
      },
      {
        name: "Inter Miami CF at New York City FC",
        event_type: "Sporting game/event",
        date: "08-16-2024",
        time: "7:00pm EST",
        info: "New York City FC played against Inter Miami CF in 1 matches this season. Currently, New York City FC rank 4th, while Inter Miami CF hold 1st position. Looking to compare the best-rated player on both teams? Sofascore's rating system assigns each player a specific rating based on numerous data factors.",
        price_range: 500.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-city-fc-4cd3e9%2F297993%2F1500x2000.jpg&w=3840&q=75",
        category_id: 6,
        venue_id: 10,
        trending: false,
      },
      {
        name: "Philadelphia union at New York City FC ",
        event_type: "Sporting game/event",
        date: "08-20-2024",
        time: "7:30pm EST",
        info: "Live coverage of the New York City FC vs. Philadelphia Union MLS game on ESPN, including live score, highlights and updated stats.",
        price_range: 200.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-city-fc-4cd3e9%2F297993%2F1500x2000.jpg&w=3840&q=75",
        category_id: 6,
        venue_id: 10,
        trending: false,
      },
      {
        name: "Chicago Fire FC at New York City FC ",
        event_type: "Sporting game/event",
        date: "08-10-2024",
        time: "7:30pm EST",
        info: "Chicago Fire is going head to head with New York City FC starting on 10 Aug 2024 at Citi Field stadium, USA. The match is a part of the MLS.Currently, Chicago Fire rank 13th, while New York City FC hold 4th position. Looking to compare the best-rated player on both teams? Sofascore's rating system assigns each player a specific rating based on numerous data factors",
        price_range: 200.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-city-fc-4cd3e9%2F297993%2F1500x2000.jpg&w=3840&q=75",
        category_id: 6,
        venue_id: 11,
        trending: false,
      },

      {
        name: "Preseason: Detroit Lions at New York Giants  ",
        event_type: "Football sporting game event",
        date: "08-10-2024",
        time: "7:00pm EST",
        info: " NFL Preseason: New York Giants vs. Detroit Lions is happening on Thursday,August 10, 2024 at 07:00PM EDT at MetLife Stadium.The New York Giants, a Football team based in East Rutherford, New Jersey competing in the NFL plays their home games at the iconic MetLife Stadium.",
        price_range: 200.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-giants-8fe855%2F2079%2F1500x2000.jpg&w=3840&q=75",
        category_id: 7,
        venue_id: 12,
        trending: false,
      },
      {
        name: "Preseason: Detroit Lions at New York Giants  ",
        event_type: "Football sporting game event",
        date: "08-24-2024",
        time: "7:00pm EST",
        info: " NFL Preseason: New York Giants vs. Detroit Lions is happening on Thursday,August 24,2024 at 07:00PM EDT at MetLife Stadium.The New York Giants, a Football team based in East Rutherford, New Jersey competing in the NFL plays their home games at the iconic MetLife Stadium.",
        price_range: 200.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-giants-8fe855%2F2079%2F1500x2000.jpg&w=3840&q=75",
        category_id: 7,
        venue_id: 12,
        trending: false,
      },
      {
        name: "Minnesota Vikings at New York Giants  ",
        event_type: "Football sporting-game/event",
        date: "09-08-2024",
        time: "1:00pm EST",
        info: " NFL Preseason: Minnesota Vikings vs. New York Giants is happening on Thursday, September 8th,2024 at 1:00PM EDT at MetLife Stadium.The New York Giants, a Football team based in East Rutherford, New Jersey competing in the NFL plays their home games at the iconic MetLife Stadium.",
        price_range: 200.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-giants-8fe855%2F2079%2F1500x2000.jpg&w=3840&q=75",
        category_id: 7,
        venue_id: 12,
        trending: false,
      },
      {
        name: "Cincinatti Bengals at New York Giants  ",
        event_type: "Football sporting-game/event",
        date: "09-24-2024",
        time: "7:00pm EST",
        info: " NFL Preseason: Cincinnati vs. New York Giants is happening on Thursday, September 24th,2024 at 7:00PM EDT at MetLife Stadium.The New York Giants, a Football team based in East Rutherford, New Jersey competing in the NFL plays their home games at the iconic MetLife Stadium.",
        price_range: 500.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-giants-8fe855%2F2079%2F1500x2000.jpg&w=3840&q=75",
        category_id: 7,
        venue_id: 12,
        trending: false,
      },
      {
        name: "Philadeplhia Eagles at New York Giants  ",
        event_type: "Football sporting-game/event",
        date: "10-20-2024",
        time: "7:00pm EST",
        info: " NFL Preseason: Minnesota Vikings vs. New York Giants is happening on Thursday, Ocotober 20th,2024 at 7:00PM EDT at MetLife Stadium.The New York Giants, a Football team based in East Rutherford, New Jersey competing in the NFL plays their home games at the iconic MetLife Stadium.",
        price_range: 500.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-giants-8fe855%2F2079%2F1500x2000.jpg&w=3840&q=75",
        category_id: 7,
        venue_id: 12,
        trending: false,
      },
      {
        name: "Washington Commanders at New York Giants  ",
        event_type: "Football sporting-game/event",
        date: "11-02-2024",
        time: "7:00pm EST",
        info: " NFL Preseason: Washington Commanders vs. New York Giants is happening on Thursday, Ocotober 20th,2024 at 7:00PM EDT at MetLife Stadium.The New York Giants, a Football team based in East Rutherford, New Jersey competing in the NFL plays their home games at the iconic MetLife Stadium.",
        price_range: 500.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-giants-8fe855%2F2079%2F1500x2000.jpg&w=3840&q=75",
        category_id: 7,
        venue_id: 12,
        trending: false,
      },
      {
        name: "New Orleans Saints at New York Giants  ",
        event_type: "Football sporting-game event",
        date: "11-02-2024",
        time: "7:00pm EST",
        info: " NFL Preseason: New Orleans Saints vs. New York Giants is happening on Thursday, Ocotober 20th,2024 at 7:00PM EDT at MetLife Stadium.The New York Giants, a Football team based in East Rutherford, New Jersey competing in the NFL plays their home games at the iconic MetLife Stadium.",
        price_range: 500.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-giants-8fe855%2F2079%2F1500x2000.jpg&w=3840&q=75",
        category_id: 7,
        venue_id: 12,
        trending: false,
      },
      {
        name: "Baltimore Ravens at New York Giants  ",
        event_type: "Hockey  sporting-game/event",
        date: "11-02-2024",
        time: "7:00pm EST",
        info: " NFL Preseason: Balitmore Ravens vs. New York Giants is happening on Thursday, Ocotober 20th,2024 at 7:00PM EDT at MetLife Stadium.The New York Giants, a Football team based in East Rutherford, New Jersey competing in the NFL plays their home games at the iconic MetLife Stadium.",
        price_range: 500.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-york-giants-8fe855%2F2079%2F1500x2000.jpg&w=3840&q=75",
        category_id: 7,
        venue_id: 12,
        trending: false,
      },
      {
        name: "New York Liberty vs. Connecticut Sun",
        event_type: "Basketball sporting-game/event",
        date: "08-02-2024",
        time: "7:00pm EST",
        info: "New York Liberty plays at home venue against Connecticut Sun",
        price_range: 1000.0,
        headliner_image:
          "https://s1.ticketm.net/dam/a/fc4/942ffb81-c4c6-465c-a9a6-e54ac0d27fc4_EVENT_DETAIL_PAGE_16_9.jpg",
        category_id: 9,
        venue_id: 13,
        trending: false,
      },
      {
        name: "New York Liberty vs. Chicago Sky",
        event_type: "Basketball sporting-game/event",
        date: "08-04-2024",
        time: "7:00pm EST",
        info: "New York Liberty plays at home venue against Chicago Sky",
        price_range: 1000.0,
        headliner_image:
          "https://s1.ticketm.net/dam/a/fc4/942ffb81-c4c6-465c-a9a6-e54ac0d27fc4_EVENT_DETAIL_PAGE_16_9.jpg",
        category_id: 9,
        venue_id: 13,
        trending: false,
      },
      {
        name: "New York Liberty vs Dallas Wings",
        event_type: "Basketball sporting-game/event",
        date: "08-09-2024",
        time: "7:00pm EST",
        info: "New York Liberty plays at home venue against Dallas Wings ",
        price_range: 1000.0,
        headliner_image:
          "https://s1.ticketm.net/dam/a/fc4/942ffb81-c4c6-465c-a9a6-e54ac0d27fc4_EVENT_DETAIL_PAGE_16_9.jpg",
        category_id: 9,
        venue_id: 13,
        trending: false,
      },
      {
        name: "New York Liberty vs Seattle Storm",
        event_type: "Basketball sporting-game/event",
        date: "08-15-2024",
        time: "7:00pm EST",
        info: "New York Liberty plays at home venue against Seattle Storm ",
        price_range: 1000.0,
        headliner_image:
          "https://s1.ticketm.net/dam/a/fc4/942ffb81-c4c6-465c-a9a6-e54ac0d27fc4_EVENT_DETAIL_PAGE_16_9.jpg",
        category_id: 9,
        venue_id: 13,
        trending: false,
      },
      {
        name: "Preseason: New Jersey Devils at New York Islanders",
        event_type: "Hockey sporting-game/event",
        date: "08-29-2024",
        time: "7:00pm EST",
        info: "The New Jersey Devils’ 2024-25 pre-season schedule will consist of seven games, with three games played at Prudential Center and four road matches, all with 7:00 p.m. start times. The Devils will play each of the New York Islanders and New York Rangers twice, and once against the Montreal Canadiens, Philadelphia Flyers, and Washington Capitals. New Jersey for Devils rookies are currently scheduled to begin Training Camp on Wednesday, September 11, and veterans are expected to report the following week on Wednesday, September 18. Broadcast information for the games will be announced at a later date.",
        price_range: 400.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-jersey-devils-59c5df%2F2118%2F1500x2000.jpg&w=3840&q=75",
        category_id: 8,
        venue_id: 13,
        trending: false,
      },
      {
        name: "Preseason: New Jersey Devils at New York Islanders",
        event_type: "Hockey sporting-game/event",
        date: "09-29-2024",
        time: "7:00pm EST",
        info: "The New Jersey Devils’ 2024-25 pre-season schedule will consist of seven games, with three games played at Prudential Center and four road matches, all with 7:00 p.m. start times. The Devils will play each of the New York Islanders and New York Rangers twice, and once against the Montreal Canadiens, Philadelphia Flyers, and Washington Capitals. New Jersey for Devils rookies are currently scheduled to begin Training Camp on Wednesday, September 11, and veterans are expected to report the following week on Wednesday, September 18. Broadcast information for the games will be announced at a later date.",
        price_range: 400.0,
        headliner_image:
          "https://seatgeek.com/_next/image?url=https%3A%2F%2Fseatgeek.com%2Fimages%2Fperformers-landscape%2Fnew-jersey-devils-59c5df%2F2118%2F1500x2000.jpg&w=3840&q=75",
        category_id: 8,
        venue_id: 13,
        trending: false,
      },
    ],
  });
  await prisma.reviews.createMany({
    data: [
      {
        venue_id: 1,
        customer_id: 1,
        description:
          "Amazing show and theatre was extremely accommodating. Please check out their plays at this venue!",
        Rating: 5,
      },
      {
        venue_id: 1,
        customer_id: 1,
        description: "Will definitely coming back to watch another play!",
        Rating: 5,
      },
      {
        venue_id: 2,
        customer_id: 1,
        description: "Will definitely coming back to watch another play!",
        Rating: 5,
      },
      {
        venue_id: 3,
        customer_id: 1,
        description: "Will definitely coming back to watch another play!",
        Rating: 5,
      },
      {
        venue_id: 4,
        customer_id: 1,
        description: "great show!",
        Rating: 5,
      },
      {
        venue_id: 4,
        customer_id: 1,
        description: "Great Entertainment!",
        Rating: 4,
      },
      {
        venue_id: 5,
        customer_id: 1,
        description: "Will definitely coming back to watch another game!",
        Rating: 5,
      },
      {
        venue_id: 5,
        customer_id: 1,
        description: "Comfortable seats and staff was nice. Good game.",
        Rating: 5,
      },
      {
        venue_id: 6,
        customer_id: 1,
        description: "Nice show.",
        Rating: 5,
      },
      {
        venue_id: 7,
        customer_id: 1,
        description: "Nice show.",
        Rating: 5,
      },
      {
        venue_id: 8,
        customer_id: 1,
        description: "Team played nicely.",
        Rating: 5,
      },
      {
        venue_id: 9,
        customer_id: 1,
        description: "Excellent game",
        Rating: 5,
      },
      {
        venue_id: 10,
        customer_id: 1,
        description: "very good game",
        Rating: 5,
      },
      {
        venue_id: 11,
        customer_id: 1,
        description: "very good game",
        Rating: 5,
      },
      {
        venue_id: 12,
        customer_id: 1,
        description: "very good game",
        Rating: 5,
      },
      {
        venue_id: 13,
        customer_id: 1,
        description: "very good game",
        Rating: 5,
      },
      {
        venue_id: 14,
        customer_id: 1,
        description: "very good game",
        Rating: 5,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
