/* 
  * Takes an object containing arrays of objects and places all the nested objects into a new one-dim array that only contains id & type.
  * Bonus: Write a 2nd solution focusing on functional programming using built in methods.
*/

const object1 = {
    closedCreditMemos: [
      { id: 106, type: "credited" },
      { id: 108, type: "credited" },
    ],
  
    closedDeliveryOrders: [
      { id: 110, type: "delivered" },
      { id: 115, type: "delivered" },
    ],
  
    closedPickupOrders: [
      { id: 112, type: "pickup" },
      { id: 117, type: "pickup" },
    ],
  
    openCreditMemos: [],
  
    openDeliveryOrders: [
      {
        id: 123,
        type: "delivery",
        gateCode: "#2552",
      },
      {
        id: 153,
        type: "delivery",
        instructions: "Place in secure delivery box.",
      },
    ],
  
    openPickupOrders: [
      {
        id: 123,
        type: "pickup",
      },
    ],
  
    returnPickupOrders: [],
  };
  
  const expected1 = [
    { id: 106, type: "credited" },
    { id: 108, type: "credited" },
    { id: 110, type: "delivered" },
    { id: 115, type: "delivered" },
    { id: 112, type: "pickup" },
    { id: 117, type: "pickup" },
    { id: 123, type: "delivery" },
    { id: 153, type: "delivery" },
    { id: 123, type: "pickup" },
  ];
  
  /**
   * Takes an object containing arrays of objects and places all the nested
   * objects into a new one-dim array.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Object} o Containing arrays of objects.
   * @returns {Object[]} An array of objects.
   */
  function flattenObjectOfArrays(orders) {
    const output = []
    for (const k in orders) {
      let arr = orders[k]
      for (let i = 0; i < arr.length; i++) {
        let obj = arr[i]
        output.push({id: obj['id'], type: obj['type']})
      }
    }
    return output
  }
  
  // console.log(flattenObjectOfArrays(object1))
  
  /**
   * Takes an object containing arrays of objects and places all the nested
   * objects into a new one-dim array.
   * - Time: O(n + (n * m) + (n * m)) -> O(n + 2(n * m)) -> O(n + (n * m)).
   *    n = num of keys on object, m = longest length of.
   *    The first n is from Object.values looping over all keys to make an array.
   *    Then n * m b/c flat loops over a 2d array to flatten it,
   *    then n * m again b/c .map has to loop over the n * m amount of items that
   *    are now in a flattened array.
   *    nested array.
   * - Space: O(n * m).
   * @param {Object} o Containing arrays of objects.
   * @returns {Object[]} An array of objects.
   */
  
  
  function functionalFlattenObjectOfArrays(orders) {
    return Object.values(orders).map((val) => {val})
  }


  console.log(functionalFlattenObjectOfArrays(object1))
  
  
  /*****************************************************************************/