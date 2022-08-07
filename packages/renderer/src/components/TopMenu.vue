<template>
  <div
    class="grid p-fluid"
  >
    <div class="col-12">
      <div class="card card-w-title">
        <Menubar
          :model="nestedMenuitems"
        >
          <template #end>
            <span class="p-input-icon-left">
              <router-link
                to="/home"
                icon="pi pi-home"
                class="p-button-text"
              >Home</router-link>
            </span>
          </template>
        </Menubar>
      </div>
    </div>
  </div>
</template>

<script>
import Menubar from 'primevue/menubar';


export default {
  name: 'TopMenu',
  components: {
    Menubar,
  },
  data() {
    return {
      nestedMenuitems: [
        {
          label:'Tabelle',
          icon:'pi pi-fw pi-database',
          tooltip:'Tabelle',
          to: '/tables',
        },
        {
          label:'Inserimento',
          icon:'pi pi-fw pi-users',
          tooltip:'Inserimento',
          to: '/insert',
        },
      ],
    };
  },
  methods: {
    toggleMenu(event) {
      this.$refs.menu.toggle(event);
    },
    onContextRightClick(event) {
      this.$refs.contextMenu.show(event);
    },
  },
};
</script>

