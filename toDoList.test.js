import {expect, test} from "vitest"
import {addNewList} from './addNewList'
test('addNewList', () => {
    var arrayList = []
    var list = {
        "name":'nameList',
        "tasks": [
            {"label":"",
             "done":""}
        ]
    }
    var list2 = {
        "name": "",
        "tasks": [
            {"label":"",
             "done":""}
        ]
    }

    arrayList.push(list)
    var newListName = "newList2"

    console.log(arrayList);
    const modifiedListlength = addNewList(arrayList, newListName).length;
    expect(modifiedListlength).toBe(2);
})

test('add new Task', ()=> {

    var list = {
        "name": 'nameList',
        "tasks": [
            {
                "label": "fermer les fenetres",
                "done": false
            }
        ]
    }

    var newTask = {
        "label" : "changer les draps",
         "done" : false
    }

    list.tasks.push(newTask)
    console.log(list)

    expect(list.tasks).toContain(newTask);
})

test('markAsDone', ()=> {
     var list= {
         "name" : "home list"  ,
         "tasks": [{
             "label": "fermer la porte",
             "done": false
         }]
     }
     var newDone = true
     if (list.tasks.done == false){

   
     }

})