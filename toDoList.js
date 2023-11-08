
export function addNewList(arraylists, newList){
    arraylists.push(newList)
}

export function addNewTask(list, newTask){
    list.tasks.push(newTask)
}

export function markOneTaskAsDone(list, indexOfTaskToMarkAsDone){
    if (list.tasks[indexOfTaskToMarkAsDone] !== undefined){
        if (list.tasks[indexOfTaskToMarkAsDone].done === false) {
            list.tasks[indexOfTaskToMarkAsDone].done = true;
        }
    }
}

export function markOneTaskAsUndone(list,indexOfTaskToMarkAsUndone){
    if (list.tasks[indexOfTaskToMarkAsUndone] !== undefined){
        if (list.tasks[indexOfTaskToMarkAsUndone].done === true){
            list.tasks[indexOfTaskToMarkAsUndone].done = false
        }
    }
}

export function markAllAsDone(list){
    if (list.tasks.length > 0){
        list.tasks.forEach(task =>{
            if (task.done === false){
                task.done = true
            }
        })
    }
}

export function markAllAsUndone(list){
    if (list.tasks.length > 0){
        list.tasks.forEach(task =>{
            if (task.done === true){
                task.done = false
            }
        })
    }
}

export function deleteAList(arrayList, indexOfListToDelete){
    if (arrayList[indexOfListToDelete] !== null){
       delete arrayList[indexOfListToDelete]
    }
}

export function deleteAllLists(arrayList){
    if (arrayList.length > 0){
        arrayList.splice(0, arrayList.length)
    }
}

export function deleteATask(arrayList, indexOfList, indexOfTaskToDelete){
    if (arrayList[indexOfList].tasks[indexOfTaskToDelete] !== undefined){
        delete arrayList[indexOfList].tasks[indexOfTaskToDelete]
    }
}

export function deleteAllTasks(arrayList, indexOfList){
    if (arrayList[indexOfList].tasks.length > 0){
        arrayList[indexOfList].tasks.length = 0
    }
}
