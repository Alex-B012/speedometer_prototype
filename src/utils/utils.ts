
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