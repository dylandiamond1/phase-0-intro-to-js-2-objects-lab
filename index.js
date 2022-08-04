const employee = {
    name: "sam",
    streetAddress: "12 brodway",
}

function updateEmployeeWithKeyAndValue(employee, name, value1) {
    const newObj = {...employee}

    newObj[name] = value1

    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value1) {
    employee[name] = value1
    
     return employee;

}
function deleteFromEmployeeByKey(employee, name) {
    const newObj = {...employee}

    delete newObj[name]

    return newObj
}
function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee[name]

    return employee
}