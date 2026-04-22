function creatCard(targetClass,image, title, p1, p2,isArtist = false) {

    let imageStyle = isArtist ? 'style="border-radius: 50%; aspect-ratio: 1/1; object-fit: cover;"' : 'style="aspect-ratio: 1/1; object-fit: cover;"';

    let html = `<div class="card ">
                    <div class="img-box">
                        <img src="${image}" alt="${title}" ${imageStyle}>
                        <div class="play">
                            <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                <!-- Circle (r = 28) -->
                                <circle cx="40" cy="40" r="23" fill="#1fdf64" />
                                <!-- Scaled Play Button -->
                                <polygon points="34,30 52,40 34,50" fill="black" />
                            </svg>
                        </div>
                     </div>
                        
                    <h4>${title}</h4>
                    ${p1 ? `<p>${p1}</p>` : ""}
                    ${p2 ? `<p>${p2}</p>` : ""}
                        
                </div>`;

    document.querySelector(targetClass).insertAdjacentHTML("beforeend", html)
}

creatCard(".Trending-songs-card","Asset/ab67616d00001e02c89ce29277a38d1da9973c94.jfif", "Jaiye sajana", "Shashwat Sachdev,", "Jasmine Sandlas,...")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02cdce9a38222807fa703b4396.jfif", "Bairan", "Banjaare")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02f5f2a6705dfe3c2fe11028c8.jfif", "Pavazha Malli - From ''Think Indie''", "Sai Abhyankkar,Shruti", "Haasan, Vivek")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02ad140d31838696a7ba2d2c4b.jfif", "Kitab", "Mr Dutt, Vipin foji ")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02971c4d717b2be5b04b1ec8fd.jfif", "Rasputin - Single Version", "Boney M.")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02d69ad02130eccc5c9d3b8223.jfif", "Dil Pe Zakham Khate Hai", "Nursat Fteh Ali Khan,", "Afternight Vibes")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02d421c37d9cf4bbee71844c24.jfif", "Khat", "Navjot Ahuja")
creatCard(".Trending-songs-card","Asset/ab67616d00001e0295184f6a953569b683ca9a0d.jfif", "FATHER (feat. Travis Scott)", "Kanye West, Ye,", "Travis Scott")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02fb1b54f7e77148701250118f.jfif", "Mutta Kalakki (From ''Youth'')", "G.V.Prakash, Ken", "Karunaas")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02c7c031ce9d06b131f8563676.jfif", "Dracula - JENNIE Remix", "Tame impala,", "JENNIE")
creatCard(".Trending-songs-card","Asset/ab67616d00001e022624871b49552ce08b1b3070.jfif", "Aura 10/10 (From ''Meesaya Murukku...", "Hiphop Tamizha,", "Thamizh Aadhavan")
creatCard(".Trending-songs-card","Asset/ab67616d00001e0265816e9208bc49fe164fa15e.jfif", "Dealer", "Diljit Doshanjh, Da", "Future VirkAndaaz")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02dccd4f11c8ac8e1f2c8dfc51.jfif", "Sitaare (From ''ikkis'')", "Arijit Singh, White Noise", "Collectives, Amitabh")
creatCard(".Trending-songs-card","Asset/ab67616d00001e020cada67ed6914c22b9227f00.jfif", "Kinginichar", "M.H.R, JOKAR390P")
creatCard(".Trending-songs-card","Asset/ab67616d00001e0265e02873dfdb2207d96235fd.jfif", "Ae Ajnabee | Coke Studio Bharat", "Aditya Rikhari, Ravator,", "Kutle Khan")
creatCard(".Trending-songs-card","Asset/ab67616d00001e027722f8cc9eb81ac63de065d0.jfif", "Panchadaara", "M.M. Keeravaani,Anuj", "Gurwara, Rita...")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02c89ce29277a38d1da9973c94.jfif", "Tamma Tamma (From ''Dhurandhar The...", "Bappi Lahiri, Anuradha", "Paudwal Indeevar")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02190b5b394a6fc5574ceea4da.jfif", "Sheesha - Aakhya Mai Aakh Ghali Jo...", "Mitta Ror, Swara Verma")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02b85b4e8fb6ba961aedfde386.jfif", "Apan Bana Le", "Sachin-Jigar, Arijit", "Singh, Amitabh...")
creatCard(".Trending-songs-card","Asset/ab67616d00001e02fc586aac4b0489badd19e012.jfif", "Thangapoovey", "Anirudh Ravichander,", "Ravi G, Vivek")

