function formatTimeStrings(strings = []) {
   if (strings?.length > 1){
      return `${strings[0]} - ${strings[strings.length - 1]}`;
   }
   if (strings?.length) {
      return `${strings[0]} - Till tomorrow`;
   }
   return `None`;
}

describe("should call formatTimeStrings", () => {
   it("should call with numbers array", () => {
      const result = formatTimeStrings([1, 2, 3, 4]);

      expect(result).toBe("1 - 4");
   });

   it("should call with one number", () => {
      
      const result = formatTimeStrings([1]);

      expect(result).toBe("1 - Till tomorrow");
   });

   it("should call without number", () => {
      const result = formatTimeStrings(null);

      expect(result).toBe("None");
   });
});