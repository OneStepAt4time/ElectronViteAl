<template>
  <div class="grid col-12">
    <hot-table
      id="MyTable"
      ref="myTable"
      :settings="settings"
      :data="data"
      title="My Table"
    />
  </div>
</template>

<script>
import {getTipoAlloggiato} from '#preload';
import { HotTable } from '@handsontable/vue3';
import { registerAllModules } from 'handsontable/registry';
import { registerLanguageDictionary, itIT } from 'handsontable/i18n';
import { ref } from 'vue';


export default {
  el: '#example',
  name: 'TipoAlloggiato',
  components: {
    HotTable,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    tableName: String,
  },
  async setup() {

    await new Promise((r) => setTimeout(r, 250));
    registerAllModules();
    registerLanguageDictionary(itIT);
    let data = ref([]);
    try {
      data = ref(await getTipoAlloggiato());
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
        title: 'Tipo Alloggiato',
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
        afterPlugins: [
          'filters',
          'dropdownMenu',
          'showRowsSelection',
          'showContextMenu',
          'rowHeaders',
          'colHeaders',
          'manualColumnResize',
          'manualRowResize',
          'resizeColumns',
          'columnSorting',
          'contextMenu',
          'hiddenColumns',
          'manualColumnMove',
          'copyPaste',
        ],
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
            title: 'Codice Tipo Alloggiato',
            data: 'codice',
            type: 'numeric',
            readOnly: true,
            alignment: 'center',
          },
          {
            title: 'Tipo Alloggiato',
            data: 'descrizione',
            type: 'text',
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

