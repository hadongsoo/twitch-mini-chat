chrome.browserAction.onClicked.addListener(function(tab) {
    
    const streamerName = tab.title.split(' - ')[0];
    const streamerID = tab.url.split('/')[3];
    
    const mywin = window.open("https://www.twitch.tv/popout/"+streamerID+"/chat?popout=","mini","width=400,height=170,left=600");

    mywin.resizeTo(400, 170);                             // Resizes the new window
    mywin.focus();                                        // Sets focus to the new window

});
