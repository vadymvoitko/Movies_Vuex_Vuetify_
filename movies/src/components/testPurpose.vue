<template>
  <div id="app">
    <table>
      <tbody>
        <tr v-for="(el, index) in inputArray" :key="index">
          <td v-for="(subEl, subIndex) in el" :key="subIndex" class="tableCell">
            <div>
              {{ subEl }}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="start(currentX, currentY)">start</button>
    <button @click="stop = true" @contextmenu="stop = false">stop</button>
  </div>
</template>

<script>
  import tree from './tree'
  export default {
    name: 'xxx',
    data() {
      return {
        current: undefined,
        stop: false,
        prev: '',
        newX: '',
        newY: '',
        currentX: '',
        currentY: '',
        arrows: {},
        positions: {
          '<': 'L',
          '^': 'T',
          '>': 'R',
          'v': 'B'
        },
        positionsBack: {
          'L': '<',
          'T': '^',
          'R': '>',
          'B': 'v'
        },
        positionsArr: [
          'L',
          'T',
          'R',
          'B'
        ],
        exit: [],
        inputArray: [
          "#########################################",
          "#<    #       #     #         # #   #   #",
          "##### # ##### # ### # # ##### # # # ### #",
          "# #   #   #   #   #   # #     #   #   # #",
          "# # # ### # ########### # ####### # # # #",
          "#   #   # # #       #   # #   #   # #   #",
          "####### # # # ##### # ### # # # #########",
          "#   #     # #     # #   #   # # #       #",
          "# # ####### ### ### ##### ### # ####### #",
          "# #             #   #     #   #   #   # #",
          "# ############### ### ##### ##### # # # #",
          "#               #     #   #   #   # #   #",
          "##### ####### # ######### # # # ### #####",
          "#   # #   #   # #         # # # #       #",
          "# # # # # # ### # # ####### # # ### ### #",
          "# # #   # # #     #   #     # #     #   #",
          "# # ##### # # ####### # ##### ####### # #",
          "# #     # # # #   # # #     # #       # #",
          "# ##### ### # ### # # ##### # # ### ### #",
          "#     #     #     #   #     #   #   #    ",
          "#########################################"
        ],
        result: [],
        currentRoute: [],
        helper: {
          T: [-1, 0],
          R: [0, 1],
          B: [1, 0],
          L: [0, -1]
        }
      }
    },
    methods: {
      start(currX, currY, prevX, prevY) {
        this.positionsArr.forEach(item => {
          this.newX = +currX + +this.helper[item][0];
          this.newY = +currY + +this.helper[item][1];
          const nextSign = this.inputArray[this.newX][this.newY];
          this.prev = this.arrows[prevX + ':' + prevY + '-' + currX + ':' + currY];
          if (nextSign != '#' && !(this.prev && this.prev[0] == this.newX && this.prev[1] == this.newY)) {
            this.makeMove(this.newX, this.newY, item, currX, currY)
          }
        })
      },
      makeMove(newX, newY, current, currX, currY) {
        const Iarr = [...this.inputArray]
        let arr1 = Iarr[newX]
        const arr2 = Iarr[currX]
        if (arr2[currY] != ' ') {
          Iarr[currX] = arr2.slice(0, currY) + ' ' + arr2.slice(currY + 1);
          arr1 = Iarr[newX]
        }
        Iarr[newX] = arr1.slice(0, newY) + this.positionsBack[current] + arr1.slice(newY + 1);
        this.inputArray = Iarr;
        this.arrows[currX + ':' + currY + '-' + newX + ':' + newY] = [currX, currY]
        if (newX == this.exit[0] && newY == this.exit[1]) {
          alert('free')
          return false;
        } else {
          setTimeout(() => {
            return !this.stop && this.start(newX, newY, currX, currY)
          }, 100)
        }
      }
    },
    created() {
      this.inputArray.forEach((elem, ind) => {
        elem.split('').forEach((subElem, subInd) => {
          if (
            (
              ind === 0 ||
              ind == this.inputArray.length - 1 ||
              subInd === 0 ||
              subInd === elem.length - 1
            ) &&
            subElem == ' '
          ) {
            this.exit = [ind, subInd]
          }
  
          if (this.positions[subElem]) {
            this.current = this.positions[subElem];
            this.currentX = ind;
            this.currentY = subInd;
            this.currentSign = subElem;
          }
        })
      })
      if (!this.current) return []
    }
  }
</script>

<style>
  .all {
    border: 1px solid black;
  }
  
  .L {
    border-left: none !important;
    border-radius: 0 50% 50% 0;
    font-size: large;
  }
  
  .T {
    border-top: none !important;
    border-radius: 0 0 50% 50%;
    font-size: large;
  }
  
  .R {
    border-right: none !important;
    border-radius: 50% 0 0 50%;
    font-size: large;
  }
  
  .B {
    border-bottom: none !important;
    border-radius: 50% 50% 0 0;
    font-size: large;
  }
  
  .tableCell {
    width: 20px;
    height: 20px;
  }
</style>

