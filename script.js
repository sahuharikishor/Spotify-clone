function creatCard(image,title,p1,p2){

    let html = `<div class="card ">
                        <div class="play">
                            <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                <!-- Circle (r = 28) -->
                                <circle cx="40" cy="40" r="23" fill="#1fdf64" />
                                <!-- Scaled Play Button -->
                                <polygon points="34,30 52,40 34,50" fill="black" />
                            </svg>
                        </div>
                        <img src="${image}" alt="Dhurandar">
                        <h4>${title}</h4>
                        ${p1? `<p>${p1}` : ""}
                        ${p2? `<p>${p2}` : ""}
                        
                    </div>`
    
    document.querySelector(".card-container").insertAdjacentHTML("beforeend",html)
}

creatCard("Asset/ab67616d00001e02c89ce29277a38d1da9973c94.jfif","Jaiye sajana","Shashwat Sachdev,","Jasmine Sandlas,...")
creatCard("Asset/ab67616d00001e02cdce9a38222807fa703b4396.jfif","Bairan","Banjaare")
creatCard("Asset/ab67616d00001e02f5f2a6705dfe3c2fe11028c8.jfif","Pavazha Malli - From ''Think Indie''","Sai Abhyankkar,Shruti","Haasan, Vivek")
creatCard("Asset/ab67616d00001e02ad140d31838696a7ba2d2c4b.jfif","Kitab","Mr Dutt, Vipin foji ")
creatCard("Asset/ab67616d00001e02971c4d717b2be5b04b1ec8fd.jfif","Rasputin - Single Version","Boney M.")
creatCard("Asset/ab67616d00001e02d69ad02130eccc5c9d3b8223.jfif","Dil Pe Zakham Khate Hai","Nursat Fteh Ali Khan,","Afternight Vibes")
creatCard("Asset/ab67616d00001e02d421c37d9cf4bbee71844c24.jfif","Khat","Navjot Ahuja")
creatCard("Asset/ab67616d00001e0295184f6a953569b683ca9a0d.jfif","FATHER (feat. Travis Scott)","Kanye West, Ye,","Travis Scott")
creatCard("Asset/ab67616d00001e02fb1b54f7e77148701250118f.jfif","Mutta Kalakki (From ''Youth'')","G.V.Prakash, Ken","Karunaas")
creatCard("Asset/ab67616d00001e02c7c031ce9d06b131f8563676.jfif","Dracula - JENNIE Remix","Tame impala,","JENNIE")
creatCard("Asset/ab67616d00001e022624871b49552ce08b1b3070.jfif","Aura 10/10 (From ''Meesaya Murukku...","Hiphop Tamizha,","Thamizh Aadhavan")
creatCard("Asset/ab67616d00001e0265816e9208bc49fe164fa15e.jfif","Dealer","Diljit Doshanjh, Da","Future VirkAndaaz")
creatCard("Asset/ab67616d00001e02dccd4f11c8ac8e1f2c8dfc51.jfif","Sitaare (From ''ikkis'')","Arijit Singh, White Noise","Collectives, Amitabh")
creatCard("Asset/ab67616d00001e020cada67ed6914c22b9227f00.jfif","Kinginichar","M.H.R, JOKAR390P")
creatCard("Asset/ab67616d00001e0265e02873dfdb2207d96235fd.jfif","Ae Ajnabee | Coke Studio Bharat","Aditya Rikhari, Ravator,","Kutle Khan")
creatCard("Asset/ab67616d00001e027722f8cc9eb81ac63de065d0.jfif","Panchadaara","M.M. Keeravaani,Anuj","Gurwara, Rita...")
creatCard("Asset/ab67616d00001e02c89ce29277a38d1da9973c94.jfif","Tamma Tamma (From ''Dhurandhar The...","Bappi Lahiri, Anuradha","Paudwal Indeevar")
creatCard("Asset/ab67616d00001e02190b5b394a6fc5574ceea4da.jfif","Sheesha - Aakhya Mai Aakh Ghali Jo...","Mitta Ror, Swara Verma")
creatCard("Asset/ab67616d00001e02b85b4e8fb6ba961aedfde386.jfif","Apan Bana Le","Sachin-Jigar, Arijit","Singh, Amitabh...")
creatCard("Asset/ab67616d00001e02fc586aac4b0489badd19e012.jfif","Thangapoovey","Anirudh Ravichander,","Ravi G, Vivek")
