
# Cahier de Tests pour l'Application ToDo-List


***Cas de test 1 : Ajouter une liste***
* conditions préalables : un tableau de listes vide ou qui contient deja des elements.
* une fonction "addNewList" qui permet d'ajouter un label et saisir le nom d'une nouvelle liste
* Résultat attendu: La liste est ajoutée dans le tableau

***Cas de test 2 : Ajouter une tache***  

* conditions préalables : un tableau de taches vide ou qui contient deja des elements.
* une fonction "addNewTask" pour faire entrer la tache dans le label
* Résultat attendu: La tache est ajoutée dans le tableau

***Cas de test 3 : Marquer une tâche comme Done***
* conditions préalables : une variable done qui vaut false
* une fonction "markAsDone" qui modifie le statut Done à true d'un seul element de la liste.
* Résultat attendu: done = true

***Cas de test 4 : Marquer une tâche comme undone***
* conditions préalables : une variable done qui vaut true
* une fonction "markAsUndone" qui modifie le statut Done à false d'un seul element de la liste.
* Résultat attendu: done = false

***Cas de test 5 : Marquer toutes les tâches comme Done***

* une fonction "markAllAsDone" qui modifie le statut Done à true de tous les elements de la liste.
* Résultat attendu: all done dans le tableau = true

***Cas de test 6 : Marquer toutes les tâches comme Undone***

* une fonction "markAllAsUndone" qui modifie le statut Done à false de tous les elements de la liste.
* Résultat attendu: all done = false


***Cas de test 7 : Supprimer une liste***

* conditions préalables : la liste exsite déja dans 
* une fonction "deleteList" qui supprime une liste
* Résultat attendu: la liste n'exsiste plus le tablea

***Cas de test 8 : Supprimer toutes les tâches***

* conditions préalables : un tableau qui contient au moins une tache
* une fonction "deleteAllTasks" pour supprimer toutes les tâches
* Résultat attendu: le tableau est vide
* 
