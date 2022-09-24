import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';
 
const Twitch = () => {
  return (
    <div>
      <TwitchEmbed
        channel="blockchainbingoballs"
        id="blockchainbingoballs"
        theme="dark"
        muted
        onVideoPause={() => console.log(':(')}
        withChat = {false}
        width='100%'
        height='600px'
      />
    </div>
  );
}

export default Twitch;