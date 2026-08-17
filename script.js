const gallery = document.getElementById("gallery");

const viewer = document.getElementById("viewer");
const viewerImage = document.getElementById("viewerImage");
const closeBtn = document.getElementById("closeBtn");

/*
    TEST IMAGES
    এখন আমরা শুধু system check করছি।
    পরে এগুলো তোমার আসল ছবির filename দিয়ে replace করব।
*/

const images = [
   "images/1775477000965.jpg", 
"images/1775589270709.jpg", 
"images/1775589274391.jpg", 
"images/1775589277387.jpg", 
"images/343585d438f5f14d4b3fb336a47047af.jpg", 
"images/49a95fc765b6c2c64ef3b2fe8fb4bc55.jpg", 
"images/8f8653e712986860bb856001ec8f9a42.jpg", 
"images/FB_IMG_1771547281792.jpg", 
"images/FB_IMG_1778051241906.jpg", 
"images/FB_IMG_1778051602528.jpg", 
"images/FB_IMG_1778051606162.jpg", 
"images/FB_IMG_1779128510292.jpg", 
"images/FB_IMG_1779128567973.jpg", 
"images/FB_IMG_1779128601007.jpg", 
"images/IMG-20260209-WA0004.jpg", 
"images/IMG-20260209-WA0007.jpg", 
"images/IMG-20260209-WA0008.jpg", 
"images/IMG-20260209-WA0011.jpg", 
"images/IMG-20260209-WA0048.jpg", 
"images/IMG-20260210-WA0003.jpg", 
"images/IMG-20260210-WA0006.jpg", 
"images/IMG-20260210-WA0007.jpg", 
"images/IMG-20260210-WA0009.jpg", 
"images/IMG-20260210-WA0010.jpg", 
"images/IMG-20260210-WA0011.jpg", 
"images/IMG-20260210-WA0013.jpg", 
"images/IMG-20260210-WA0014.jpg", 
"images/IMG-20260210-WA0015.jpg", 
"images/IMG-20260210-WA0016.jpg", 
"images/IMG-20260210-WA0018.jpg", 
"images/IMG-20260212-WA0000.jpg", 
"images/IMG-20260212-WA0005.jpg", 
"images/IMG-20260212-WA0006.jpg", 
"images/IMG-20260212-WA0007.jpg", 
"images/IMG-20260212-WA0008.jpg", 
"images/IMG-20260212-WA0009.jpg", 
"images/IMG-20260212-WA0010.jpg", 
"images/IMG-20260212-WA0011.jpg", 
"images/IMG-20260213-WA0002.jpg", 
"images/IMG-20260213-WA0003.jpg", 
"images/IMG-20260213-WA0004.jpg", 
"images/IMG-20260213-WA0005.jpg", 
"images/IMG-20260213-WA0006.jpg", 
"images/IMG-20260213-WA0007.jpg", 
"images/IMG-20260213-WA0012.jpg", 
"images/IMG-20260213-WA0014.jpg", 
"images/IMG-20260213-WA0022.jpg", 
"images/IMG-20260217-WA0003.jpg", 
"images/IMG-20260217-WA0004.jpg", 
"images/IMG-20260217-WA0005.jpg", 
"images/IMG-20260219-WA0000.jpg", 
"images/IMG-20260219-WA0001.jpg", 
"images/IMG-20260219-WA0006.jpg", 
"images/IMG-20260219-WA0007.jpg", 
"images/IMG-20260219-WA0007_1.jpg", 
"images/IMG-20260219-WA0008.jpg", 
"images/IMG-20260219-WA0010_1.jpg", 
"images/IMG-20260219-WA0011_1.jpg", 
"images/IMG-20260219-WA0016.jpg", 
"images/IMG-20260220-WA0011.jpg", 
"images/IMG-20260220-WA0012_1.jpg", 
"images/IMG-20260220-WA0013.jpg", 
"images/IMG-20260220-WA0014.jpg", 
"images/IMG-20260220-WA0015.jpg", 
"images/IMG-20260220-WA0016.jpg", 
"images/IMG-20260303-WA0004.jpg", 
"images/IMG-20260303-WA0005.jpg", 
"images/IMG-20260303-WA0006.jpg", 
"images/IMG-20260303-WA0007.jpg", 
"images/IMG-20260303-WA0008.jpg", 
"images/IMG-20260303-WA0009.jpg", 
"images/IMG-20260303-WA0010.jpg", 
"images/IMG-20260309-WA0000.jpg", 
"images/IMG-20260309-WA0001.jpg", 
"images/IMG-20260309-WA0002.jpg", 
"images/IMG-20260309-WA0003.jpg", 
"images/IMG-20260309-WA0004.jpg", 
"images/IMG-20260309-WA0005.jpg", 
"images/IMG-20260309-WA0007.jpg", 
"images/IMG-20260309-WA0008.jpg", 
"images/IMG-20260323-WA0000.jpg", 
"images/IMG-20260324-WA0001.jpg", 
"images/IMG-20260324-WA0002.jpg", 
"images/IMG-20260326-WA0000.jpg", 
"images/IMG-20260326-WA0001.jpg", 
"images/IMG-20260326-WA0002.jpg", 
"images/IMG-20260326-WA0003.jpg", 
"images/IMG-20260326-WA0004.jpg", 
"images/IMG-20260326-WA0006.jpg", 
"images/IMG-20260326-WA0007.jpg", 
"images/IMG-20260326-WA0008.jpg", 
"images/IMG-20260326-WA0009.jpg", 
"images/IMG-20260326-WA0094.jpg", 
"images/IMG-20260326-WA0095.jpg", 
"images/IMG-20260326-WA0096.jpg", 
"images/IMG-20260327-WA0001.jpg", 
"images/IMG-20260327-WA0001_1.jpg", 
"images/IMG-20260327-WA0002.jpg", 
"images/IMG-20260327-WA0003.jpg", 
"images/IMG-20260327-WA0003_1.jpg", 
"images/IMG-20260402-WA0000.jpg", 
"images/IMG-20260402-WA0001.jpg", 
"images/IMG-20260402-WA0002.jpg", 
"images/IMG-20260402-WA0003.jpg", 
"images/IMG-20260402-WA0004.jpg", 
"images/IMG-20260505-WA0013.jpg", 
"images/IMG-20260505-WA0014.jpg", 
"images/IMG-20260505-WA0015.jpg", 
"images/IMG-20260511-WA0000.jpg", 
"images/IMG-20260511-WA0001.jpg", 
"images/IMG-20260511-WA0002.jpg", 
"images/IMG-20260511-WA0003.jpg", 
"images/IMG-20260511-WA0004_1.jpg", 
"images/IMG-20260515-WA0000.jpg", 
"images/IMG-20260515-WA0001.jpg", 
"images/IMG-20260525-WA0000.jpg", 
"images/IMG-20260525-WA0001.jpg", 
"images/IMG-20260525-WA0002.jpg", 
"images/IMG-20260528-WA0007.jpg", 
"images/IMG-20260528-WA0008.jpg", 
"images/IMG-20260528-WA0009.jpg", 
"images/IMG-20260528-WA0010.jpg", 
"images/IMG-20260528-WA0011.jpg", 
"images/IMG-20260528-WA0012.jpg", 
"images/IMG-20260528-WA0013.jpg", 
"images/IMG-20260528-WA0015.jpg", 
"images/IMG-20260528-WA0016.jpg", 
"images/IMG-20260528-WA0018.jpg", 
"images/IMG-20260528-WA0019.jpg", 
"images/IMG-20260528-WA0020.jpg", 
"images/IMG-20260528-WA0021.jpg", 
"images/IMG-20260528-WA0022.jpg", 
"images/IMG20260417154217.jpg", 
"images/IMG20260417154219.jpg", 
"images/IMG20260417154222.jpg", 
"images/IMG20260417154637.jpg", 
"images/IMG20260417154640.jpg", 
"images/IMG20260417154728.jpg", 
"images/IMG20260417154733.jpg", 
"images/IMG20260417154903.jpg", 
"images/IMG20260417154918.jpg", 
"images/IMG20260417154947.jpg", 
"images/IMG20260417155355.jpg", 
"images/IMG20260417155403.jpg", 
"images/IMG20260417163522.jpg", 
"images/IMG20260417163558.jpg", 
"images/IMG20260417163601.jpg", 
"images/IMG_20260312_140634.jpg", 
"images/IMG_20260312_140657.jpg", 
"images/IMG_20260508_013405.jpg", 
"images/IMG_20260519_191548.jpg", 
"images/IMG_20260528_163643.jpg", 
"images/InFrame_1778661965346.jpg", 
"images/retouch_2026041720293263.jpg", 
"images/Screenshot_2026-02-14-19-06-42-57.jpg", 
"images/Screenshot_2026-02-14-23-37-15-70.jpg", 
"images/Screenshot_2026-02-20-01-29-21-73_6012fa4d4ddec268fc5c7112cbb265e7.jpg", 
"images/Screenshot_2026-02-20-06-27-33-25_6012fa4d4ddec268fc5c7112cbb265e7.jpg", 
"images/Screenshot_2026-02-20-19-00-06-45.jpg", 
"images/Screenshot_2026-02-21-02-00-08-90.jpg", 
"images/Screenshot_2026-02-21-02-01-43-84_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-02-27-04-11-29-58_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-03-23-01-04-29-13_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-03-23-01-04-43-02_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-03-25-10-34-41-12_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-03-26-07-56-11-34_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-03-30-15-33-47-36_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-04-02-23-47-40-10_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-04-21-21-51-53-24_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-04-22-00-33-43-46_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-04-25-14-16-52-53_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-04-29-01-31-15-67_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-05-06-13-07-54-75_a23b203fd3aafc6dcb84e438dda678b6.jpg", 
"images/Screenshot_2026-05-13-14-13-29-34_99c04817c0de5652397fc8b56c3b3817.jpg", 
"images/Screenshot_2026-05-13-14-35-23-15_99c04817c0de5652397fc8b56c3b3817.jpg", 
"images/Screenshot_2026-05-19-00-23-43-04_a23b203fd3aafc6dcb84e438dda678b6.jpg", 
"images/Screenshot_2026-05-19-00-28-36-02_f598e1360c96b5a5aa16536c303cff92.jpg", 
"images/Screenshot_2026-05-19-01-15-41-22_a23b203fd3aafc6dcb84e438dda678b6.jpg", 
"images/Screenshot_2026-05-19-01-20-36-81_a23b203fd3aafc6dcb84e438dda678b6.jpg", 
"images/Screenshot_2026-05-19-01-21-40-36_a23b203fd3aafc6dcb84e438dda678b6.jpg", 
"images/Screenshot_2026-05-19-01-22-11-18_a23b203fd3aafc6dcb84e438dda678b6.jpg", 
"images/Screenshot_2026-05-19-01-35-03-17_a23b203fd3aafc6dcb84e438dda678b6.jpg", 
"images/Screenshot_2026-05-19-23-07-07-96_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-05-19-23-07-34-75_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-05-20-10-02-47-63_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-05-23-00-15-05-90_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-05-23-00-19-39-89_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-05-23-01-40-57-95.jpg", 
"images/Screenshot_2026-05-23-02-05-59-32_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/Screenshot_2026-05-23-08-19-09-29_be80aec1db9a2b53c9d399db0c602181.jpg", 
"images/1777087972068.png", 
"images/Screenshot 2026-06-06 221017.png", 
"images/Messenger_creation_E7669CFE-449E-4C79-82F6-C3541BF86015.jpeg", 
"images/received_1009731148066683.jpeg", 
"images/received_1230881545887773.jpeg", 
"images/received_1252925933689520.jpeg", 
"images/received_1252940906984789.jpeg", 
"images/received_1253148212988898.jpeg", 
"images/received_1258951079373940.jpeg", 
"images/received_1266084088707712.jpeg", 
"images/received_1283385930001138.jpeg", 
"images/received_1297576979095998.jpeg", 
"images/received_1313852310646872.jpeg", 
"images/received_1366238508875172.jpeg", 
"images/received_1404430661456618.jpeg", 
"images/received_1421921396318550.jpeg", 
"images/received_1446729313595439.jpeg", 
"images/received_1447000213550857.jpeg", 
"images/received_1450105616658483.jpeg", 
"images/received_1456627566300539.jpeg", 
"images/received_1471277717903930.jpeg", 
"images/received_1471525197942067.jpeg", 
"images/received_1493580635810354.jpeg", 
"images/received_1502824151232388.jpeg", 
"images/received_1549309876809392.jpeg", 
"images/received_1554125115679907.jpeg", 
"images/received_1579558613103048.jpeg", 
"images/received_1581540163081588.jpeg", 
"images/received_1599322821341243.jpeg", 
"images/received_1650857256205375.jpeg", 
"images/received_1658165158537228.jpeg", 
"images/received_1683230066444674.jpeg", 
"images/received_1686977225995663.jpeg", 
"images/received_1703070371065080.jpeg", 
"images/received_1746576579667214.jpeg", 
"images/received_1759288118814540.jpeg", 
"images/received_1785811375729636.jpeg", 
"images/received_1929318867671845.jpeg", 
"images/received_1988223145418361.jpeg", 
"images/received_2037659377093136.jpeg", 
"images/received_2152563012239803.jpeg", 
"images/received_2363740444138211.jpeg", 
"images/received_2506361439786379.jpeg", 
"images/received_25230149136657906.jpeg", 
"images/received_25834385756236934.jpeg", 
"images/received_26157813163887489.jpeg", 
"images/received_2775985102738337.jpeg", 
"images/received_34206504298963483.jpeg", 
"images/received_3527782200724352.jpeg", 
"images/received_4101742913422395.jpeg", 
"images/received_4286426961572874.jpeg", 
"images/received_4503935733264185.jpeg", 
"images/received_4533495853539814.jpeg", 
"images/received_772475432597223.jpeg", 
"images/received_838860335925722.jpeg", 
"images/received_840965191959985.jpeg", 
"images/received_857462750663095.jpeg", 
"images/received_872955252212920.jpeg", 
"images/received_895217746889289.jpeg", 
"images/received_917208280672925.jpeg", 
"images/received_929441489569684.jpeg", 
"images/received_931325803104823.jpeg", 
"images/received_933668692409750.jpeg", 
"images/received_955017930481914.jpeg", 
"images/received_959117393227083.jpeg", 
"images/received_964040639902946.jpeg", 
"images/received_977859321569667.jpeg", 
"images/received_981771097853825.jpeg", 
"images/received_989965816865032.jpeg", 
"images/received_998373616278565.jpeg"
];


/* Create gallery */

images.forEach(function(imageSrc) {

    const photo = document.createElement("div");

    photo.className = "photo";

    const image = document.createElement("img");

    image.src = imageSrc;

    image.alt = "Gallery Photo";

    image.loading = "lazy";


    /* Open fullscreen */

    image.addEventListener("click", function() {

        viewerImage.src = imageSrc;

        viewer.style.display = "flex";

    });


    photo.appendChild(image);

    gallery.appendChild(photo);

});


/* Close fullscreen */

closeBtn.addEventListener("click", function() {

    viewer.style.display = "none";

    viewerImage.src = "";

});


/* Close when clicking outside image */

viewer.addEventListener("click", function(event) {

    if (event.target === viewer) {

        viewer.style.display = "none";

        viewerImage.src = "";

    }

});


/* Close with Escape key */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {

        viewer.style.display = "none";

        viewerImage.src = "";

    }

});