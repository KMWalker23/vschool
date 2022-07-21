var employees = []

function Employee (name, jobTitle, salary, statusType = "Full_Time") {
    this.name = name
    this.jobTitle = jobTitle
    this.salary = salary
    this.statusType = statusType
    this.printEmployeeForm = name + " works as a " + jobTitle
   /// this.printEmployeeForm = ()=> {
        return this.name + " works as a " + this.jobTitle 
  //  }
}

//Instantiate three employees
//Override the status attribute of one of them to either "Part Time" or "Contract"

var newEmployee1 = new Employee("John", "Professor", "$75,000", "Full_Time")
console.log(newEmployee1)

var newEmployee2 = new Employee("Mary", "Attorney", "$95,000", "Full_Time")
 console.log(newEmployee2)

var newEmployee3 = new Employee("Peter", "Researcher", "$65,000", "Contract")
newEmployee3.statusType = "Contract"
console.log(newEmployee3)

employees.push(newEmployee1, newEmployee2, newEmployee3)


//console.log(new Employee)
