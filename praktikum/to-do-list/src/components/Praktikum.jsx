import Button from "./Button";
import { useState } from "react";
import Form from "./Form";

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
      completed: true,
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
            <Form
              key={index}
              title={task.title}
              classBtn={`konten ${task.completed ? "completed" : ""}`}
              onClick={() => checkBool(task, tmp, setTmp)}
              textCompleted={task.completed ? "Cancel" : "Selesai"}
              colorCompleted={task.completed ? "red" : "green"}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Praktikum;
