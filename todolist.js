#! /usr/bin/env node 
import inquirer from "inquirer";
let todos = []; //it is a blank array
async function createtodo(todo) {
    do {
        let ans = await inquirer.prompt({
            name: "select",
            type: "list", //choices ati hain list say
            message: "Select an operation",
            choices: ["Add", "Update", "Delete", "View", "Exit"],
        });
        if (ans.select == "Add") {
            let addtodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list: ",
            });
            todo.push(addtodo.todo);
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
            //todo
        }
        if (ans.select == "Update") {
            let updatetodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Update items in the list: ",
                choices: todos.map(item => item)
            });
            // pehle add kary ga us k bad ja k replace kary ga
            let addtodo = await inquirer.prompt({
                name: "todo",
                type: "input",
                message: "Add items in the list: ",
            });
            // replace kar k new name ko add karna hai//// ye filter k thru hoga
            let newtodo = todos.filter(val => val != updatetodo.todo); //update wala name ho but add wala name na ho
            todos = [...newtodo, addtodo.todo]; //.. dots used to add multiple arrays 
            console.log(todos);
        }
        if (ans.select == "View") {
            console.log("**************TO DO LIST**********************");
            console.log(todos);
            console.log("**********************************************");
        }
        if (ans.select == "Delete") {
            let deletetodo = await inquirer.prompt({
                name: "todo",
                type: "list",
                message: "Update items in the list: ",
                choices: todos.map(item => item)
            });
            let newtodo = todos.filter(val => val != deletetodo.todo); //update wala name ho but add wala name na ho
            todos = [...newtodo]; //.. dots used to add multiple arrays 
            console.log(todos);
        }
        if (ans.select === "Exit") {
            console.log("Thank you for using my application. Below is your TODO list: ");
            console.log(todos);
            break;
        }
    } while (true);
}
// to call function
createtodo(todos);
