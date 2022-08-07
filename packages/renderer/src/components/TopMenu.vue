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
          // items:[
          //   {
          //     label: 'Alloggiati',
          //     icon: 'pi pi-fw pi-user-plus',
          //     to: '/alloggiati',
          //   },
          //   {
          //     label:'Clienti',
          //     icon:'pi pi-fw pi-user',
          //     to: '/clienti',
          //   },
          //   {
          //     label:'PoliziadiStato',
          //     icon:'pi pi-fw pi-copy',
          //     to: '/poliziadistato',
          //   },
          // ],
        },
        // {
        //   label:'Carica File',
        //   icon:'pi pi-fw pi-upload',
        //   items:[
        //     {
        //       label:'Schedina Polizia di Stato',
        //       icon:'pi pi-fw pi-file',
        //       to:'/uploads',
        //     },
        //     {
        //       label:'Excel / CSV',
        //       icon:'pi pi-fw pi-file-excel',
        //     },
        //   ],
        // },
      ],
      breadcrumbHome: {icon: 'pi pi-home', to: '/'},
      breadcrumbItems: [
        {label:'Computer'},
        {label:'Notebook'},
        {label:'Accessories'},
        {label:'Backpacks'},
        {label:'Item'},
      ],
      nestedRouteItems: [
        {
          label: 'Personal',
          to: '/menu',
        },
        {
          label: 'Seat',
          to: '/menu/seat',
        },
        {
          label: 'Payment',
          to: '/menu/payment',
        },
        {
          label: 'Confirmation',
          to: '/menu/confirmation',
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

