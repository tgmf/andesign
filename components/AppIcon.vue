<template>
  <svg id="_3132568615072" xmlns="http://www.w3.org/2000/svg" 
    :height="height"
    :width="width"
    viewBox="0 0 151 40.174" role="img" aria-label="logo-alt">
  <title id="logo-alt">{{ brand }}</title>
  <path id="Path_1" data-name="Path 1" d="M94.5,4.2,92.465,2.161l2.949-.91ZM93.769,0h-.163a2.977,2.977,0,0,0-2.025,5.082A2.984,2.984,0,0,0,95.808.87,2.95,2.95,0,0,0,93.783,0Z" transform="translate(32.553 11.067)" :fill="fill1"/>
  <path id="Path_2" data-name="Path 2" d="M21.892,24.458h3.832V17.434h6.917v7.024h3.832V7.763H32.641v6.192H25.724V7.763H21.892ZM42.479,7.763v6.6a9.993,9.993,0,0,1-.679,4.419,3.65,3.65,0,0,1-3.085,2.2V29.2h3.533v-4.76H53.907V29.2H57.44V20.98H54.954V7.763H42.465ZM51.135,20.98H44.218c.829-.641,1.957-2.032,1.957-5.142v-4.61h4.96v9.738ZM59.37,7.763V25.222L70.5,15.265v9.193h3.832V6.781L63.2,16.738V7.777H59.356ZM.109,1.83C1.372,1,3.275.03,7.107.03a11.773,11.773,0,0,1,8.452,3.192,12.573,12.573,0,0,1,3.587,9.37,12.522,12.522,0,0,1-3.587,9.261A11.778,11.778,0,0,1,7,25.222a12.676,12.676,0,0,1-6.89-1.828L0,23.326V18.375l.394.355a9.177,9.177,0,0,0,6.332,2.619,8.307,8.307,0,0,0,6.224-2.441,7.908,7.908,0,0,0,1.984-4.651h-7.5V10.382h7.379A8.544,8.544,0,0,0,12.76,6.1,7.643,7.643,0,0,0,6.985,3.9,9.721,9.721,0,0,0,.408,6.495l-.394.341V1.9L.122,1.83Z" transform="translate(0 10.97)" :fill="fill2" fill-rule="evenodd"/>
  <path id="Path_3" data-name="Path 3" d="M57.836,3.889A11.482,11.482,0,0,1,66.452,0a9.344,9.344,0,0,1,5.911,1.76A5.373,5.373,0,0,1,74.619,6.4a5.6,5.6,0,0,1-2.854,4.954,6.136,6.136,0,0,1,4.484,6.114,6.639,6.639,0,0,1-3.506,6.114,12.714,12.714,0,0,1-6.292,1.638c-5,0-8.181-2.265-10.083-5.882l-.109-.2L60.078,17.3l.109.246c1.576,3.589,5.286,3.78,6.6,3.78a9.378,9.378,0,0,0,3.71-.805,3.109,3.109,0,0,0,1.7-2.893c0-3.48-3.982-3.767-6.373-3.767H63.992V9.99h1.834c2.663,0,4.96-1.174,4.96-3.234a2.314,2.314,0,0,0-.815-1.9,5.891,5.891,0,0,0-3.479-.969A7.413,7.413,0,0,0,60.8,6.373l-.177.218L57.673,4.08l.163-.177Z" transform="translate(20.191 10.959)" :fill="fill1"/>
  <path id="Path_4" data-name="Path 4" d="M111.152,5.67v6.169h-6.93V5.67H100.39V22.3h3.832v-7h6.93v7h3.818V5.67Z" transform="translate(36.029 13.06)" :fill="fill1"/>
  <path id="Path_5" data-name="Path 5" d="M87.01,5.932V23.326l11.129-9.906v9.145h3.832V4.94L90.842,14.86V5.932Z" transform="translate(31.227 12.839)" :fill="fill1"/>
  <path id="Path_6" data-name="Path 6" d="M80.833,19.486c-2.976,0-4.661-2.487-4.661-5.3,0-2.976,1.848-5.381,4.661-5.381,2.405,0,4.661,1.767,4.661,5.34,0,3.044-1.726,5.34-4.661,5.34Zm4.444-13.7V7.745a5.935,5.935,0,0,0-5-2.405c-5.232,0-8.085,4.294-8.085,8.765s2.976,8.846,8.045,8.846A6.336,6.336,0,0,0,85.276,20.7v1.726h3.832V5.788Z" transform="translate(25.908 12.983)" :fill="fill1"/>
</svg>
</template>

<script>
export default {
  name: "AppIcon",
  props: {
    height: {
      type: String,
      default: "39.174"
    },
    width: {
      type: String,
      default: "151"
    },
    brand: {
      type: String,
      default: 'ЭндиЗайн'
    },
    fill1: {
      type: String,
      default: '#d97535'
    },
    fill2: {
      type: String,
      default: '#5f6a75'
    }
  }
};
</script>

<style lang="scss" scoped>
  svg {
    vertical-align: middle;
    margin-right: .5em;
    margin-bottom: .5em;
    #Path_1 {
      transition: transform .2s cubic-bezier(0.25, 0.1, 0.55, 2.3);
    }
    &:hover #Path_1 {
      transform: translate(32.553px, 3px);
    }
  }

  @media only screen and (max-width: 600px) {
    svg {
      width: 91px;
    }
  }
</style>