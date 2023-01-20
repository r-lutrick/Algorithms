/* 
  Given an array of objects / dictionaries to represent new inventory,
  and an array of objects / dictionaries to represent current inventory,
  update the quantities of the current inventory
  
  if the item doesn't exist in current inventory, add it to the inventory
  return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },
];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },
];



const newInv2 = [];
const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];
const expected2 = [{ name: "Peanut Butter", quantity: 20 }];



const newInv3 = [{ name: "Royal Jelly", quantity: 20 }];
const currInv3 = [];
const expected3 = [{ name: "Peanut Butter", quantity: 20 }];

/**
 * @typedef {Object} Inventory
 * @property {string} Inventory.name The name of the item.
 * @property {number} Inventory.quantity The quantity of the item.
 */

/**
 * Updates the current inventory based on the new inventory.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<Inventory>} newInv A shipment of new inventory.
 *    An array of inventory objects.
 * @param {Array<Inventory>} currInv
 * @return The currInv after being updated.
 */
function updateInventory(newInv, currInv) {
    if (newInv.length <= 0) {
        // console.log(newInv.length)
        return currInv
    }
    else if (currInv.length <= 0) {
        // console.log(currInv.length)
        return newInv
    }
    else {
        // console.log('entering final else')
        hashy_map = {}
        for (let i = 0; i < currInv.length; i++) {
            // console.log('entering for')
            // console.log(hashy_map[currInv[i]['name']])
            if (hashy_map[currInv[i]['name']]) {
                // console.log('entering if')
                hashy_map[currInv[i]['name']].quantity += currInv[i].quantity
            }
            else {
                hashy_map[currInv[i]['name']] = currInv[i]
            }
            // console.log(hashy_map)
        }
        for (let j = 0; j < newInv.length; j++) {
            if (hashy_map[newInv[j]['name']]) {
                // console.log('entering if')
                hashy_map[newInv[j]['name']].quantity += newInv[j].quantity
            }
            else {
                hashy_map[newInv[j]['name']] = newInv[j]
            }
        }

        return hashy_map
    }
}



console.log(updateInventory(newInv1, currInv1))
console.log(updateInventory(newInv2, currInv2))
console.log(updateInventory(newInv3, currInv3))