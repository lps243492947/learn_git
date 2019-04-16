/**
 * 
 * @param {numer[]} piles 
 * @param {number} H
 * @return {number} 
 */

// function minEatingSpeed(piles, H){
//     let lo = 1
//     let hi = Math.max(...piles)
//     console.log(hi)
//     while(lo <= hi){
//         // lo的尝试
//         let m = lo
//         console.log('------', m)
//         // m 正好可以
//         if(canEatAllBananas(piles, H, m)){
//             hi = m - 1
//         }else{
//             lo++
//         }
//     }
//     return lo
// }
/**
 * 
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid
 * @return {boolean}
 */
function canEatAllBananas(piles, H, mid){
    // 一定是H小时
        let h = 0
        // 吃
        for(let pile of piles){
            h += Math.ceil(pile / mid)
    
        }
        return h <= H
    }
    // console.log(canEatAllBananas([6,9,12,7], 10, 4))
    console.log(minEatingSpeed)([3, 6, 7, 11], 8);
    