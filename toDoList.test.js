import {expect, test} from "vitest"
import {
    addNewList,
    addNewTask,
    deleteAList,
    markOneTaskAsDone,
    markOneTaskAsUndone,
    markAllAsDone,
    markAllAsUndone,
    deleteAllLists,
    deleteAllTasks,
    deleteATask
} from './toDoList'

//test 1 : add new list
test('addNewList', () => {
    const arrayLists = []
    let newList = {
        "name":'nameList',
        tasks: [
            {"label":"",
             "done":""}
        ]
    }

    addNewList(arrayLists, newList);
    expect(arrayLists).toContain(newList);
})
//test 2 : add new task
test('add new Task', ()=> {

    let list = {
        "name": 'nameList',
        "tasks": [
            {
                label: "fermer les fenetres",
                done: false
            }
        ]
    }

    let newTask = {
        "label" : "changer les draps",
         "done" : false
    }

    addNewTask(list, newTask);
    expect(list.tasks).toContain(newTask);
})

//test 3 : mark one task as Done
test('markAsDone: defined', () => {
    let list = {
        "name": "home list",
        tasks: [{
            "label": "fermer la porte",
            "done": true
        },
        {
                "label": "nettoyer la cuisine",
                "done": false
        }]
    }

    const indexOfTaskToMarkAsDone = 0;



    markOneTaskAsDone(list, indexOfTaskToMarkAsDone);
        expect(list.tasks[indexOfTaskToMarkAsDone].done).toEqual(true)

})
test('markAsDone: undefined', () => {
    let list = {
        "name": "home list",
        tasks: [{
            "label": "fermer la porte",
            "done": false
        },
            {
                "label": "nettoyer la cuisine",
                "done": false
            }]
    }

    const indexOfTaskToMarkAsDone = 6;

    markOneTaskAsDone(list, indexOfTaskToMarkAsDone);
    expect(list.tasks[indexOfTaskToMarkAsDone]).toBeUndefined()
})

//test 4 : mark one task as undone

test('mark as undone', () => {
    let list = {
        "name": "home list",
        tasks: [{
            "label": "fermer la porte",
            "done": true
        },
            {
                "label": "nettoyer la cuisine",
                "done": true
            }]
    }
    const indexOfTaskToMarkAsUndone = 1;

    markOneTaskAsUndone(list,indexOfTaskToMarkAsUndone);
    expect(list.tasks[indexOfTaskToMarkAsUndone].done).toEqual(false);

})

test('mark as undone undefined', ()=>{
    let list = {
        "name": "home list",
        tasks: [{
            "label": "fermer la porte",
            "done": false
        },
            {
                "label": "nettoyer la cuisine",
                "done": false
            }]
    }
    const indexOfTaskToMarkAsUndone = 6;
    markOneTaskAsUndone(list,indexOfTaskToMarkAsUndone)
    expect(list.tasks[indexOfTaskToMarkAsUndone]).toBeUndefined()
})

//test 5 : mark all tasks as done

test('mark all as done', () => {
    let list = {
        "name": "home list",
        tasks: [{
            "label": "fermer la porte",
            "done": false
        },
        {
                "label": "nettoyer la cuisine",
                "done": false
        }]
    }

    markAllAsDone(list)
    expect(list.tasks.every(task => task.done)).toBe(true)

    // const allTaskDone = list.tasks.every(task => task.done === true)
    // expect(allTaskDone).toBe(true)

})



//test 6 : mark all tasks as undone

test('mark all tasks as undone', () => {
    let list = {
        "name": "home list",
        tasks: [{
            "label": "fermer la porte",
            "done": true
        },
        {
                "label": "nettoyer la cuisine",
                "done": true
        }]
    }

    markAllAsUndone(list)

    const allTasksUndone = list.tasks.every(task => task.done === false)
    expect(allTasksUndone).toEqual(true)
})

//test 7 : delete a list

test('delete a list', () => {
    let arrayList = [
        {
            "name": "home list",
            tasks: [{
                "label": "fermer la porte",
                "done": true
            },
            {
                    "label": "nettoyer la cuisine",
                    "done": true
            }]
        },
        {
            "name": "car list",
            tasks: [{
                "label": "fermer la porte",
                "done": true
            },
            {
                    "label": "nettoyer la cuisine",
                    "done": true
            }]
        }
    ]

    const indexOfListToDelete = 0;

    deleteAList(arrayList, indexOfListToDelete)
    expect(arrayList).not.toContain(arrayList[indexOfListToDelete]);
})

//test 8 : delete all the lists
test('delete all lists',() => {

    let arrayList = [
        {
            "name": "home list",
            tasks: [{
                "label": "fermer la porte",
                "done": true
            },
            {
                    "label": "nettoyer la cuisine",
                    "done": true
            }]
        },
        {
            "name": "car list",
            tasks: [{
                "label": "fermer la porte",
                "done": true
            },
                {
                    "label": "nettoyer la cuisine",
                    "done": true
                }]
        }
    ]
    deleteAllLists(arrayList)
    expect(arrayList.length).toEqual(0)
})

// test 9: delete a task

test('delete a task', () => {
    let arrayList = [
        {
            "name": "home list",
            tasks: [{
                "label": "fermer la porte",
                "done": true
            },
                {
                    "label": "nettoyer la cuisine",
                    "done": true
                }]
        },
        {
            "name": "car list",
            tasks: [{
                "label": "fermer la porte",
                "done": true
            },
                {
                    "label": "nettoyer la cuisine",
                    "done": true
                }]
        }
    ]
    const indexOfList = 0
    const indexOfTaskToDelete = 1
    deleteATask(arrayList, indexOfList, indexOfTaskToDelete)
    expect(arrayList[indexOfList].tasks[indexOfTaskToDelete]).toBeUndefined()
})

// test 10: delete all tasks
test('deleteAllTasks', () => {
    let arrayList = [
        {
            "name": "home list",
            tasks: [{
                "label": "fermer la porte",
                "done": true
            },
                {
                    "label": "nettoyer la cuisine",
                    "done": true
                }]
        },
        {
            "name": "car list",
            tasks: [{
                "label": "fermer la porte",
                "done": true
            },
                {
                    "label": "nettoyer la cuisine",
                    "done": true
                }]
        }
    ]

    const indexOfList = 1;
    deleteAllTasks(arrayList, indexOfList)
    expect(arrayList[indexOfList].tasks.length).toEqual(0)
})



