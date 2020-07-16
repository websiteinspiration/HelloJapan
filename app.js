$(document).ready(function(){

	var prev_click = "#JP-47" // Bhayankar Jugaad. 


	$("path").hover(function(e) {
  		$("#info-box").css("display", "block");
  		$("#info-box").html($(this).data("info"));});
  		$("path").mouseleave(function(e) {
    	$("#info-box").css("display", "none");

	});

	$(document).mousemove(function(e) {
    	$("#info-box").css("top", e.pageY - $("#info-box").height() - 35);
    	$("#info-box").css("left", e.pageX - $("#info-box").width() / 2);
  	}).mouseover();


	$("path").click(function(){
		$(prev_click).css("fill", "#151525");
		$(prev_click).css("stroke","#FFF");
		$(this).css("fill","#732129");	
		$(this).css("stroke","#E94138");	
		prev_click = "#"+ $(this).attr("id");
		console.log(prev_click);
		var n = $(this).attr("title");
		console.log("The region is: "+n);
		var path = "images/" + n +".jpg";
		$("#region_image").attr("src", path);
		$("p1").html(text[n]);
	});

	$("select.region_list").change(function(){
        //var selectedRegion = $(this).children("option:selected").val();
        var selectedRegion = $(":selected").val();
        var path = "images/" + selectedRegion +".jpg";
		$("#region_image").attr("src", path);
		$("p1").html(text[selectedRegion]);
		var region_path = "path[title='" + selectedRegion + "']";
		$(prev_click).css("fill", "#151525");
		$(prev_click).css("stroke","#FFF");
		$(region_path).css("fill","#732129");
		$(region_path).css("stroke","#E94138");
		prev_click = "#"+ $(region_path).attr("id");
    });


})  

var text = {} // This was a painstakingly long process. All info below is (mostly) from https://www.japanvisitor.com/japan-travel/japan-prefectures Thanks!

