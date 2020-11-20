import item from './item.js';

const items = []
const hideCheckedItems = false
  
const findById = function (id){
 return this.items.find(item=> item.id === id)
}

const addItem = function(name) {
    try{
        console.log('tried to run')
        item.validateName(name);
        let thing = item.create(name);
        this.items.push(thing);
        
      } catch (error) {
        console.log(`Cannot add item: ${error.message}`)
      }
}

const findAndToggleChecked = function (id) {
    const foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
  };

 const findAndUpdateName = function (id, newName){
     try {
        
        let fetchedItem = this.findById(id);
        
        fetchedItem.name = newName;
     } catch (error){
        console.log(`Cannot update name: ${error.message}`);
     }
 }
 const findAndDelete = function(id){
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1)
    }
    
const  toggleCheckedFilter = function(){
    console.log('toggled!')
        this.hideCheckedItems = !this.hideCheckedItems;
    }
    
export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};

