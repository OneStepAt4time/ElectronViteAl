<template>
  <div style="height: calc(100vh - 120px)">
    <datatable
      v-model:filters="filters1"
      class="p-datatable-sm p-datatable-customers"
      responsive-layout="scroll"
      :auto-layout="true"
      scrollable
      scroll-height="flex"
      striped-rows
      :virtual-scroller-options="{ itemSize: 50 }"
      :value="data"
      data-key="codice"
    >
      <template #header>
        <div class="flex justify-content-between">
          <PrimeButton
            type="button"
            icon="pi pi-filter-slash"
            label="Pulisci filtri"
            class="p-button-outlined"
            @click="clearFilters()"
          />
          <span class="p-input-icon-left">
            <i class="pi pi-search" />
            <InputText
              v-model="filters1['global'].value"
              placeholder="Cerca..."
            />
          </span>
        </div>
      </template>
      <template #empty>
        Nessun risultato trovato
      </template>
      <template #loading>
        Caricamento...
      </template>



      <column
        field="descrizione"
        header="Comune"
        :sortable="true"
      >
        <template #filter="{filterModel,filterCallback}">
          <InputText
            v-model="filterModel.value"
            type="text"
            class="p-column-filter"
            :placeholder="`Search by name - ${filterModel.matchMode}`"
            @keydown.enter="filterCallback()"
          />
        </template>
      </column>

      <column
        field="desc_provincia"
        header="Provincia"
        :sortable="true"
      />
      <column
        field="codice"
        header="Codice"
        :sortable="true"
      />
      <column
        header="Data Fine validita'"
        filter-field="date"
        data-type="date"
        field="data_fine_validita"
        style="min-width:10rem"
        :sortable="true"
      />
    </datatable>
  </div>
</template>

<script>
import datatable from 'primevue/datatable';
import column from 'primevue/column';
import InputText from 'primevue/inputtext';
import PrimeButton from 'primevue/button';
import {FilterMatchMode} from 'primevue/api';

import {getComune} from '#preload';
import {ref} from 'vue';

export default {
  name: 'TableComuni',
  components: {
    datatable,
    column,
    InputText,
    PrimeButton,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    tableName: String,
  },
  async setup() {

    await new Promise((r) => setTimeout(r, 2000));

    let data = ref([]);
    try {
      data = ref(await getComune());
    } catch (e) {
      console.log(e);
    }
    return {
      data,
    };
  },
  data: () => ({
    filters1: null,
  }),
  created() {
    console.log('created');
    this.initFilters1();
  },
  methods: {
    formatDate(value) {
      if (value) {
        return value.toLocaleDateString('it-IT', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        });
      } else {
        return '';
      }
    },
    clearFilters() {
      this.initFilters1();
    },
    initFilters1() {
      this.filters1 = {
        'global': {value: null, matchMode: FilterMatchMode.CONTAINS},
        // 'comune': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.CONTAINS}]},
        // 'provincia': {operator: FilterOperator.OR, constraints: [{value: null, matchMode: FilterMatchMode.CONTAINS}]},
      };
    },
  },
};
</script>

<style scoped>

</style>
w
