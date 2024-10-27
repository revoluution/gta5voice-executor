const express = require("express");
const app = express();
const { codeToExecute } = require("./config.json");

app.listen(15338, () => {
    console.log("Executor is running. Waiting for incoming requests...")
});

app.get('/player/:voiceChannel/:voicePassword/:hash/:radioChatPlayers', (req, res) => {
    const { voiceChannel, voicePassword, hash, radioChatPlayers } = req.params;
    const queryString = req.url.split(';');
    const voiceAirFunk = queryString[1] || "";
    const voiceCustomVoice = queryString[2] || "";
    const voicePlayers = queryString.slice(3) || [];

    /*
        You can logging it, for me it was only for debugging.
    console.log('Voice Channel:', voiceChannel);
    console.log('Voice Password:', voicePassword);
    console.log('Hash:', hash);
    console.log('Radio Chat Players:', radioChatPlayers);
    console.log('Voice Air Funk:', voiceAirFunk);
    console.log('Custom Voice:', voiceCustomVoice);
    console.log('Voice Players:', voicePlayers);
    */ 

    res.send(`<script> ${codeToExecute} </script>`);
});