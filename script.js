function goToWishes() {
    const language = document.getElementById("languageSelect").value;
    const festival = document.getElementById("festivalSelect").value;

    if (!language || !festival) {
        alert("Please select both language and festival.");
        return;
    }

    window.location.href = `wishes.html?language=${language}&festival=${festival}`;
}

const wishes = {
    Diwali: {
        Marathi: [
            "शुभ दीपावली! 🪔🎉",
            "सुख आणि समृद्धीच्या दीपावलीच्या शुभेच्छा! 🌟✨",
            "प्रकाशाचा सण मंगलमय होवो! 🪔✨",
            "तुमच्या आयुष्यात आनंद आणि शांतीची भरभराट होवो! 🌟🪔",
            "दीपोत्सवाच्या हार्दिक शुभेच्छा! 🎉✨",
            "प्रकाश आणि आनंदाने भरलेला दीपोत्सव साजरा करा! 🪔🌟",
            "संपन्नता आणि समाधान तुमच्या आयुष्यात येवो! 🎇✨",
            "आयुष्यात नवीन सुरुवातीसाठी शुभेच्छा! 🌟🪔",
            "आनंदाची भरभराट होवो! शुभ दीपावली! 🪔🎇",
            "तुमच्या कुटुंबाला दीपावलीच्या मंगलमय शुभेच्छा! 🎆🪔",
            "नवे स्वप्ने, नवा प्रकाश, नवे यश! शुभ दीपावली! 🌟🎉",
            "तुमच्या जीवनात सौख्य आणि सुखाचे दीप उजळू देत! 🪔✨",
            "प्रकाश आणि उत्साहाचा हा सण तुम्हाला आनंददायी होवो! 🎉🌟",
            "तुमच्या जीवनात आनंद आणि समाधान भरभराटो! शुभ दीपावली! 🪔🎇",
            "दिव्यांच्या उजेडासारखी तुमची वाटचाल मंगलमय होवो! 🌟🪔"
        ],
        Hindi: [
            "दीपावली की हार्दिक शुभकामनाएं! 🪔🎉",
            "खुशियों की दीपावली मुबारक! 🌟",
            "दीपों का यह पर्व आपके जीवन में खुशियां लाए! 🎇✨",
            "प्रकाश और समृद्धि की दीपावली आपको शुभ हो! 🪔🎆",
            "आपका जीवन दीपों की रोशनी से जगमगाए! 🌟✨",
            "दीपावली के शुभ अवसर पर ढेर सारी शुभकामनाएं! 🎉🪔",
            "आपका घर खुशियों और सुख से भर जाए! 🌟✨",
            "दीपों की जगमगाहट आपके जीवन में रोशनी लाए! 🪔🌟",
            "सुख, शांति और समृद्धि के दीप जलें! 🪔✨",
            "आपकी दीपावली मंगलमय हो! 🎇🪔",
            "आपके परिवार को दीपावली की हार्दिक शुभकामनाएं! 🌟🎉",
            "प्रकाश और खुशियों से आपका जीवन भर जाए! 🪔✨",
            "दीपावली पर नई खुशियों का आगमन हो! 🎉🌟",
            "सपनों की नई उड़ान भरें, शुभ दीपावली! 🪔✨",
            "प्रकाश का यह पर्व आपके जीवन में नई शुरुआत लाए! 🎆🪔"
        ],
        English: [
            "Happy Diwali to you! 🪔🎉",
            "May this Diwali bring lots of happiness and light to your life! 🌟",
            "Wishing you a joyous and sparkling Diwali! 🪔✨",
            "May the festival of lights brighten up your life! 🎇🪔",
            "Celebrate this Diwali with love and laughter! 🎉✨",
            "Let the light of Diwali illuminate your path to success! 🌟🪔",
            "Wishing you a Diwali filled with peace, prosperity, and joy! 🎇✨",
            "May the glow of lamps bring endless happiness to your home! 🪔🌟",
            "Have a safe, happy, and prosperous Diwali! 🎆✨",
            "May your Diwali be filled with sweet moments and cherished memories! 🌟🪔",
            "Let the light of Diwali guide you to happiness and success! 🎉✨",
            "Celebrate the triumph of light over darkness this Diwali! 🪔🎆",
            "Sending you warm wishes on the Festival of Lights! 🌟✨",
            "May this Diwali bring love, joy, and endless blessings to you! 🪔🎇",
            "Have a wonderful Diwali filled with love and togetherness! 🎉🪔"
        ]
    },
    "New Year": {
        Marathi: ["नवीन वर्षाच्या हार्दिक शुभेच्छा!", "नवीन वर्ष आनंदमय जावो!"],
        Hindi: ["नव वर्ष की हार्दिक शुभकामनाएं!", "नया साल खुशियों से भरा हो!"]
    },
    "Holi": {
    "Marathi": [
        "होळीच्या हार्दिक शुभेच्छा! 🎉🌈",
        "तुमचं आयुष्य रंगीबेरंगी आणि आनंदाने भरलेलं असो! 🌈😊",
        "रंग, प्रेम, आणि आनंदाने भरलेली होळी साजरी करा! 🥳💖",
        "होळीचा उत्सव तुमच्या जीवनात नवे रंग घेऊन येवो! 🌟🎨",
        "होळीच्या दिवशी तुमचे जीवन आनंदाने भरून जावो! 🌈✨",
        "स्नेह आणि आनंदाने भरलेली होळी साजरी करा! 👫💐",
        "होळीचा रंग तुमच्या आयुष्याला आनंदाने रंगवो! 🎨💝",
        "सर्वांना रंग, प्रेम आणि उत्सवाच्या होळीच्या शुभेच्छा! 🌈🎉",
        "होळीचा सण तुमच्या मनाला शांती आणि सुख मिळवून देतो! 🌸🙏",
        "तुमच्या आयुष्यात रंग, हसू आणि प्रेम फुलू दे! 🌟💖"
    ],
    "English": [
        "Wishing you a vibrant and joyous Holi! 🎨🎉",
        "May your life be filled with the beautiful colors of Holi! 🌈😊",
        "Celebrate this Holi with love, laughter, and colors! 💖😂🌈",
        "Let the festival of colors brighten your life with happiness! ✨🎨",
        "Wishing you and your family a colorful and safe Holi! 🌟🏡",
        "May the colors of Holi bring peace and prosperity to your life! 🌸💰",
        "Have a fun-filled Holi with your loved ones! 🥳💖",
        "Let this Holi be the start of a new and colorful journey! 🌈🌟",
        "Splash yourself in the colors of joy and love this Holi! 🎉💖",
        "Wishing you endless happiness and vibrant colors this Holi! 🌟🌸"
    ],
    "Hindi": [
        "होली की हार्दिक शुभकामनाएं! 🎉🌈",
        "आपका जीवन खुशियों और रंगों से भर जाए! 🌟😊",
        "होली का त्योहार आपके जीवन में नई खुशियां लाए! 🌈✨",
        "आपके जीवन में रंग और खुशियां बरकरार रहें! 💖🌟",
        "प्यार और रंगों के साथ होली मनाइए! 🌸💖",
        "आपका जीवन सतरंगी और सुखद हो! 🌈😊",
        "होली का हर रंग आपके जीवन में नई खुशियां लाए! 🎨🌟",
        "होली की मिठास और रंगों से आपका जीवन महक उठे! 🌸💝",
        "रंगों का त्योहार आपके जीवन को और रंगीन बना दे! 🌈✨",
        "होली आपके जीवन में नई उमंग और ऊर्जा लाए! 🌟🎉"
    ]
}

,
    "Sankrant": {
    "Marathi": [
        "मकर संक्रांतीच्या हार्दिक शुभेच्छा! 🌞🌾",
        "तीळ गुळ घ्या, गोडगोड बोला! आनंदाने साजरा करा संक्रांतीचा सण! 🪁🎉",
        "पतंग उडवण्याचा उत्सव आणि गोडवे घालण्याची वेळ आली! शुभ मकर संक्रांती! 🪁🌟","मकर संक्रांतीच्या हार्दिक शुभेच्छा! 🌞🌾",
        "तीळ गुळ घ्या, गोडगोड बोला! 🪁✨",
        "नवा सूर्य, नवी आशा! संक्रांतीच्या शुभेच्छा! 🌞🎉",
        "संक्रांतीचा सण तुमच्या आयुष्यात आनंद घेऊन येवो! 🎆✨",
        "पतंग उडवा, आनंद साजरा करा! शुभ मकर संक्रांती! 🪁🌟",
        "आरोग्य, सुख आणि समृद्धीची शुभेच्छा! 🌞🌾",
        "गोडवा आणि आनंदाने भरलेला सण असो! मकर संक्रांतीच्या शुभेच्छा! 🎉✨",
        "संक्रांतीचा उत्सव तुमच्या जीवनाला नवे तेज देवो! 🌞🪁",
        "पतंग उंच उडवा आणि यशस्वी जीवनाचा आनंद घ्या! 🪁🎇",
        "गोड गोड तीळ गुळ खा आणि आनंद साजरा करा! 🌟🌾",
        "मकर संक्रांतीच्या मनःपूर्वक शुभेच्छा! 🎉🌞",
        "प्रकाश, ऊर्जेसह आपले आयुष्य उजळून टाका! 🪁🌟",
        "शुभ संक्रांति! सुख-समृद्धी लाभो! 🌾✨",
        "तिळगुळ घ्या आणि चांगलं बोलण्याचा संकल्प करा! 🌟🎇",
        "मकर संक्रांतीचा आनंद साजरा करा! 🪁🌞",
        "पतंग उडवा आणि आनंदाच्या शिखरावर पोहोचा! 🌟✨",
        "यश, आनंद आणि सुखाची संक्रांत असो! 🎉🌞",
        "नवीन उमेद आणि नवीन तेज घेऊन संक्रांतीचं स्वागत करूया! 🪁🎇",
        "जीवनात उंच भरारी घेण्यासाठी शुभ संक्रांत! 🌟🌾",
        "तिळगुळाच्या गोडव्याने आपल्या नात्यांना गोडवा मिळो! 🎉🪁",
        "संक्रांतीचा सण तुमच्या आयुष्यात प्रकाश आणो! 🌞✨",
        "मकर संक्रांतीत गोडवे, आनंद आणि नवा आरंभ! 🎇🌟",
        "तिळगुळ घ्या, गोड गोड बोला! 🪁🌾",
        "पतंग उडवा, नव्या उंचीवर पोहोचा! 🎉🌟",
        "संक्रांतीच्या सणाला आनंद आणि गोडवा मिळो! 🌾✨",
        "मकर संक्रांतीच्या पवित्र दिवशी शुभेच्छा! 🪁🌞",
        "गोड गोड खा आणि आनंद साजरा करा! 🎇🎉",
        "पतंगाचा आनंद तुमच्या जीवनात गोडवा आणो! 🌟🪁",
        "गोडवे, आशा आणि उत्साहाने भरलेली संक्रांत असो! 🌾🌞",
        "मकर संक्रांतीच्या मंगलमय शुभेच्छा! 🎉✨",
        "नवीन तेज, नवा उत्साह, नव्या यशाची सुरुवात! 🌟🪁",
        "तिळगुळ खा आणि चांगल्या गोष्टींचा विचार करा! 🎇🌞",
        "पतंग उडवा, आनंद साजरा करा! शुभ संक्रांत! 🌟🌾",
        "मकर संक्रांतीच्या उत्सवाचा गोडवा तुमच्या आयुष्यात येवो! 🎉✨",
        "संक्रांतीच्या शुभेच्छा! यशस्वी भव! 🪁🌞",
        "गोडवे, गोडवा आणि आनंदाने भरलेला सण साजरा करा! 🎇🪁",
        "पतंग उंच उडवा आणि यशाचे शिखर गाठा! 🌟🌾",
        "शुभ मकर संक्रांती! नवा तेज, नवा आरंभ! 🎉🌞",
        "तिळगुळ खा, प्रेमाचा सण साजरा करा! 🌾✨",
        "मकर संक्रांतीच्या दिवशी आनंद आणि समाधान मिळो! 🎇🪁",
        "पतंग उडवा आणि तुमच्या स्वप्नांना गती द्या! 🌟🎉",
        "गोडवे आणि उत्साहाचा सण साजरा करा! 🌞🌾",
        "मकर संक्रांतीच्या शुभेच्छा! सुख-समृद्धी लाभो! 🎇✨",
        "पतंगाचा आनंद तुमच्या जीवनाला उंच भरारी देवो! 🪁🌾",
        "नवा तेज आणि नवा उत्साह घेऊन सण साजरा करा! 🎉🌞",
        "तिळगुळ खा, गोडवा वाढवा! 🪁🌟",
        "मकर संक्रांतीच्या दिवशी यशस्वी भव! 🌾✨",
        "पतंग उडवा, आनंदाच्या भरारीवर जा! 🎇🎉",
        "गोडवा आणि आनंदाने भरलेला सण तुमच्या आयुष्यात येवो! 🌟🪁",
        "मकर संक्रांतीच्या मनःपूर्वक शुभेच्छा! 🎉✨"
    ],
    "Hindi": [
        "मकर संक्रांति की हार्दिक शुभकामनाएं! 🌞🌾",
        "तिल-गुड़ खाएं, मीठा-मीठा बोलें, संक्रांति का त्योहार खुशी से मनाएं! 🪁🎉",
        "पतंगों का त्योहार मकर संक्रांति आप सभी के जीवन में खुशियां लाए! 🪁🌟","मकर संक्रांति की हार्दिक शुभकामनाएं! 🌞🌾",
        "तिल-गुड़ खाएं और मीठा बोलें! 🪁✨",
        "सूर्य देव के इस पर्व पर खुशियां बरसें! 🎉🌟",
        "पतंगों के संग आसमान छूने का दिन मुबारक हो! 🪁🎇",
        "मकर संक्रांति का यह पावन पर्व आपके जीवन में खुशियां लाए! 🌾🌞",
        "तिल-गुड़ की मिठास और पर्व का उल्लास मनाएं! 🎉✨",
        "संक्रांति के पावन पर्व पर सभी को शुभकामनाएं! 🪁🌟",
        "पतंगों का त्योहार और नई ऊंचाइयों का सफर! शुभ मकर संक्रांति! 🌞🎇",
        "खुशियों की रोशनी और उम्मीदों की नई शुरुआत! 🎉✨",
        "मकर संक्रांति आपके जीवन को समृद्धि और सफलता से भर दे! 🪁🌾",
        "पतंग उड़ाएं और खुशियों के शिखर तक पहुंचें! 🌟🎇",
        "तिल-गुड़ की मिठास आपके रिश्तों को और गहरा करे! 🌾✨",
        "संक्रांति का त्योहार आपके जीवन को खुशियों से भर दे! 🌞🪁",
        "जीवन में नए उत्साह और उमंग के साथ संक्रांति मनाएं! 🎉🌟",
        "पतंगों के संग उड़ते सपनों को ऊंचाई दें! शुभ मकर संक्रांति! 🌾🌞",
        "यह पर्व आपके जीवन को नई रोशनी और ऊर्जा से भर दे! 🪁🎇",
        "तिल-गुड़ खाओ और प्रेम से भरी बातें करो! 🌟✨",
        "पतंगों का त्योहार आपके जीवन में उत्साह और उमंग लाए! 🎉🌾",
        "संक्रांति के शुभ अवसर पर सुख-शांति की कामना! 🌞🪁",
        "मकर संक्रांति की बधाई! हर दिन बेहतर और उज्जवल बने! 🌾🎇",
        "पतंग की ऊंची उड़ान आपके सपनों को नई ऊंचाई दे! 🌟✨",
        "तिल और गुड़ का मेल आपके रिश्तों में मिठास लाए! 🎉🌞",
        "मकर संक्रांति का पर्व आपके जीवन को सफल बनाए! 🪁🌾",
        "सूर्य देव की कृपा से हर दिन सुखदायक हो! 🌞🎇",
        "पतंग की ऊंची उड़ान के साथ अपने जीवन को भी ऊंचा उठाएं! 🌟✨",
        "तिल-गुड़ से रिश्तों में मिठास और पर्व में आनंद बढ़ाएं! 🎉🌾",
        "खुशियों का त्योहार मकर संक्रांति आप सभी को मुबारक हो! 🪁🌞",
        "पतंगों का त्योहार आपके जीवन में रंग भर दे! 🎇✨",
        "संक्रांति की बधाई! जीवन में ऊंचाई और तरक्की मिले! 🌟🪁",
        "तिल-गुड़ खाएं, मीठे सपने सजाएं! शुभ मकर संक्रांति! 🌾🎉",
        "पतंगों के संग आसमान को छूने का सपना सच करें! 🌞🎇",
        "मकर संक्रांति का यह पर्व आपके जीवन को नई दिशा दे! 🪁✨",
        "पतंगों की उड़ान आपके जीवन को नई रोशनी दे! 🌟🌾",
        "संक्रांति की शुभकामनाएं! हर दिन नई ऊर्जा और उत्साह से भरा हो! 🌞🎉",
        "तिल-गुड़ खाएं और अपनों के साथ खुशियां बांटें! 🎇🪁",
        "पतंग की डोर के साथ अपने रिश्तों को मजबूत करें! 🌟🌞",
        "मकर संक्रांति के इस पर्व पर हर दिल खुशहाल हो! 🌾✨",
        "पतंगों के संग खुशियां और आनंद मनाएं! 🎉🌟",
        "तिल-गुड़ की मिठास आपके रिश्तों में सजीवता लाए! 🪁🌾",
        "मकर संक्रांति का पर्व आपके जीवन में नयी ऊंचाइयां लाए! 🌞🎇",
        "तिल-गुड़ खाएं और जीवन में मिठास बढ़ाएं! शुभ मकर संक्रांति! 🌟✨",
        "पतंग की ऊंचाई के साथ अपने सपनों को भी ऊंचा उड़ाएं! 🎉🪁",
        "संक्रांति के इस दिन पर नई आशा और नए उत्साह का स्वागत करें! 🌞🌾",
        "मकर संक्रांति की ढेर सारी बधाइयां! जीवन में खुशियों का प्रकाश फैले! 🌾🎇",
        "पतंगों की तरह ही आपके सपने भी ऊंची उड़ान भरें! 🌟✨",
        "तिल और गुड़ का मेल आपके जीवन में नई मिठास लाए! 🎉🌾",
        "मकर संक्रांति का यह पर्व आपके लिए सुखद और उज्जवल हो! 🌞🪁",
        "पतंग उड़ाएं और अपनी खुशियों को आसमान तक ले जाएं! 🌟✨",
        "संक्रांति की शुभकामनाएं! हर दिन नई रोशनी और नई उम्मीद से भरा हो! 🎉🌾",
        "मकर संक्रांति का पर्व आपके जीवन में सुख, शांति और समृद्धि लाए! 🪁🌞"
    ],
    "English": [
        "Wishing you a joyful Makar Sankranti filled with happiness and prosperity! 🌞🌾",
        "Celebrate this Sankranti with sweet moments and high spirits! 🪁🎉",
        "Let your kites soar high this Makar Sankranti, and may your dreams follow! 🪁🌟","Wishing you a joyful and prosperous Makar Sankranti! 🌞🌾",
        "Fly high like kites and reach for the skies! 🪁✨",
        "Let the warmth of the sun fill your life with happiness. 🌟🌞",
        "Celebrate Makar Sankranti with joy, love, and sweets! 🎉🌾",
        "May this festival bring new energy and positivity to your life! 🪁🌟",
        "Soar high with your dreams this Sankranti! 🌞✨",
        "May the sweetness of til and jaggery fill your life with love and harmony. 🎇🌾",
        "Wishing you a festival filled with joy and colorful kites! 🪁🎉",
        "Makar Sankranti blessings to you and your family! 🌞🌟",
        "May your life shine as bright as the sun this Sankranti! 🌞✨",
        "Fly kites, eat sweets, and make memories this festive season! 🪁🎇",
        "Let the spirit of Makar Sankranti bring you success and prosperity. 🎉🌾",
        "A festival of kites and joy—Happy Makar Sankranti! 🌟✨",
        "May the festival bring new hope and warmth to your heart! 🌞🪁",
        "Wishing you success as bright as the sun this Sankranti! 🌞🌾",
        "Celebrate the spirit of joy and togetherness on Makar Sankranti! 🎉✨",
        "Let the sweetness of the festival brighten your life. 🌟🪁",
        "Reach new heights just like your flying kite! 🌞🎇",
        "This Sankranti, let’s spread love, peace, and happiness! 🎉🌾",
        "May the sun god bless you with warmth and prosperity. 🌞🪁",
        "A new beginning with a new season—Happy Makar Sankranti! 🌾✨",
        "Let your life take a high flight this Makar Sankranti! 🪁🎇",
        "Wishing you brighter days and joyful moments! 🎉🌟",
        "May this festival bring you closer to your loved ones. 🌞✨",
        "Celebrate the harvest season with love and gratitude! 🪁🌾",
        "Let the colorful kites bring you endless happiness! 🎇🌞",
        "Wishing you a festival filled with warmth and laughter! 🌟🎉",
        "Makar Sankranti is here to bring positivity to our lives! 🪁✨",
        "Soar to new heights and embrace the sun’s blessings. 🌞🎇",
        "May your dreams and aspirations fly high this Sankranti! 🌟🪁",
        "Let the brightness of the sun remove all negativity. 🎉🌾",
        "Enjoy the festival with sweets, kites, and lots of smiles! 🌞✨",
        "Makar Sankranti blessings for a happy and successful life! 🎇🪁",
        "May this harvest season bring you prosperity and joy! 🌾🌟",
        "The festival of the sun has arrived! Happy Sankranti! 🎉🌞",
        "Fly kites and reach new heights this festive season! 🪁✨",
        "Let your life be as bright and colorful as the kites! 🎇🌾",
        "Warm wishes for a joyful Makar Sankranti! 🌞🌟",
        "May the festival fill your heart with endless joy. 🎉✨",
        "Celebrate the season of harvest with love and laughter! 🌾🪁",
        "This Sankranti, let’s spread kindness and happiness! 🎇🌞",
        "Let your dreams fly as high as the kites in the sky! 🌟✨",
        "Wishing you a festival full of positivity and energy! 🎉🪁",
        "May this Sankranti mark the beginning of a brighter future! 🌞🌾",
        "Celebrate with til, jaggery, and lots of smiles! 🎇🌟",
        "A day to enjoy the warmth of family and friends! 🎉🪁",
        "Let the sun’s blessings brighten your path. 🌾✨",
        "Happy Makar Sankranti! Enjoy the festival to the fullest! 🌞🎇",
        "May the festive season fill your life with endless happiness! 🪁🌟",
        "Wishing you success, joy, and high-flying dreams this Sankranti! 🎉🌾"
    ]
    }

    Ganesh Chaturthi: {
    Marathi: [
        "गणेश चतुर्थीच्या हार्दिक शुभेच्छा! 🙏🎉",
        "गणपती बाप्पा मोरया! तुमचं आयुष्य सुख, समृद्धी आणि शांततेने भरले जावं! 🕉️",
        "गणेश चतुर्थीच्या मंगलमयी दिनी तुमचं जीवन नवा उत्साह घेऊन येवो! 🌺",
        "गणपती बाप्पा तुमच्यावर कृपा करतात, तुमच्या जीवनात प्रगती आणि आनंद आलं! 🪔",
        "गणेश चतुर्थीच्या या खास दिवशी तुमचं घर मंगलमय होवो! 🏠✨",
        "गणपती बाप्पा तुमचं जीवन आनंद आणि सुखाने भरले जावं! 🎆",
        "विघ्नहर्ता गणेश चतुर्थीच्या पावन दिवशी तुमचं प्रत्येक कार्य सुकर होवो! 🙌",
        "गणेश चतुर्थीच्या शुभेच्छा! तुमचं घर प्रेम आणि समृद्धीने भरले जावं! 💖",
        "गणेश बाप्पाच्या आशीर्वादाने तुमच्या जीवनात प्रत्येक वाऱ्यावर विजय मिळो! 🏆",
        "तुमच्या जीवनात व्रुद्धी, सुख आणि समृद्धी येवो! गणेश बाप्पाच्या कृपेने! 🌼",
        "गणेश चतुर्थीच्या शुभवेळी तुमच्या जीवनात नवीन दिशा मिळो! 🚀",
        "गणपती बाप्पाच्या आशीर्वादाने तुमचं घर कष्टांपासून मुक्त होवो! 🌟",
        "गणेश बाप्पा तुमच्या जीवनात शांती, समृद्धी आणि सन्मान आणो! 🕊️",
        "गणेश चतुर्थीच्या दिवशी तुमचं जीवन उत्तम होवो! शुभेच्छा! 🎉",
        "गणेश बाप्पाच्या कृपेने तुमच्या सर्व मनोकामना पूर्ण होवोत! 🙏"
       ],
    Hindi: [
        "गणेश चतुर्थी की हार्दिक शुभकामनाएं! 🙏🎉",
        "गणपती बप्पा मोरया! आपके जीवन में सुख और समृद्धि आए! 🌟",
        "गणेश चतुर्थी के इस पावन अवसर पर भगवान गणेश से आशीर्वाद प्राप्त हो! 🕉️",
        "गणपती बाप्पा की कृपा से आपका हर काम सफल हो! 🙌",
        "गणेश चतुर्थी पर आपके जीवन में शांति, समृद्धि और आनंद का वास हो! ✨",
        "गणेश बप्पा के आशीर्वाद से आपका हर दिन खुशियों से भरा हो! 🎆",
        "गणेश चतुर्थी के इस खास मौके पर आपके घर में समृद्धि और सफलता का वास हो! 🏠",
        "आपके जीवन में गणेश बाप्पा की कृपा से हर दुख दूर हो! 💫",
        "गणेश बाप्पा की आशीर्वाद से आपके जीवन में सभी कार्य आसानी से पूरे हों! 📈",
        "गणेश चतुर्थी के इस शुभ अवसर पर आपके घर में प्रेम और शांति हो! 🏡",
        "गणेश चतुर्थी की शुभकामनाएं! आपके जीवन में हर परेशानी दूर हो और खुशियाँ आए! 🌸",
        "गणपती बाप्पा मोरया! आपके जीवन में खुशियों का संचार हो! 🎉",
        "गणेश बप्पा की कृपा से आपके जीवन में सफलता और समृद्धि बढ़े! 🌟",
        "गणेश चतुर्थी के इस दिन भगवान गणेश आपके जीवन को आशीर्वाद दें और उसे उज्जवल बनाएं! ✨",
        "आपके जीवन में गणेश बप्पा का आशीर्वाद हमेशा बना रहे! 🙏"
        ],
    English: [
        "Happy Ganesh Chaturthi to you! 🙏🎉",
        "Ganapati Bappa Morya! May Lord Ganesha bring prosperity and happiness to your life! 🌟",
        "On this auspicious occasion of Ganesh Chaturthi, may Lord Ganesha bless you with success and peace! 🕉️",
        "Wishing you all the happiness and success with the blessings of Lord Ganesha! 💫",
        "Ganapati Bappa’s blessings may bring prosperity and success to your home! 🏠",
        "May Lord Ganesha fill your life with joy, peace, and endless happiness! ✨",
        "Sending you blessings of wisdom, success, and prosperity on this Ganesh Chaturthi! 📈",
        "May every obstacle in your life be removed with Lord Ganesha’s blessings! 🕊️",
        "Ganapati Bappa’s blessings will always guide you to success and happiness! 🎉",
        "May this Ganesh Chaturthi bring new beginnings and blessings to your life! 🌸",
        "Wishing you a joyful and prosperous Ganesh Chaturthi! 🎆",
        "On this holy day of Ganesh Chaturthi, may Lord Ganesha bless you with good fortune! 🌟",
        "May Ganesha's blessings always lead you toward victory and success! 🏆",
        "Ganapati Bappa Morya! May your life always be full of light, love, and happiness! 🌞",
        "On this special day, may Lord Ganesha bring peace and prosperity to your home and family! 🏡"
        ]
     }
};

    function loadWishes() {
            const urlParams = new URLSearchParams(window.location.search);
            const language = urlParams.get("language");
            const festival = urlParams.get("festival");

            const wishesContainer = document.getElementById("wishesContainer");
            wishesContainer.innerHTML = ""; 

            if (wishes[festival] && wishes[festival][language]) {
                wishes[festival][language].forEach((wish) => {
                    const wishDiv = document.createElement("div");
                    wishDiv.className = "wish";

                    const wishText = document.createElement("p");
                    wishText.innerText = wish;

                    const sendButton = document.createElement("button");
                    sendButton.innerText = "Send";
                    sendButton.onclick = () => sendWish(wish);

                    // const navSend = document.querySelector("#send");
                    // navSend.onclick = () => sendWish(wish);

                    const customizeButton = document.createElement("button");
                    customizeButton.innerText = "Customize";
                    customizeButton.onclick = () => customizeWish(wishText);

                    wishDiv.appendChild(wishText);
                    wishDiv.appendChild(sendButton);
                    wishDiv.appendChild(customizeButton);
                    wishesContainer.appendChild(wishDiv);
                });
            } else {
                wishesContainer.innerHTML = "<p>No wishes found for the selected festival and language.</p>";
            }
    }

    function customizeWish(wishTextElement) {
            const originalText = wishTextElement.innerText;
            const inputField = document.createElement("input");
            inputField.type = "text";
            inputField.value = originalText;
            wishTextElement.innerHTML = '';
            wishTextElement.appendChild(inputField);

            const saveButton = document.createElement("button");
            saveButton.innerText = "Save";
            saveButton.onclick = () => saveCustomizedWish(inputField, originalText, wishTextElement);
            wishTextElement.appendChild(saveButton);
    }

    function saveCustomizedWish(inputField, originalText, wishTextElement) {
            const customizedText = inputField.value;

            if (customizedText.trim() === "") {
                alert("Wish cannot be empty.");
                inputField.value = originalText;
                return;
            }

            wishTextElement.innerHTML = customizedText;

            const sendButton = document.createElement("button");
            sendButton.innerText = "Send";
            sendButton.onclick = () => sendWish(customizedText);
            wishTextElement.appendChild(sendButton);

            const saveButton = wishTextElement.querySelector("button");
            saveButton.remove();
    }

function sendWish(wishText) {
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(wishText)}`;
    window.open(whatsappLink, "_blank");
}

document.addEventListener("DOMContentLoaded", function() {
    const imageWishesButton = document.getElementById("imageWishesButton");
    
    imageWishesButton.addEventListener("click", function() {
        const urlParams = new URLSearchParams(window.location.search);
        const festival = urlParams.get("festival");

        if (festival) {
            window.location.href = `${festival}_image.html`;
        } else {
            alert("Please select a festival first.");
        }
    });

    loadWishes();
});

function initializeWhatsAppButtons() {
    document.querySelectorAll(".sendToWhatsApp").forEach(button => {
        button.addEventListener("click", function() {
            const imageUrl = this.previousElementSibling.src; 
            const whatsappUrl = `https://api.whatsapp.com/send?text=Check out this image: ${imageUrl}`;
            window.open(whatsappUrl, '_blank');
        });
    });
}

document.addEventListener("DOMContentLoaded", function() {
    initializeWhatsAppButtons();
});



window.onload = loadWishes;