// Popular artists

creatCard(".Popular-artists-card","Asset/ab67616100005174cb6926f44f620555ba444fca.jfif","Pritam","Artist","",true)
creatCard(".Popular-artists-card","Asset/ab67616100005174b19af0ea736c6228d6eb539c.jfif","A.R. Rahman","Artist","",true)
creatCard(".Popular-artists-card","Asset/ab676161000051745ba2d75eb08a2d672f9b69b7.jfif","Arijit Singh","Artist","",true)
creatCard(".Popular-artists-card","Asset/ab67616100005174bb4064bef3a825344d5eb79e.jfif","Sachin-Jigar","Artist","",true)
creatCard(".Popular-artists-card","Asset/ab6761610000517490b6c3d093f9b02aad628eaf.jfif","Vishal-Shekhar","Artist","",true)
creatCard(".Popular-artists-card","Asset/ab67616100005174c40600e02356cc86f0debe84.jfif","Atif Aslam","Artist","",true)
creatCard(".Popular-artists-card","Asset/ab676161000051740f0be2054fe9594026a6b843.jfif","Anirudh Ravichander","Artist","",true)
creatCard(".Popular-artists-card","Asset/ab676161000051748de0e6e7e55d7773931ab7f4.jfif","Udit Narayan","Artist","",true)
creatCard(".Popular-artists-card","Asset/ab67616100005174bc7e4fffd515b47ff1ebbc1f.jfif","Yo Yo Honey Singh","Artist","",true)
creatCard(".Popular-artists-card","Asset/ab676161000051743db0499a689aa9b4a47ebba3.jfif","Shankar-Ehsaan-Loy","Artist","",true)


// Popular albums cards 

creatCard(".Popular-albums-card","Asset/ab67616d00001e026404721c1943d5069f0805f3.jfif","Aashiqui 2","Mithoon,Ankit Tiwari,","Jeet Gannuguli")
creatCard(".Popular-albums-card","Asset/ab67616d00001e02707ea5b8023ac77d31756ed4.jfif","Yeh Jawaani hai Deewani","Pritam")
creatCard(".Popular-albums-card","Asset/ab67616d00001e02711c1639b4bc0f9978ae77a6.jfif","Sanam Teri Kasam (Original Motion...","Himesh Reshammiya,","Sameer Anjaan Subrat...")
creatCard(".Popular-albums-card","Asset/ab67616d00001e02292341cd3e621d7f9171331f.jfif","Finding Her","Kushagra, Bharath","Saaheal")
creatCard(".Popular-albums-card","Asset/ab67616d00001e02a5183fa4b99bcec1f506418d.jfif","Young G.O.A.T","Cheema Y , Gur Sidhu")
creatCard(".Popular-albums-card","Asset/ab67616d00001e02773c5f60bcb309ef8802e4ef - Copy.jfif","Raanjhan (From ''Do Patti'')","Sachet Parampara,","Parampara Tandon,...")
creatCard(".Popular-albums-card","Asset/ab67616d00001e021aa5adad8593923dcdf1a7d0.jfif","Ultimate Love Songs-Arijit singh","Arijit Singh")
creatCard(".Popular-albums-card","Asset/ab67616d00001e02bf6c7c24a33a49a5c2f0d423 - Copy.jfif","Making Memories","Karan Aujla,Ikky")
creatCard(".Popular-albums-card","Asset/powered_by_logo.svg","","Various Artists")
creatCard(".Popular-albums-card","Asset/ab67616d00001e028e1bd9f2ca754ace0396d72f - Copy.jfif","Sicario","Shubh")


// Popular Radio

