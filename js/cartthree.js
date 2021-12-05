var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'夢幻甜甜圈',
            imgUrl:'https://upload.cc/i1/2021/12/05/RT5EAc.png',
            price:'30',
            count:'2'
            
          },
          {
            id:'2',
            itemName:'椪糖甜甜圈',
            imgUrl:'https://upload.cc/i1/2021/12/05/6AwZoK.png',
            price:'30',
            count:'3'
          },
          {
            id:'3',
            itemName:'懸絲巧克力甜甜圈',
            imgUrl:'https://upload.cc/i1/2021/12/05/qa7N9I.png',
            price:'30',
            count:'1'
          },
          {
            id:'4',
            itemName:'森林甜甜圈',
            imgUrl:'https://upload.cc/i1/2021/12/05/niX2WP.png',
            price:'30',
            count:'1'
          },
          {
            id:'5',
            itemName:'繽紛巧克力甜甜圈',
            imgUrl:'https://upload.cc/i1/2021/12/05/8zoXN7.png',
            price:'30',
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

