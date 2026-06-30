// =====================================
// JARVIS AI
// =====================================

const GEMINI_API_KEY="AIzaSyDuOBz49OSv13cucQ6ppI3HJtaLXfynVN";

const GEMINI_URL=
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

async function askJarvis(message){

    console.log("AI RECEIVED:",message);

    const text=message.toLowerCase().trim();

    // ---------- WEBSITE COMMANDS ----------

    if(text.includes("project")){

        speak("Opening Projects.");

        document.getElementById("projects").scrollIntoView({
            behavior:"smooth"
        });

        return;

    }

    if(text.includes("about")){

        speak("Opening About.");

        document.getElementById("about").scrollIntoView({
            behavior:"smooth"
        });

        return;

    }

    if(text.includes("skill")){

        speak("Opening Skills.");

        document.getElementById("skills").scrollIntoView({
            behavior:"smooth"
        });

        return;

    }

    if(text.includes("education")){

        speak("Opening Education.");

        document.getElementById("education").scrollIntoView({
            behavior:"smooth"
        });

        return;

    }

    if(text.includes("contact")){

        speak("Opening Contact.");

        document.getElementById("contact").scrollIntoView({
            behavior:"smooth"
        });

        return;

    }

    if(text.includes("home")){

        speak("Going Home.");

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

        return;

    }

    // ---------- GEMINI ----------

    try{

        const response=await fetch(GEMINI_URL,{

            method:"POST",

            headers:{
                "Content-Type":"application/json"
            },

            body:JSON.stringify({

                contents:[{

                    parts:[{

                        text:message

                    }]

                }]

            })

        });

        const data=await response.json();

        const reply=data.candidates[0].content.parts[0].text;

        speak(reply);

    }

    catch(e){

        console.log(e);

        speak("Sorry, jarvish is unavailable.");

    }

}