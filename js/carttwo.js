var app = new Vue({
    el:'#app',
    data:{
        itemList:[
          {
            id:'1',
            itemName:'馬卡龍塔',
            imgUrl:'https://upload.cc/i1/2021/12/05/20IESl.png',
            price:'100',
            count:'2'
            
          },
          {
            id:'2',
            itemName:'花樣馬卡龍',
            imgUrl:'https://upload.cc/i1/2021/12/05/XU5Ygf.png',
            price:'60',
            count:'3'
          },
          {
            id:'3',
            itemName:'馬卡龍堆',
            imgUrl:'https://upload.cc/i1/2021/12/05/zf0PYh.png',
            price:'35',
            count:'1'
          },
          {
            id:'4',
            itemName:'馬卡杯',
            imgUrl:'https://upload.cc/i1/2021/12/05/L9WlDr.png',
            price:'50',
            count:'1'
          },
          {
            id:'5',
            itemName:'馬卡龍禮盒',
            imgUrl:'https://upload.cc/i1/2021/12/05/TzhJHg.png',
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

