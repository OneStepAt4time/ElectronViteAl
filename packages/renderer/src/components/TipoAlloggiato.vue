<template>
  <datatable
    :value="data"
    striped-rows
    responsive-layout="scroll"
  >
    <column
      field="descrizione"
      header="Tipo Alloggiato"
    />
    <column
      field="codice"
      header="Codice"
    />
  </datatable>
</template>

<script>
import datatable from 'primevue/datatable';
import column from 'primevue/column';

import {getTipoAlloggiato} from '#preload';
import {ref} from 'vue';

export default {
  name: 'TipoAlloggiato',
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
      data = ref(await getTipoAlloggiato());
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

