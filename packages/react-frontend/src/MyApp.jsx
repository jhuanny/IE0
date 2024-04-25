import Table from "./Table";
import Form from "./Form";
import React, { useState, useEffect } from 'react';

function MyApp() {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
      fetch("http://localhost:8000/users")
        .then(res => res.json())
        .then(json => setCharacters(json["users_list"]))
        .catch(error => 
          console.error('Error fetching users:', error
          ));
    }, []);

    function removeOneCharacter(index) {
        const person = characters[index];
        deleteUser(person)
            .then(() => {
                const updated = characters.filter((_, i) => i !== index);
                setCharacters(updated);
            })
            .catch(error => console.error('Error deleting user:', error));
    }

    function deleteUser(person) {
      return fetch(`http://localhost:8000/users/${person.id}`, {
          method: "DELETE",
          headers: {"Content-Type": "application/json"},
      }).then(response => {
          if (!response.ok) {
              console.error("User Deletion Failed");
              throw new Error('Deletion failed');
          }
      });
    }

    function addUser(person) {
      postUser(person)
        .then(user => setCharacters([...characters, user]))
        .catch(error => console.error('Add user failed:', error));
    }

    function postUser(person) {
        return fetch("http://localhost:8000/users", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(person),
        }).then(response => {
            if (!response.ok) {
                console.error("User Insertion Failed");
                throw new Error('Insertion failed');
            }
            return response.json();
        });
    }

    return (
        <div className="container">
          <Table
            characterData={characters}
            removeCharacter={removeOneCharacter}
          />
          <Form handleSubmit={addUser} />
        </div>
    );
}

export default MyApp;
