let people = [
    { name : 'Alice', age : 21 },
    { name : 'Alice', age : 24 },
    { name : 'Max', age : 21 },
    { name : 'June', age : 23 },
    { name : 'July', age : 24},
    ];
    function groupBy(objectArray, property) {
        return objectArray.reduce((acc, obj) => {
          const key = obj[property];
          const curGroup = acc[key] ?? [];
      
          return { ...acc, [key]: [...curGroup, obj] };
        }, {});
      }
      
      const groupedPeople = groupBy(people, "age");
      console.log(groupedPeople);