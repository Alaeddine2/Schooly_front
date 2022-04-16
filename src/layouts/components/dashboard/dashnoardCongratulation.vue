<template>
  <div
  v-if="data">
  <b-card
    text-variant="center"
    class="card card-congratulations"
    style="width: 250px;height: 368px;"
  >
    <!--  -->
    <b-img
      :src="require('@/assets/images/elements/decore-left.png')"
      class="congratulations-img-left"
    />
    <b-img
      :src="require('@/assets/images/elements/decore-right.png')"
      class="congratulations-img-right"
    />
      <b-avatar
        variant="primary"
        size="100"
        class="shadow mb-2"
      >
      <b-img
        :src="require('@/assets/images/avatars/6.png')"
        sizes="80"
        width="120"
        height="120"
      />
      </b-avatar>
      <h1 class="mb-1 mt-50 text-white" style="margin-left: 10px; margin-right:10px">
        {{data.name}} {{data.surname}}
      </h1>
      <div class="d-flex">
        <b-card-text class="m-auto w-75">
          Class: <strong>{{data.class}}</strong>
        </b-card-text>
        <b-card-text class="m-auto w-75">
          Level: <strong>{{data.lvl}}</strong>
        </b-card-text>
      </div>
      <div class="d-flex" style="margin-top: 10px">
        <b-card-text class="m-auto w-75">
          Averge: <strong>{{data.average}}</strong>
        </b-card-text>
        <b-card-text class="m-auto w-75">
          rank: <strong>{{data.rank}}</strong>
        </b-card-text>
      </div>
      <div style="margin-top: 25px">
        <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
          >
            Vist the details
          </b-button>
      </div>
      </b-card>
    </div>

</template>

<script>
import {
  BCard, BImg, BAvatar, BCardText,BButton,BRow
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BAvatar,
    BImg,
    BCardText,
    BButton,
    BRow
  },
  props: {
    data: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
