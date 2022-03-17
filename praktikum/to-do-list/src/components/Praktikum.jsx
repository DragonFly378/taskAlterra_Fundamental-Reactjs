import Button from "./Button";
import { useState } from "react";

const Praktikum = () => {
  const [tmp, setTmp] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Membuat Komponen",
      completed: true,
    },
    {
      id: 2,
      title: "Unit Testing",
      completed: false,
    },
    {
      id: 3,
      title: "Setup Development Environment",
      completed: true,
    },
    {
      id: 4,
      title: "Deploy ke server",
      completed: false,
    },
  ]);
  const checkBool = (obj, tmp, setTmp) => {
    if (tmp) {
      obj.completed = false;
      setTmp(obj.completed);
    } else {
      obj.completed = true;
      setTmp(obj.completed);
    }
  };

  //   console.log(cancelTask(tasks));

  return (
    <div className="body-section">
      <div className="container">
        {tasks.map((task, index) => {
          return (
            <div className="row" key={index}>
              <div className={`konten ${task.completed ? "completed" : ""}`}>
                {task.title}
              </div>
              <div className="action">
                <Button
                  color={task.completed ? "red" : "green"}
                  text={task.completed ? "Cancel" : "Selesai"}
                  onClick={() => checkBool(task, tmp, setTmp)}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Praktikum;
