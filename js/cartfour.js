var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'大波露巧克力',
            imgUrl:'https://upload.cc/i1/2021/12/05/IdLNS2.png',
            price:'60',
            count:'2'
            
          },
          {
            id:'2',
            itemName:'草莓巧克力',
            imgUrl:'https://upload.cc/i1/2021/12/05/J2M4dk.png',
            price:'60',
            count:'3'
          },
          {
            id:'3',
            itemName:'濃情巧克力',
            imgUrl:'https://upload.cc/i1/2021/12/05/Xfp6Dx.png',
            price:'35',
            count:'1'
          },
          {
            id:'4',
            itemName:'柔情巧克力',
            imgUrl:'https://upload.cc/i1/2021/12/05/PBRaDE.png',
            price:'50',
            count:'1'
          },
          {
            id:'5',
            itemName:'歐貝拉巧克力',
            imgUrl:'https://upload.cc/i1/2021/12/05/tNWDs8.png',
            price:'150',
            count:'1'
          },

    ]
    },
    methods:{
        handlePlus: function(item){
            item.count++;
        },
        handleSub: function(item){
            if(item.count>1){
            item.count--;                
            }
        },
        handledelete: function(index){
            console.log(this);
            this.itemList.splice(index,1);
        }
    },
    computed:{

    }
})

