<template>
  <div class="grid">
    <div class="col-2">
      <PrimeMenu :model="items" />
    </div>

    <div class="col-10">
      <router-view v-slot="{ Component }">
        <Suspense timeout="0">
          <template #fallback>
            <div class="">
              <div class="grid-nogutter h-full flex align-items-center justify-content-center h-screen">
                <half-circle-spinner
                  :animation-duration="1000"
                  :size="60"
                  color="#ff1d5e"
                />
              </div>
            </div>
          </template>
          <template #default>
            <component
              :is="Component"
            >
              />
            </component>
          </template>
        </Suspense>
        <router-view />
      </router-view>
    </div>
  </div>
</template>

<script>
import PrimeMenu from 'primevue/menu';
import ProgressSpinner from 'primevue/progressspinner';
import { HalfCircleSpinner } from 'epic-spinners';


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Tables',
  components: {
    ProgressSpinner,
    PrimeMenu,
    HalfCircleSpinner,
  },
  data() {
    return {
      value1: 0,
      items: [
        {
          label: '👮 Polizia di Stato',

          items: [
              {
                label: 'Tipi Alloggiato',
                icon: '',
                to: '/tables/tipo_alloggiato',
              },
              {
                label: 'Tipi Documento',
                icon: '',
                to: '/tables/tipo_documento',
            },
            {
              label: 'Comuni',
              icon: '',
              to: '/tables/comuni',
            },
          ],
        },
      ],
    };
  },
  mounted() {
    this.startProgress();
  },
  methods: {
    startProgress() {
      this.interval = setInterval(() => {
        let newValue = this.value1 + Math.floor(Math.random() * 10) + 1;
        if (newValue >= 100) {
          newValue = 100;
        }
        this.value1 = newValue;
      }, 2000);
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep(.tabmenudemo-content) {
  padding: 2rem 1rem;
}
</style>
