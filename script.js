function goToWishes() {
    const language = document.getElementById("languageSelect").value
    const festival = document.getElementById("festivalSelect").value
  
    if (!language || !festival) {
      alert("Please select both language and festival.")
      return
    }
  
    window.location.href = `wishes.html?language=${language}&festival=${festival}`
  }
  
  const wishes = {
    Diwali: {
      Marathi: ["शुभ दीपावली! 🪔🎉", "सुख आणि समृद्धीच्या दीपावलीच्या शुभेच्छा! 🌟✨",
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
            "दिव्यांच्या उजेडासारखी तुमची वाटचाल मंगलमय होवो! 🌟🪔"],
      Hindi: ["दीपावली की हार्दिक शुभकामनाएं! 🪔🎉", "खुशियों की दीपावली मुबारक! 🌟"],
      English: ["Happy Diwali to you! 🪔🎉", "May this Diwali bring lots of happiness and light to your life! 🌟"],
    },
    "New Year": {
      Marathi: ["नववर्षाच्या हार्दिक शुभेच्छा! 🎉🌟", "नवीन वर्षाच्या शुभेच्छा! 🥳"],
      Hindi: ["नववर्ष की हार्दिक शुभकामनाएं! 🎉🌟", "नया साल मुबारक हो! 🥳"],
      English: ["Happy New Year to you! 🎉🌟", "Wishing you a fantastic year ahead! 🥳"],
    },
    Sankrant: {
      Marathi: ["मकर संक्रांतीच्या हार्दिक शुभेच्छा! 🪁", "तिळगुळ घ्या, गोड गोड बोला! 🍯"],
      Hindi: ["मकर संक्रांति की हार्दिक शुभकामनाएं! 🪁", "पतंग उड़ाने का मौसम आ गया! 🍯"],
      English: ["Happy Makar Sankranti! 🪁", "May this festival bring sweetness to your life! 🍯"],
    },
    "Gudi Padwa": {
      Marathi: ["गुडी पाडवा आणि नवीन वर्षाच्या हार्दिक शुभेच्छा! 🌸",
            "नवीन वर्षाची सुरुवात आनंदाने करा! 🎉",
            "गुडी पाडवा आणि नवीन वर्षाच्या हार्दिक शुभेच्छा! 🌸",
            "तुमच्या जीवनात नवीन उमंग आणि यश येवो! ✨",
            "गुडी पाडव्या निमित्ताने सुख, समृद्धी आणि आनंदाच्या शुभेच्छा! 🌼",
            "या नवीन वर्षात तुम्हाला सर्वकाही उत्तम मिळो! 🌟",
            "आपल्या घरात गोडवा आणि प्रेमाचा वास असो! 🌺",
            "गुडी पाडवा हा दिवस तुमच्यासाठी आनंदाचा आणि यशाचा ठरावा! 🪔",
            "नवीन वर्ष तुमच्यासाठी अत्यंत समृद्धीपूर्ण आणि हसत-खेळत जाऊं! 🎉",
            "गुडी पाडवा तुम्हाला नवे संकल्प, नवा उत्साह आणि नवा आनंद घेऊन येवो! 🌸",
            "नवीन वर्षात तुमच्या जीवनात आनंदाचे झाड फुलावं! 🌷",
            "आपल्या घरात समृद्धी आणि प्रेमाचा वास असो! 💫",
            "गुडी पाडव्या निमित्ताने तुमचं जीवन समृद्ध होवो! 🎉",
            "नवीन वर्ष तुमच्यासाठी अत्यंत सुखी आणि यशस्वी होवो! 🌟",
            "गुडी पाडव्या या शुभ पर्वावर तुमचं घर आनंदाने भरून जावं! 🏡",
            "नवीन वर्ष तुम्हाला सुसंस्कृतता, समृद्धी आणि शांती देईल! 🌹",
            "गुडी पाडव्या च्या आनंदाने तुमचं जीवन उजळून जावं! 🪔"
      ],
      Hindi: ["गुड़ी पड़वा और नववर्ष की हार्दिक शुभकामनाएं! 🌸", "नए साल की शुरुआत खुशियों से हो! 🎉"],
      English: [
        "Wishing you a very Happy Gudi Padwa and a prosperous New Year! 🌸",
        "May this new year bring joy and success! 🎉",
      ],
    },
    "Ganesh Chaturthi": {
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
        ] ,
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
      "English": [
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
        ],
    },
    Christmas: {
      Marathi: ["नाताळच्या हार्दिक शुभेच्छा! 🎄", "आनंदी नाताळ आणि शुभ नववर्ष! 🎅"],
      Hindi: ["क्रिसमस की हार्दिक शुभकामनाएं! 🎄", "मेरी क्रिसमस और नया साल मुबारक हो! 🎅"],
      English: ["Merry Christmas! 🎄", "Wishing you a joyful Christmas and a Happy New Year! 🎅"],
    },
  }
  
  function loadWishes() {
    const urlParams = new URLSearchParams(window.location.search)
    const language = urlParams.get("language")
    const festival = urlParams.get("festival")
  
    const wishesContainer = document.getElementById("wishesContainer")
    wishesContainer.innerHTML = ""
  
    if (wishes[festival] && wishes[festival][language]) {
      wishes[festival][language].forEach((wish) => {
        const wishDiv = document.createElement("div")
        wishDiv.className = "wish"
  
        const wishText = document.createElement("p")
        wishText.innerText = wish
  
        const sendButton = document.createElement("button")
        sendButton.innerText = "Send"
        sendButton.onclick = () => sendWish(wish)
  
        const customizeButton = document.createElement("button")
        customizeButton.innerText = "Customize"
        customizeButton.onclick = () => customizeWish(wishText, sendButton)
  
        wishDiv.appendChild(wishText)
        wishDiv.appendChild(sendButton)
        wishDiv.appendChild(customizeButton)
        wishesContainer.appendChild(wishDiv)
      })
    } else {
      wishesContainer.innerHTML = "<p>No wishes found for the selected festival and language.</p>"
    }
  }
  
  function customizeWish(wishTextElement, sendButton) {
    const originalText = wishTextElement.innerText
    const inputField = document.createElement("input")
    inputField.type = "text"
    inputField.value = originalText
  
    wishTextElement.innerHTML = ""
    wishTextElement.appendChild(inputField)
  
    const saveButton = document.createElement("button")
    saveButton.innerText = "Save"
    saveButton.onclick = () => saveCustomizedWish(inputField, wishTextElement, sendButton)
    wishTextElement.appendChild(saveButton)
  }
  
  function saveCustomizedWish(inputField, wishTextElement, sendButton) {
    const customizedText = inputField.value.trim()
  
    if (customizedText === "") {
      alert("Wish cannot be empty.")
      return
    }
  
    wishTextElement.innerHTML = customizedText
    sendButton.onclick = () => sendWish(customizedText)
  }
  
  function sendWish(wishText) {
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(wishText)}`
    window.open(whatsappLink, "_blank")
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    loadWishes()
    initializeWhatsAppButtons()
  
    const imageWishesButton = document.getElementById("imageWishesButton")
    if (imageWishesButton) {
      imageWishesButton.addEventListener("click", () => {
        const urlParams = new URLSearchParams(window.location.search)
        const festival = urlParams.get("festival")
  
        if (festival) {
          window.location.href = `${festival.toLowerCase().replace(" ", "_")}_image.html`
        } else {
          alert("Please select a festival first.")
        }
      })
    }
  })
  
  function initializeWhatsAppButtons() {
    document.querySelectorAll(".sendToWhatsApp").forEach((button) => {
      button.addEventListener("click", function () {
        const imageUrl = this.previousElementSibling.src
        const whatsappUrl = `https://api.whatsapp.com/send?text=Check out this image: ${imageUrl}`
        window.open(whatsappUrl, "_blank")
      })
    })
  }function initializeWhatsAppButtons() {
    document.querySelectorAll(".sendToWhatsApp").forEach((button) => {
      button.addEventListener("click", async function () {
        const imageElement = this.previousElementSibling;
        const imageUrl = imageElement.src;
  
        try {
          const response = await fetch(imageUrl);
          const blob = await response.blob();
          const blobUrl = URL.createObjectURL(blob);
  
          const a = document.createElement("a");
          a.href = blobUrl;
          a.download = "festival_wish.jpg";
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
  
          const whatsappUrl = `https://api.whatsapp.com/send?text=Check out this image: ${imageUrl}`;
          setTimeout(() => {
            window.open(whatsappUrl, "_blank");
          }, 1000); // Delay to ensure the download starts first
        } catch (error) {
          console.error("Error downloading the image:", error);
          alert("Failed to download image. Please try again.");
        }
      });
    });
  }
  
  
  
