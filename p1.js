// Problem 1 : Flatten the Nested Array Elements

const familyTree = [
    {
    "id": "1R",
    "name" : "Retail",
    "parentId": null,
    "children": [
    {
    "id": "1R-1",
    "name"  : "Supermarket",
    "parentId": "1R"
    },
    {
    "id": "1R-2",
    "name"  : "Wholesale Market",
    "parentId": "1R"
    },
    {
    "id": "1R-3",
    "name" : "Flea market",
    "parentId": "1R"
    },
    {
    "id": "1R-4",
    "name" : "Malls",
    "parentId": "1R"
    }
    ]
    },
    {
    "id": "2H",
    "name"  : "Healthcare",
    
    "parentId": null,
    "children": [
    {
    "id": "2H-1",
    "name"  : "Clinic",
    "parentId": "2H",
    "children": [
    {
    "id": "2H-1C-1",
    "name" : "Dental",
    "parentId": "2H-1"
    },
    {
    "id": "2H-1C-2",
    "name" : "Ortho",
    "parentId": "2H-1"
    }
    ]
    },
    {
    "id": "2H-2",
    "name" : "Hospital",
    "parentId": "2H",
    "children": []
    },
    {
    "id": "2H-3",
    "name"  : "Diagnostic Center",
    "parentId": "2H",
    "children": [
    {
    "id": "2H-3D-1",
    "name"  : "Imaging Lab",
    "parentId": "2H-1"
    },
    {
    "id": "2H-3D-2",
    "name" : "Pathology Lab",
    "parentId": "2H-1"
    }]}]}];

    const getMembers = (members) => {
        let children = [];
      
        return members.map(mem => {
          const m = {...mem}; 
          if (m.children && m.children.length) {
            children = [...children, ...m.children];
          }
          delete m.children; 
          return m;
        }).concat(children.length ? getMembers(children) : children);
      };

      console.log(getMembers(familyTree), "\n")
      