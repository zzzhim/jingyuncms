export function Queue({ autostart = false }) {
  this.list = []
  this.started = false
  this.autostart = autostart // 队列保持运行
}

Queue.prototype.push = function(fun) {
  const params = {
    done: false,
    next: async () => {
      const result = await fun()
      params.done = true

      this.next()
    }
  }

  this.list.push(params)

  if(this.autostart && !this.started) {
    this.start()
  }
}

Queue.prototype.start = function() {
  if(this.started) {
    return 
  }

  this.next()
}

Queue.prototype.next = function() {
  const find = this.list.find(item => !item.done)

  if(find) { // 执行下个队列
    this.started = true
    find.next()
  }else { // 任务全部执行完毕
    this.started = false
    this.onEnd()
  }
}

Queue.prototype.onEnd = () => {

}

// const queue = new Queue({
//   autostart: true
// })

// queue.push(function () {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       queue.push(function () {
//         return new Promise((resolve) => {
//           setTimeout(() => {
//             console.log('---------5')
//             resolve()
//           }, 5500)
//         })
//       })

//       console.log('---------1')
//       resolve()
//     }, 1000)
//   })
// })

// queue.push(function () {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('---------2')
//       resolve()
//     }, 15500)
//   })
// })

// queue.push(function () {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('---------3')
//       resolve()
//     }, 500)
//   })
// })


// queue.push(function () {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log('---------4')
//       resolve()
//     }, 5000)
//   })
// })