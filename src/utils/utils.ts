
function calcPosition(value: number, height: number) {
   let result;
   if (value === 0) result = 0;
   if (value > 0) result = ((value / height) * 100);

   return result;
}

function setNextValue(value: number) {
   let result;
   if (value > 9) {
      result = value - 10;
   } else if (value < 0) {
      result = 10 + value;
   } else {
      result = value;
   }

   return result;
}

function setInput3(value: number) {
   return {
      next: setNextValue(value + 1),
      current: value,
      prev: setNextValue(value - 1),
   }
}

export function convertObjToNumber(obj: { input1: number, input2: number, input3: number, position: number }, height: number): number {
   let result = 0;
   result += obj.input1 * 100;
   result += obj.input2 * 10;
   result += obj.input3;
   result += parseInt((obj.position * height / 100).toFixed(0)) / 100;
   return result;
}

export function setInputData(value: number, height: number) {
   if (value > 999 || value < 0) {
      alert("Value must be between 0 and 999");
      throw new Error("Value must be between 0 and 999");
   }
   let temp = value.toFixed(2);
   let positionValue = (parseFloat(temp) * 100) % 100;

   return {
      input1: parseInt(temp.charAt(0)),
      input2: parseInt(temp.charAt(1)),
      input3: setInput3(parseInt(temp.charAt(2))),
      position: calcPosition(positionValue, height)
   }
}

export function createNumber(value: number, action: number, delta = 0.05, min = 100.00, max = 109.99): {
   newNumber: number,
   newAction: number
} {
   let result = 0;
   if (action > 0 && value + delta < max) {
      result = Math.round((value + delta) * 100) / 100;
   } else if (action > 0 && value + delta >= max) {
      action = -1;
      result = Math.round((value - delta) * 100) / 100;
   } else if (action < 0 && value - delta > min) {
      result = Math.round((value - delta) * 100) / 100;
   } else if (action < 0 && value - delta <= min) {
      action = 1;
      result = Math.round((value + delta) * 100) / 100;
   }
   return { newNumber: result, newAction: action };
}

export function prepareObjToConvert(input1: number, input2: number, input3: number, position: number) {
   return {
      input1: input1,
      input2: input2,
      input3: input3,
      position: position,
   };
}