creatCard(".Popular-radio-cards","Asset/en.jfif","","With Sachin-Jigar,","Pritam, Saarib Toshi...")
creatCard(".Popular-radio-cards","Asset/en (7).jfif","","With Pritam Ankit","Tiwari, Arijit Singh an...")
creatCard(".Popular-radio-cards","Asset/en (16).jfif","","With Atif Aslam,A.R.","Rahman,Arijit Singh...")
creatCard(".Popular-radio-cards","Asset/en (15).jfif","","With Vinod Rathod,","Kumar Sanu, Udit...")
creatCard(".Popular-radio-cards","Asset/en-GB (1).jfif","","With AP Dhillon, Sidhu","Moose Wala, Harrdy...")
creatCard(".Popular-radio-cards","Asset/en (9).jfif","","With Yuvan Shankar","Raja,Pritam,...")
creatCard(".Popular-radio-cards","Asset/en (3).jfif","","With Harrdy Sandhu,","Vishal-Shekhar, Diljit...")
creatCard(".Popular-radio-cards","Asset/en (2).jfif","","With Shubh, Prem","Dhillon, Jxggi and...")
creatCard(".Popular-radio-cards","Asset/en (1).jfif","","With Mukesh,","Tabassum, Hemant...")
creatCard(".Popular-radio-cards","Asset/en (6).jfif","","With Anuradha,","Paudwal, Alka Yagni...")


// Featured charts

creatCard(".featured-cards","Asset/region_global_default.jpg","","Your weekly update of","the most played...")
creatCard(".featured-cards","Asset/region_in_default (2).jpg","","Your weekly update of","the most played...")
creatCard(".featured-cards","Asset/region_global_default (1).jpg","","Your weekly update of","the most played...")
creatCard(".featured-cards","Asset/region_in_default.jpg","","Your weekly update of","the most played...")
creatCard(".featured-cards","Asset/region_global_default (2).jpg","","Your weekly update of","the most played...")
creatCard(".featured-cards","Asset/region_in_default (1).jpg","","Your weekly update of","the most played...")





// Add an  Event Listener  for Hamburger 
document.querySelector(".hamburger").addEventListener('click',() =>{
    document.querySelector('.hamburger_container').style.right = "0";
})

// Add an  Event Listener  for close  
document.querySelector(".close").addEventListener('click',() =>{
    document.querySelector('.hamburger_container').style.right = "-100%";
})

// Add an  Event Listener  for border of search_container  

const searchInput = document.querySelector(".search-input");
const searchContainer = document.querySelector(".search-container");

// show border clicking on serch-input (Focus)
searchInput.addEventListener('focus', () => {
    searchContainer.classList.add('active'); // Class pakka add hogi
});

// remove border clicking on outside of the serch-input (Blur)
searchInput.addEventListener('blur', () => {
    searchContainer.classList.remove('active'); 
});


//  for lbox scrollbar

const lbox = document.querySelector('.lbox');
let timer;

// 1. 1. When the mouse enters the container
lbox.addEventListener('mouseenter', () => {
    clearTimeout(timer); // Stop any previous hide timer
    lbox.classList.add('show-scroll'); 
});

// 2. When the mouse leaves the container
lbox.addEventListener('mouseleave', () => {
    timer = setTimeout(() => {
        lbox.classList.remove('show-scroll');
    }, 2000); 
});

// 3. Keep the scrollbar visible while the user is scrolling - important
lbox.addEventListener('scroll', () => {
    lbox.classList.add('show-scroll');
    clearTimeout(timer);
    timer = setTimeout(() => {
        lbox.classList.remove('show-scroll');
    }, 2000);
});



//   Add an  Event Listener  for Right container scrollbar

const right = document.querySelector('.right');

function updateScrollbar() {
    const scrollTop = right.scrollTop;
    const scrollHeight = right.scrollHeight;
    const clientHeight = right.clientHeight;

    // Remove all states first
    right.classList.remove('at-top', 'at-bottom');

    if (scrollTop === 0) {
        // At Top
        right.classList.add('at-top');
    } 
    else if (scrollTop + clientHeight >= scrollHeight - 1) {
        // At Bottom
        right.classList.add('at-bottom');
    } 
    
}

// Run on scroll
right.addEventListener('scroll', updateScrollbar);

// Run once on load
updateScrollbar();