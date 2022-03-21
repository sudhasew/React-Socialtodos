import axios from "axios";
import { useEffect, useState } from "react";
import { GetAllSocialtodo } from "../services/api";

export function SocialTodoList() {
  const [socialtoDolist, setSocialToDoList] = useState<any[]>([]);
  useEffect(() => {
    GetAllSocialtodo().then((data: any) => {
      setSocialToDoList(data);
    });
  }, []);

  function deleteSocialTodo(id: number) {
    console.log("deleting id", id);
    axios
      .delete("http://localhost:3004/socialtodos-todo/" + id)
      .then((res) => console.log(res));
  }

  return (
    <div>
      <ul className="toDoul">
        {socialtoDolist.map((toDo) => (
          <li className="toDoli" key={toDo.id}>
            <h2>
              Id: <span> {toDo.id} </span>
            </h2>
            <h2>
              Title: <span> {toDo.title} </span>
            </h2>
            <h2>
              Description:
              <span> {toDo.description} </span>
            </h2>
            <h2>
              Due Date: <span> {toDo.due_date} </span>
            </h2>
            <h2>
              Copmleted:
              <span> {toDo.completed.toString()} </span>
            </h2>
            <h2>
              User Id:
              <span> {toDo.user_id} </span>
            </h2>
            <h2>
              Delete Socialtodo Post:
              <span>
                <button
                  className="delete"
                  onClick={() => deleteSocialTodo(toDo.id)}
                >
                  Delete
                </button>
              </span>
            </h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
