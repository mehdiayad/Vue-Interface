import userStore from '../store/userStore'

var listener = window.addEventListener('storage', function(event){
    if (event.key == 'event-logout') {
        console.log('logout event')
        userStore.commit('logout') //TODO FIX INFINITE VUEX DATA UPDATING
    }
    if (event.key == 'event-login') { 
        console.log('login event')
        userStore.commit('login') //TODO FIX INFINITE VUEX DATA UPDATING
    }
});

export default listener