text["Hokkaido"] = "Hokkaido is Japan's most northerly region and prefecture and the second largest of Japan's four main islands, making up approximately 20% of Japan's land mass but with only around 5% of its population. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/hokkaido-prefecture'>here</a>";
text["Aomori"] = "Aomori Prefecture is located at the very north of Honshu just south of Hokkaido. Aomori Prefecture, along with Hyogo Prefecture, is the only prefecture that stretches from the Pacific Ocean to the Sea of Japan.Aomori is largely a rural prefecture and gets its name - green woods - from the forests on its shores that once guided ships to Hokkaido and back during the Edo Period of Japanese history. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/aomori-prefecture'>here</a>";
text["Iwate"] = "Iwate Prefecture, located on the north east coast of Honshu is the second largest prefecture in Japan after Hokkaido and the prefecture with the second lowest population density - also after Hokkaido.Morioka is the largest city in Iwate with a population of over 300,000 inhabitants and the capital of the prefecture. Morioka is known for its production of iron kettles (tetsubin) and its wanko soba. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/iwate-prefecture'>here</a>";
text["Miyagi"] = "Miyagi is Japan's sixteenth largest prefecture and is both industrial and agricultural with manufacturing, especially electronics, centered around the prefectural capital and largest city of Sendai. Rice farming and fishing are also important. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/miyagi-prefecture'>here</a>";
text["Akita"] = "Akita Prefecture is located in the Tohoku region of northern Honshu, south west of Aomori Prefecture. Akita Prefecture, on the Sea of Japan, also borders Iwate, Miyagi and Yamagata prefectures. Akita is Japan's sixth largest prefecture and is largely rural with numerous onsen hot springs. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/akita-prefecture'>here</a>";
text["Yamagata"] = "Yamagata is Japan's largest producer of cherries and pears and fruit growing is an important part of the area's economy. Apples, grapes, melons, peaches, persimmons and watermelons are all grown in Yamagata, which like neighboring Niigata also has a high reputation for its rice. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/yamagata-prefecture'>here</a>";
text["Fukushima"] = "Fukushima's modern history was forever changed by the March 2011 earthquake and tsunami and the subsequent meltdown of several nuclear reactors on its coast. However, except for the exclusion zone around the reactors, Fukushima is completely safe to visit and welcomes domestic and foreign visitors, who can help to boost the local economy and return this beautiful area of Japan to normalcy and economic health. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/fukushima-prefecture'>here</a>";
text["Tochigi"] = "Tochigi is a mainly rural prefecture with its main urban centers the prefectural capital Utsunomiya and Tochigi city (the former capital). Around 21% of the total area of Tochigi Prefecture is protected land including the Nikko and Oze National Parks, as well as eight Prefectural Natural Parks. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/tochigi-prefecture'>here</a>";
text["Gunma"] = "Gunma is a mainly rural and mountainous prefecture with its main urban centers the prefectural capital Maebashi, and Takasaki. Around 14% of the total area of Gunma Prefecture is protected land including the Nikko and Oze National Parks, as well as Joshin'etsu-Kogen National Park and Myogi-Arafune-Saku Kogen Quasi-National Park. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/gunma-prefecture'>here</a>";
text["Ibaraki"] = "Ibaraki is a diverse mixture of agriculture, industry, and high-tech R&D. Kairaku-en is one of Japan's top gardens and famous for its plum blossom. Ibaraki has Japan's most famous university in Japan for robotics, Tsukuba University. Ibaraki also has a 60 km-long beach that is a popular hangout for surfers mainly from Tokyo. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/ibaraki-prefecture'>here</a>";
text["Saitama"] = "Saitama Prefecture is just north-west of the capital, Tokyo. The fastest growing of Japan's prefectures, Saitama has much to offer the visitor with its historic castle town of Kawagoe, its Railway Museum, the huge Tobu Zoo, and many areas of scenic beauty and offer strolling and hiking escapes from the capital. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/saitama-prefecture'>here</a>";
text["Tokyo"] = "Tokyo is the capital of Japan and a very cool place! You've got the entertainment quarters of Roppongi, Shinjuku (Kabukicho) and cool youth scenes in Shibuya. Sony Building in Ginza for the latest hi-tech, or Akihabara for hi-tech at cheaper prices, and with a big dollop of Japanese nerd culture. Also, the home of Japanese sumo in Ryogoku in Sumida-ku. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/tokyo-prefecture'>here</a>";
text["Chiba"] = "Chiba Prefecture, in the Kanto region of Japan, is the prefecture most visitors to Japan first arrive in, as it is where Narita International Airport is located. Chiba is a mixed agricultural and industrial prefecture and is Japan's second most productive prefecture in terms of agriculture after Hokkaido. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/chiba-prefecture'>here</a>";
text["Kanagawa"] = "Kanagawa is an urbanized and industrial prefecture especially in the east where the cities of Yokohama (the prefectural capital) and Kawasaki are located. The Great Wave of Kanagawa - is pretty cool! More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/kanagawa-prefecture'>here</a>";
text["Niigata"] = "Niigata City, with a population of over 800,000, is the largest port on the Japan Sea coast, and the capital of Niigata prefecture, famous for its rice, sake, seafood, and cut flower industry, especially tulips. Niigata connects to Tokyo by the Joetsu Shinkansen, making it very accessible. Sado Island, with a history of gold mining and exile, is a ferry ride from Niigata City.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/niigata-prefecture'>here</a>";
text["Ishikawa"] = "Ishikawa Prefecture is located in the west of Japan, on the Japan Sea coast. The name usually draws a blank amongst foreign visitors, and even among many Japanese, who either think immediately of Ichikawa (a city near Tokyo) or whose brows only clear when you mention its prefectural capital, Kanazawa, well known for its cultural and historical riches. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/ishikawa-prefecture'>here</a>";
text["Toyama"] = "Toyama is the center of Japan's pharmaceutical industry and also has a strong decorative glassware tradition. Toyama may be less well known for tourism than the nearby Little Kyoto that is Kanazawa further west, but spacious, pleasantly laid out Toyama is a gateway to skiing, snowboarding and hiking in the Japan Alps. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/toyama-prefecture'>here</a>";
text["Nagano"] = "Nagano was host city for the 1998 Winter Olympics and is an entrance point to the Japan Alps area for skiing and hot springs in the winter. A number of good hot spring resorts are within easy reach of Nagano, including Yudanaka - home to Japan's snow monkeys and Nozawa Onsen, which is also a famous ski resort as are the slopes at Hakuba. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/nagano-prefecture'>here</a>";
text["Fukui"] = "Fukui is a mainly rural prefecture with the Echizen coastline famous for its beaches in summer and its rugged coastline throughout the year. Fukui is home, however, to more nuclear reactors than any other prefecture in Japan, many congregated near the town of Tsuruga. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/fukui-prefecture'>here</a>";
text["Gifu"] = "Gifu was rebuilt twice: after a devastating earthquake in 1891 and again after World War II, with its historic buildings carefully restored. Gifu's traditional pursuits of cormorant fishing and paper products are still alive today. Gifu City's number one attraction is Gifu Castle, and it also has some excellent museums. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/gifu-prefecture'>here</a>";
text["Yamanashi"] = "Yamanashi is a mixed urbanized and rural prefecture which contains the iconic Mt Fuji and Fuji Five Lakes in the south of the prefecture on the border with Shizuoka. Around 27% of the total area of Yamanashi Prefecture is protected land including the Chichibu Tama Kai, Fuji-Hakone-Izu and Minami Alps National Parks. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/yamanashi-prefecture'>here</a>";
text["Aichi"] = "Aichi is a densely populated, mixed industrial and agricultural prefecture with its prefectural capital Nagoya - Japan's 4th largest city after Tokyo, Yokohama and Osaka. Nagoya and its surrounding towns and cities have a population of around 10 million inhabitants. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/aichi-prefecture'>here</a>";
text["Shizuoka"] = "Shizuoka Prefecture is in the Chubu region of central Honshu, on the Pacific coast a couple of hours travel time south-west of Tokyo. Shizuoka's best known features are the iconic Mt.Fuji and the Izu Peninsula with its many onsen hot spring resorts with a sea view. Shizuoka Prefecture is also Japan's biggest provider of tea, but renowned, too, for its musical instrument and motorcycle industries. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/shizuoka-prefecture'>here</a>";
text["Hyogo"] = "Hyogo Prefecture is located in the Kansai region of west central Japan and along with Aomori Prefecture in the far north of Honshu (Tohoku) is the only prefecture in Japan to have both Sea of Japan and Pacific Ocean (Inland Sea) coastlines. Kobe is its capital and Kobe Beef is very tasty. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/hyogo-prefecture'>here</a>";
text["Kyoto"] = "Kyoto is a historical and cultural treasure trove with thousands of serene temples, gardens and shrines, and no less than 17 UNESCO World Heritage Sites. Kyoto was spared bombing during World War II, and its thousands of surviving machiya wooden buildings means the city is replete with traditional elegance and picturesque scenes. Its location makes it a great base for exploring Nara, Osaka & Kobe.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/kyoto-prefecture'>here</a>";
text["Shiga"] = "Shiga is a mainly rural prefecture with its prefectural capital Otsu, which is close to Kyoto city. Shiga Prefectures completely encircles Lake Biwa, Japan's largest lake. 37% of the total land area of Shiga Prefecture has been designated as Natural Parks - the highest percentage of any prefecture in Japan. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/shiga-prefecture'>here</a>";
text["Osaka"] = "Osaka is Japan's third biggest city, and the metropolis of the Kansai region. Osaka is a port city, and historically the merchant capital of Japan. The traditional greeting among citizens of this friendly, unpretentious work hard, party hard city is mohkare-makka, or Are you making money?. Visitors will appreciate the more neighborly ethos of Osaka, in contrast to the mind-your-own-business mood of Tokyo. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/osaka-prefecture'>here</a>";
text["Nara"] = "Nara has a very long and illustrious history. Shinto rites of purity decreed that, with the death of an emperor, the capital must be relocated. So it was around Nara that all of Japan's original capitals were established between the third and eighth centuries. From 710 Nara was declared the permanent capital, only for the Imperial family to be moved 84 years later to what was then called Heiankyo, now Kyoto.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/nara-prefecture'>here</a>";
text["Mie"] = "Mie is a mainly rural prefecture with its prefectural capital Tsu, which is close to Nagoya city to the east. 35% of the total land area of Mie Prefecture has been designated as Natural Parks. These include National Parks of Ise-Shima and Yoshino-Kumano. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/mie-prefecture'>here</a>";
text["Wakayama"] = "Wakayama, is a pleasant coastal city south of Osaka, one hour by express train from Namba Station. Wakayama Castle is Wakayama's main sightseeing attraction. The castle, on Mt. Torafusu, was first constructed on the orders of Toyotomi Hideyoshi (1536-1598) in 1585. Most of the buildings you see today were rebuilt in 1958 after the castle was badly damaged in World War II.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/wakayama-prefecture'>here</a>";
text["Okinawa"] = "Okinawa is the southernmost prefecture of Japan. It occupies the southern part of the Nansei (Southwest) chain of islands which stretches over 1,200 km from the southern tip of Kyushu to within 100 km of Taiwan. Okinawa prefecture consists of around 160 of these islands, 46 inhabited. The prefecture takes its name from the largest and most populous of the three groups of islands that form it, the other two being the Miyako and Yaeyama Islands group.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/okinawa-prefecture'>here</a>";
text["Fukuoka"] = "Fukuoka is the biggest city in the southern island of Kyushu. Located on the northern coast of Kyushu, Fukuoka is a port city split by the Nakagawa River between what was once the the castle town of Fukuoka to the west and the merchant quarter of Hakata to the east, Fukuoka is one of Japan's most dynamic and livable cities with many attractions for visitors. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/fukuoka-prefecture'>here</a>";
text["Saga"] = "Saga is a mainly rural prefecture with strong connections with the sea and onwards to Asia. Saga's two largest towns are Saga and Karatsu, which are small municipalities by Japanese standards. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/saga-prefecture'>here</a>";
text["Nagasaki"] = "Nagasaki was founded in 607 A.D. Nagasaki's population is about 420,000. Historically, Nagasaki was Japan's window on the rest of the world, and pleasantly reflects that foreign influence even today, especially in its Dutch and Chinese architecture. Nagasaki is also famous as the having been the second target of the atomic bomb in World War 2, when the city was attacked at 11.02am on August 9, 1945.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/nagasaki-prefecture'>here</a>";
text["Kumamoto"] = "Kumamoto is a pleasant, medium-sized and growing prefecture on the west coast of Kyushu. Kumamoto Castle is the town's main attraction and a spectacular site, which underwent restoration in time for its 400th anniversary. Kumamoto Castle, built by Kato Kiyomasa between 1601-1607, is Japan's third largest castle after Osaka Castle and Nagoya Castle. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/kumamoto-prefecture'>here</a>";
text["Oita"] = "Famous throughout Japan for onsen baths, the two tourist towns of Beppu (Shivangi used to stay here afaik) and Yufuin attract millions of domestic visitors every year. Ranging from the tacky to the traditional, the hot spring baths of Oita Prefecture should be high on any visitors' list of things to do. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/oita-prefecture'>here</a>";
text["Miyazaki"] = "Miyazaki is the prefectural capital city of Miyazaki Prefecture on the south east coast of Kyushu. Miyazaki city is the largest city in the mainly rural prefecture with a population of over 365,000 inhabitants. Miyazaki city is a pleasant seaside town popular with people on vacation and a fun place to base yourself to visit the many attractions the prefecture has to offer. Also amazing beef *chef's kiss*. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/miyazaki-prefecture'>here</a>";
text["Kagoshima"] = "Kagoshima is situated on the north west of Kagoshima Bay opposite the active volcano of Sakurajima. Kagoshima enjoys a mild and sunny winter and makes for an excellent long-weekend break from such far colder cities of Tokyo, Osaka and Nagoya to the north, with which it has direct cut-price air links.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/kagoshima-prefecture'>here</a>";
text["Kagawa"] = "Takamatsu is the prefectural capital of Kagawa, and, with a population of about 420,000 people, the second largest city on the island of Shikoku (after Matsuyama), located on the island's north coast. With the completion of the Seto Ohashi road and rail bridge in 1988, Takamatsu became Shikoku Island's gateway to Japan's main island of Honshu. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/kagawa-prefecture'>here</a>";
text["Ehime"] = "Matsuyama is the capital of Ehime Prefecture, and the largest city on the island of Shikoku, with a population of about half a million. Matsuyama's two big attractions are its fine castle and Dogo Onsen hot spring, but with numerous other things to see and do, including a number of interesting temples in or around the town, good restaurants, and lively shopping and entertainment areas in covered arcades.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/ehime-prefecture'>here</a>";
text["Tokushima"] = "Tokushima is a pleasant coastal city and the prefectural capital of Tokushima Prefecture on the eastern side of Shikoku Island. Tokushima is best-known for its amazing summer dance festival - the Awa Odori (Awa was the prefecture's old name.) - when over a million people gather in this city of about 270,000 people to participate in the 4-day street dancing from August 12-15 every year.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/tokushima-prefecture'>here</a>";
text["Kochi"] = "Kochi is the capital city of Kochi Prefecture, situated on the Kagami River on the south coast of Shikoku Island. Kochi, with a population of approximately 335,000, has a reputation as one of Japan's most livable cities. Both sea and mountains are on the doorstep of this surprisingly cosmopolitan town. There's good food, a lively market, friendly people and an easy-going vibe.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/kochi-prefecture'>here</a>";
text["Tottori"] = "Tottori Prefecture is located on the Japan Sea coast in the Chugoku (south west) region of Japan. Tottori Prefecture borders Shimane Prefecture, Hyogo Prefecture, Okayama Prefecture and Hiroshima Prefecture. Tottori is the least populous prefecture in Japan. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/tottori-prefecture'>here</a>";
text["Shimane"] = "Shimane Prefecture is located on the Sea of Japan coast in the Chugoku (south west) region of Japan. Shimane Prefecture borders Tottori Prefecture, Yamaguchi Prefecture and Hiroshima Prefecture. Shimane is the second least populous prefecture in Japan after its neighbor Tottori. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/shimane-prefecture'>here</a>";
text["Okayama"] = "Okayama is a medium sized city in western Japan on the Sanyo shinkansen line, located roughly halfway between Osaka and Hiroshima. Okayama is best known for its Korakuen Garden and its association with the Momotaro legend. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/okayama-prefecture'>here</a>";
text["Hiroshima"] = "Hiroshima has earned a poignant place in the world's history and imagination as where the first atomic bomb was dropped, in 1945. But this modern, clean, open city offers more than just memories with its Peace Memorial Park. A bustling port city of over one million people, Hiroshima has numerous tourist attractions, including a reconstructed castle and famous gardens, and is easy to navigate, on foot or by streetcar. More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/hiroshima-prefecture'>here</a>";
text["Yamaguchi"] = "Yamaguchi is the peaceful capital of Yamaguchi Prefecture right down in the south western corner of Honshu, facing Japan's southern island of Kyushu. With a population of around 200,000, Yamaguchi has an easy-going feel and is an ideal base for exploring the local area including the historic towns of Hagi, Tsuwano and the limestone caverns of Akiyoshi-dai.More info <a href='http://www.eubusinessinjapan.eu/why-japan/regions-prefectures/yamaguchi-prefecture'>here</a>";



// Let it be known that I love a particular smol boi
  

