/* 
   條件: 題目 2 ~ 7 的操作都不能修改到 題目 1 建立的陣列
*/

// 1. 建立一個長度 50，數值介於 40~100 的陣列 (亂數產生) (Array)
const arr = []
for(let i = 0; i<50; i++){
    let rand = 40 + Math.floor(Math.random()*60 + 1);
    arr.push(rand);
}

// 2. 篩選出大於 60 的結果
let arrFilter = [];
arr.map(x=>{
    if(x>60){
        arrFilter.push(x);
    }; 
});

// 3. 找出最大值
let arrMax = Math.max(...arr);

// 4. 計算全部數值的合計數
let reducer = (a,c)=>a + c;
let arrSum = arr.reduce(reducer);

// 5. 找出最小值
let arrMin = Math.min(...arr);

// 6. 全部開根號並乘上 10
let arrMorph = arr.map(x=> Math.sqrt(x) *10);

// 7. 請依數值大小排序，由大而小
let arrSort = arr.sort((a,b)=>a-b).reverse();

