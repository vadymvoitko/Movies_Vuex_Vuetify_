<template>
  <div>
    <!-- <ul v-highlight>
      <li 
        class="item" 
        v-for="(item, index) in items" 
        :key="index"
      >
        {{ item }}
      </li>
    </ul> -->

    <!-- <ul>
      <li>
        tree
        <ul>
          <li>
            names
            <ul>
              <li>
                man
                <ul>
                  <li>
                    common
                    <ul>
                      <li>
                        Max
                      </li>
                    </ul>
                  </li>
                </ul>
                <ul>
                  <li>
                    rare
                    <ul>
                      <li>
                        Apolon
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul> -->
  <tree 
    v-for="(value, key, index) in this.tree" 
    :key="index"
    :data="{key, value}"
  />
  
  </div>
</template>

<script>
import tree from './tree'
export default {
    name: 'xxx',
    data() {
      return {
        items: ['Audi', 'Mercedes', 'BMW'],
        tree: {
          names: {
            man: {
              // common: ['Max', 'Joe', 'Fill'],
              common: 'Max',
              rare: 'Apolon'
            },
            women: {
              rare: 'Shahirizada'
            }
          }
        }
      }
    },
    components: {
      tree
    },
    directives: {
      highlight: {
      bind(el, binding) {
          el.addEventListener('click', ev => {
            [...el.children].forEach(item => {
              item.classList.remove('active')
            })
            ev.target.classList.add('active')
          })
      },
       update(el, binding) {
          [...el.children].forEach(item => {
              item.classList.remove('active')
          })
        }
      }
    },
    computed: {
    },
    watch: {
    },
    created() {
      
    }
  }
</script>

<style>
  .item {
    background-color: #ebebeb;
    border: 1px solid grey;
    padding: 5px;
    list-style: none;
  }
  .item:hover {
    cursor: pointer;
    background-color: #8e924f;
  }

  .active {
    border: 4px solid rgb(87, 5, 5);
  }
</style>

