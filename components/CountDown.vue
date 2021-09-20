<template>
  <div id="countdown" class="countdown">
    <ul>
      <li><span id="days"></span>Days</li>
      <li><span id="hours"></span>Hrs</li>
      <li><span id="minutes"></span>Min</li>
      <li><span id="seconds"></span>Sec</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  mounted() {
    this.countTimer()
  },
  methods: {
    countTimer() {
      const second = 1000
      const minute = second * 60
      const hour = minute * 60
      const day = hour * 24

      const salesEnd = 'Sept 25 , 2021 00:00:00'
      const countDown = new Date(salesEnd).getTime()

      const x = setInterval(function () {
        const now = new Date().getTime()
        const distance = countDown - now

        document.getElementById('days').innerText = Math.floor(distance / day)
        document.getElementById('hours').innerText = Math.floor(
          (distance % day) / hour
        )
        document.getElementById('minutes').innerText = Math.floor(
          (distance % hour) / minute
        )
        document.getElementById('seconds').innerText = Math.floor(
          (distance % minute) / second
        )

        if (distance < 0) {
          // const headline = document.getElementById('headline')
          const countdown = document.getElementById('countdown')
          // const content = document.getElementById('content')

          // headline.innerText = 'Daily Sales just ended!'
          countdown.style.display = 'none'
          // content.style.display = 'block'

          clearInterval(x)
        }
      }, 0)
    },
  },
}
</script>

<style lang="scss" scoped>
.countdown {
  li {
    display: inline-block;
    font-size: 11px;
    list-style-type: none;
    padding: 5px;
    text-transform: uppercase;
    text-align: center;
    background: var(--sec_yellow);
    width: 40px;
    border-radius: 3px;
  }

  span {
    display: block;
    font-size: 1rem;
    font-weight: bold;
  }
}
</style>
