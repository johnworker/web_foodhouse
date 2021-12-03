var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'重乳麥芽蛋糕',
            imgUrl:'https://upload.cc/i1/2021/11/21/luoJiR.png',
            price:'150',
            count:'2'
            
          },
          {
            id:'2',
            itemName:'草莓戀糖蛋糕',
            imgUrl:'https://upload.cc/i1/2021/11/21/2RN5ir.png',
            price:'150',
            count:'3'
          },
          {
            id:'3',
            itemName:'莓家族蛋糕',
            imgUrl:'https://upload.cc/i1/2021/11/21/jHxpmr.png',
            price:'200',
            count:'1'
          },
          {
            id:'4',
            itemName:'巧克力戚風蛋糕',
            imgUrl:'https://upload.cc/i1/2021/11/21/OMuNtG.png',
            price:'250',
            count:'1'
          },
          {
            id:'5',
            itemName:'惡魔蛋糕',
            imgUrl:'https://upload.cc/i1/2021/11/21/oBU9vl.png',
            price:'250',
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

