import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: { 
        iconfont: 'mdi'
    },
    theme: {
        themes: {
            light: {
            primary: '#10092e',
            primary1: '#10092e',
            primary2: '#e4e7ed',
            secondary1: '#C84A1F',
            secondary2: '#E47650',
            secondary3: '#EB9B7E',
            secondary4: '#5F605E',
            secondary5: '#E1E1E2',
            secondary6: '#707070',
            myone:'B5B5B8'
            },
        },
    },
});
