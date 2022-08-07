<template>
  <div>
    <datatable
      class="p-datatable-sm"
      responsive-layout="scroll"
      :auto-layout="true"
      scrollable
      scroll-height="90vh"
      striped-rows
      :virtual-scroller-options="{ itemSize: 50 }"
      :value="data"
    >
      <column
        field="descrizione"
        header="Tipo Documento"
      />
      <column
        field="codice"
        header="Codice"
      />
    </datatable>
  </div>
</template>

<script>
import datatable from 'primevue/datatable';
import column from 'primevue/column';

import {getDocumento} from '#preload';
import {ref} from 'vue';

export default {
  name: 'TipoDocumento',
  components: {
    datatable,
    column,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    tableName: String,
  },
  async setup() {

    await new Promise((r) => setTimeout(r, 2000));

    let data = ref([]);
    try {
      data = ref(await getDocumento());
    } catch (e) {
      console.log(e);
    }
    console.log(data.value);
    const columns = [
      {
        field: 'id',
        header: 'ID',
        sortable: true,
      },
      {
        field: 'nome',
        header: 'Nome',
        sortable: true,
      },
      {
        field: 'descrizione',
        header: 'Descrizione',
        sortable: true,
      },
    ];
    const options = {
      paginator: true,
      pageLinks: 5,
      pageSize: 10,
      sortName: 'nome',
      sortOrder: 'asc',
      responsive: 'stretch',
      style: {
        table: {
          maxWidth: '100%',
        },
      },
    };
    return {
      data,
      columns,
      options,
    };
  },
};
</script>

<style scoped>

</style>
