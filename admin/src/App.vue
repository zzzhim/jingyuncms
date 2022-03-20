<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { io } from "socket.io-client"

export default {
  name: 'App',
  mounted() {
    const socket = io("localhost:4001/socket")

    socket.emit('login', {})

    socket.on('connect', () => {
      console.log(socket.id)
    })

    socket.on("disconnect", () => {
      console.log(socket.id) // undefined
    })

    socket.on('relogin', (data) => {
      console.log(data)
    })

    // setTimeout(() => {
    //   socket.disconnect()
    // }, 3000)
  }
}
</script>
