<template>
  <div>
    <Toast />

    <h5>Advanced</h5>
    <FileUpload
      class=""
      name="rowFile"
      url="/"
      :multiple="true"
      :accept="formats"
      :max-file-size="maxFileSize"
      cancel-label="Cancella"
      choose-label="Seleziona i file"
      upload-label="Upload"
      :custom-upload="true"
      @uploader="onUpload"
    >
      <template #empty>
        <div class="grid flex justify-content-start flex-wrap card-container blue-container">
          <i
            class="pi pi-cloud-upload col-12 justify-content-center align-items-center text-center"
            style="font-size: 4rem "
          />

          <p class="col-12 justify-content-center align-items-center text-center">
            Trascina i files qui per caricarli upload.
          </p>
        </div>
      </template>
    </FileUpload>
  </div>
</template>

<script>
import Toast from 'primevue/toast';
import FileUpload from 'primevue/fileupload';

export default {
  name: 'UploadData',
  components: {
    Toast,
    FileUpload,
  },
  props: {
    // eslint-disable-next-line vue/require-default-prop
    formats: {
      type: String,
      default: '.json,.csv,.xls,.xlsx',
    },
    maxFileSize: {
      type: Number,
      default: 1e8, // 100MG
    },
  },
  methods: {
    onUpload(event) {
      console.log('event', event);
      // for file in event.files do something
      // for file in files do something
      for (let file = 0; file < event.files.length; file++) {
        console.log('file', event.files[file]);
        // do something
      }
      console.log('Uploaded');
      // this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000});
    },
  },
};
</script>
