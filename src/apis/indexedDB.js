// IndexedDB exported APIs
    
const openProductDatabase = () => {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open('products', 1);

        request.onupgradeneeded = (event) => {
            const db = event.target.result;
            if (!db.objectStoreNames.contains('cartbox')) {
                // Keep 'id' as primary key and add an index on 'name'
                const objectStore = db.createObjectStore('cartbox', { keyPath: 'id', autoIncrement: true });
                objectStore.createIndex("name", "name", { unique: false });
            }
        };

        request.onsuccess = (event) => {
            console.log("Successfully opened database");
            resolve(event.target.result);
        };

        request.onerror = (event) => {
            reject(event.target.error);
        };
    });
};

//Database for subscribers
const openMessageDatabase = () => {
    return new Promise((resolve, reject) => {
        const openRequest = indexedDB.open('messagesDB', 1);

        openRequest.onupgradeneeded = (event) => {
            const db = event.target.result
            if (!db.objectStoreNames.contains('outbox')){
                db.createObjectStore('outbox', {keyPath: 'id', autoIncrement: true});
            }
        }

        openRequest.onsuccess = (event) => {
            console.log("Message Database successfully created", event.target.result);
            resolve(event.target.result)
        }

        openRequest.onerror = (event) => {
            console.log("Error creating Database")
            reject(event.target.error)
        }
    })
}

const addMessage = async (firstname, lastname, email, password, agree, subscribe) => {
    const db = await openMessageDatabase();
  
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('outbox', 'readwrite');
      const store = transaction.objectStore('outbox');
      const request = store.add({ firstname, lastname, email, password, agree, subscribe });
  
      request.onsuccess = () => {
        console.log('Message added to outbox');
        resolve("Message added to outbox");
      };
  
      request.onerror = (event) => {
        console.error('Failed to add message:', event.target.error);
        reject(event.target.error);
      };
    });
  };

  const addSubscriber = async (firstname, lastname, email, password, agree, subscribe) => {
    const db = await openMessageDatabase();
  
    return new Promise((resolve, reject) => {
      const transaction = db.transaction('outbox', 'readwrite');
      const store = transaction.objectStore('outbox');
      const request = store.add({ firstname, lastname, email, password, agree, subscribe });
  
      request.onsuccess = () => {
        console.log('Message added to outbox');
        resolve("Message added to outbox");
      };
  
      request.onerror = (event) => {
        console.error('Failed to add message:', event.target.error);
        reject(event.target.error);
      };
    });
  };


const addToCart = async (name, price, pic, quantity, supplier) => {
const db = await openProductDatabase();

return new Promise((resolve, reject) => {
    const transaction = db.transaction('cartbox', 'readwrite');
    const store = transaction.objectStore('cartbox');

    // Check if the item already exists in the cart
    const index = store.index("name");
    const getRequest = index.get(name);

    getRequest.onsuccess = () => {
        const existingItem = getRequest.result;
        
        if (existingItem) {
            // If the item exists, update its quantity or price
            
            existingItem.price = `$${parseInt(existingItem.price.replace("$", ""), 10) + parseInt(price.replace("$", ""), 10)}`; // Example: update price by adding new price
            existingItem.initialPrice = price//parseInt(price.replace("£", ""), 10)
            const updateRequest = store.put(existingItem);

            updateRequest.onsuccess = () => {
                console.log(`Updated ${name} in cart.`);
                resolve(`Updated ${name} in cart.`);
            };

            updateRequest.onerror = (event) => {
                console.error(`Failed to update ${name}:`, event.target.error);
                reject(event.target.error);
            };
        } else {
            // If item doesn't exist, add a new entry
            const addRequest = store.add({ name, price, pic, quantity, supplier });

            addRequest.onsuccess = () => {
                console.log(`Added ${name} to cart.`);
                resolve(`Added ${name} to cart.`);
            };

            addRequest.onerror = (event) => {
                console.error(`Failed to add ${name}:`, event.target.error);
                reject(event.target.error);
            };
        }
    };

    getRequest.onerror = (event) => {
        console.error('Failed to fetch item:', event.target.error);
        reject(event.target.error);
    };
});
};

const updateCart = async (name, price, pic, quantity, supplier) => {
const db = await openProductDatabase();

return new Promise((resolve, reject) => {
    const transaction = db.transaction('cartbox', 'readwrite');
    const store = transaction.objectStore('cartbox');

    // Check if the item already exists in the cart
    const index = store.index("name");
    const getRequest = index.get(name);

    getRequest.onsuccess = () => {
        const existingItem = getRequest.result;
        
        if (existingItem) {
            // If the item exists, update its quantity or price
            
            existingItem.quantity = quantity//`£${parseInt(existingItem.price.replace("£", ""), 10) + parseInt(price.replace("£", ""), 10)}`; // Example: update price by adding new price
            // existingItem.initialPrice = price//parseInt(price.replace("£", ""), 10)
            const updateRequest = store.put(existingItem);

            updateRequest.onsuccess = () => {
                console.log(`Updated ${name} in cart.`);
                resolve(`Updated ${name} in cart. Quantity is ${quantity}`);
            };

            updateRequest.onerror = (event) => {
                console.error(`Failed to update ${name}:`, event.target.error);
                reject(event.target.error);
            };
        } else {
            // If item doesn't exist, add a new entry
            const addRequest = store.add({ name, price, pic, quantity, supplier });

            addRequest.onsuccess = () => {
                console.log(`Added ${name} to cart.`);
                resolve(`Added ${name} to cart.`);
            };

            addRequest.onerror = (event) => {
                console.error(`Failed to add ${name}:`, event.target.error);
                reject(event.target.error);
            };
        }
    };

    getRequest.onerror = (event) => {
        console.error('Failed to fetch item:', event.target.error);
        reject(event.target.error);
    };
});
};

const getCartItems = async() => {
const db = await openProductDatabase();

return new Promise((resolve, reject) => {
    const transaction = db.transaction("cartbox", "readwrite");
    const store = transaction.objectStore("cartbox");

    const request = store.getAll();

    request.onsuccess = (event) => {
        resolve({message: "Successfully retrieved items", items:event.target.result})
        console.log("Successfully retrieved")
    }

    request.onerror = (event) => {
        reject(event.target.error)
    }
})

}

/**
* Function to remove an item from IndexedDB
* @param {number} id - ID of the item to delete
*/
const deleteFromDatabase = async (id) => {
const db = await openProductDatabase();
return new Promise((resolve, reject) => {
    const transaction = db.transaction("cartbox", "readwrite");
    const store = transaction.objectStore("cartbox");

    const request = store.delete(id);

    request.onsuccess = () => {
        console.log(`Item with ID ${id} deleted successfully from IndexedDB`);
        resolve(`Item with ID ${id} successfully removed from Cart`);
    };

    request.onerror = (event) => {
        console.error("Error deleting item from IndexedDB:", event.target.error);
        reject(event.target.error);
    };
});
};


export { addSubscriber, updateCart, openProductDatabase, openMessageDatabase, addMessage, addToCart, getCartItems, deleteFromDatabase }