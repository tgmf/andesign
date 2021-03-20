<template>
 <form id="search-form">
   <input type="search" name="search" @focus="$emit('input-focus')" @blur="$emit('input-blur')" :style="style" v-model="searchLine" >
   <button type="submit" @click="search">
      <svg xmlns="http://www.w3.org/2000/svg" width="17.395" height="17.399" viewBox="0 0 17.395 17.399">
        <path id="Shape" d="M16.65,17.4a.747.747,0,0,1-.531-.219l-5.155-5.156a6.75,6.75,0,1,1,1.06-1.06l5.156,5.155a.75.75,0,0,1-.531,1.28ZM6.75,1.5a5.25,5.25,0,1,0,0,10.5,5.217,5.217,0,0,0,3.708-1.533l0,0,0,0A5.25,5.25,0,0,0,6.75,1.5Z" transform="translate(-0.004 0)" fill="#5f6a75"/>
      </svg>
   </button>
 </form>
</template>

<script>
export default {
  props: {
    borderColor: {
      type: String,
      default: "transparent"
    },
    fillColor: {
      type: String,
      default: "#fff"
    },
  },
  data () {
    return {
      searchLine: ''
    }
  },
  computed: {
    style () {
      return 'border-color: ' + this.borderColor + '!important; background-color: ' + this.fillColor + '!important;';
    }
  },
  methods: {
    search () {
      console.log(this.searchLine)
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  vertical-align: middle;

  input {
    border-radius: 7px;
    border: 2px solid;
    height: 1.875em;
    width: 13.375em;

    &:focus {
      border-color:inherit;
    }
  }

  button {
    position: absolute;
    right: .3em;
    padding: .2em;
  }
}
</style>