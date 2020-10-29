export default {
    name: "NotificationBanner",
    methods:{
        bannerClicked(id){
            this.$router.push({name:'order',params:{id: id}})
        }
    }
};
