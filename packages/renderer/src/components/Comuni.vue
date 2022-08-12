<template>
  <hot-table
    :settings="settings"
    :data="data"
  />
</template>

<script>
import {getComune} from '#preload';
import {ref} from 'vue';
import { HotTable } from '@handsontable/vue3';
import { registerLanguageDictionary, itIT } from 'handsontable/i18n';


import { registerAllModules } from 'handsontable/registry';

// register Handsontable's modules
registerAllModules();

export default {
  name: 'TableComuni',
  components: {
    HotTable,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    tableName: String,
  },
  async setup() {

    await new Promise((r) => setTimeout(r, 250));
    registerLanguageDictionary(itIT);
    let data = ref([]);
    try {
      data = ref(await getComune());
    } catch (e) {
      console.log(e);
    }
    const report =  ref({
      dataSource: {
        data: data.value.slice(1,10),
      },
    });
    return {
      data,
      report,
      settings: {
        language: itIT.languageCode,
        locale: 'it-IT',
        colWidths: 100,
        width: '100%',
        height: '90vh',
        filters: true,
        dropdownMenu: true,
        showRowsSelection: true,
        showContextMenu: true,
        rowHeaders: true,
        colHeaders: true,
        manualColumnResize: true,
        manualRowResize: true,
        resizeColumns: true,
        columnSorting: true,
        contextMenu: true,
        hiddenColumns: true,
        manualColumnMove: true,
        copyPaste: true,
        search: true,
        className: 'htCenter htMiddle',
        // autoColumnSize: {
        //   // keep 40% of columns in sync (the rest of columns: async)
        //   syncLimit: '40%',
        //   // when calculating column widths, use column headers
        //   useHeaders: true,
        //   // when calculating column widths, use 10 samples of the same length
        //   samplingRatio: 10000,
        //   // when calculating column widths, allow duplicate samples
        //   allowSampleDuplicates: true,
        // },
        autoresize: true,
        // comments: true,
        stretchH: 'all',
        undo: true,
        redo: true,
        columns: [
          {
            title: 'Codice Comune',
            data: 'codice',
            type: 'numeric',
            readOnly: true,
            alignment: 'center',
          },
          {
            title: 'Comune',
            data: 'descrizione',
            type: 'text',
            readOnly: true,
          },
          {
            title: 'Provincia',
            data: 'desc_provincia',
            type: 'text',
            readOnly: true,
          },
          {
            title: 'Data Fine Validita',
            data: 'data_fine_validita',
            type: 'date',
            dateFormat: 'DD-MM-YYYY',
            readOnly: true,
          },
        ],
        licenseKey: 'non-commercial-and-evaluation',
      },
    };
  },
};
</script>

<style src="handsontable/dist/handsontable.full.css"></style>

