import React from 'react'
import { ChatEngine } from 'react-chat-engine'

export default function ChatsPage(props) {
   console.log(props);
  return (
    <ChatEngine
      publicKey={'ec20471a-3c02-48ce-ba54-710a456247b1'}
      userName={props.user.username}
      userSecret={props.user.secret}
      style={{height:"100vh"}}
    />
  )
}
