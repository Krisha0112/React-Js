
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtask, delettask } from "../redux/action/KeepAction";
import { useEffect } from "react";
const Keep = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState({
    task: "",
  });
  const [newTaskId, setNewTaskId] = useState(null);
  const [fontcolor, setfontcolor] = useState("#f29900 ");

  const alltask = useSelector((state) => state.keepreducer.task);
  useEffect(() => {
    document.documentElement.style.setProperty("--font-color", fontcolor);
  }, [fontcolor]);

  const inputtask = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  };
  const submittask = (e) => {
    e.preventDefault();
    let obj = {
      id: Math.floor(Math.random() * 100),
      ...task,
    };

    dispatch(addtask(obj));
    setNewTaskId(obj.id);
    setTask({ task: "" });
  };
  const deletid = (id) => {
    dispatch(delettask(id));
  };
  return (
    <>
      <section className="navbar">
        <div className="container nav">
          <div className="row py-4 px-2 " >
            <div className="col d-flex align-items-center ">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAABbUlEQVR4Ae3aAUQEQRQG4OUmwiEAQIQQIAQIAQGCgICQkJAACUAAQkEQAAJEu11cSSldOlWR4hBJp90ozdt53QSgs/e09v70fh4YzPuWmbeYQIMergTGRmapVRc2NJxHva4Hc4UBPsOeWb9pnhWvBcUhRF9eACgMIW5QAJAjAAFyBCBAjgAEyBGAADkCECBHQADkCACAHAEAkJcCFPDnAFEvp1cz7B432SV1du8P7J63mepTfg0bQIdD7OIat4sH0cEgJsA3z5RwVtzbNdtKHx7Avexxp0kbq1gAOhpmUZxlu1vGAaS3CywNHY8AAe6WxYD0choIcDMvBtD5BA6ATkbFZ4D2B8BuobjWef9PW4BzwN9EznJmbJNttR90Ep+NfzfYNh+NrNtHf+YUQKdjfi78WH4NDyAYan5NAXoGFKAABShAAf8NkHQRUP01gMLSRrcAFJYm83hqULaRWaSwdF9g8027Y1Zae5tAA54vA5QFBsesCogAAAAASUVORK5CYII="
                alt=""
              />
              <h3 className="m-0">Google Keep</h3>
            </div>
            <div className="col d-flex align-items-center ">
              <h4>fontcolor-</h4>
              <input
                type="color"
                value={fontcolor}
                onChange={(e) => setfontcolor(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="keep p-5">
        <div className="container">
          <div className="card custom-card ">
            <div className="card-body">
              <h5 style={{ color: fontcolor }} className="card-title ">
                Enter Your Task
              </h5>
              <form onSubmit={submittask}>
                <input
                  type="text"
                  name="task"
                  value={task.task}
                  onChange={inputtask}
                  placeholder="Your task..."
                />
                <button>Add</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="row justify-content-center">
            {alltask?.map((val, index) => {
              return (
                <div className="col-md-4 " key={index}>
                  <div
                    className={`card custom-card  ${
                      newTaskId === val.id ? "flicker-in" : " "
                    }`}
                   
                  >
                    <div className="card-body d-flex justify-content-between align-items-center">
                      <h5 className="card-title" style={{ color: fontcolor }}>
                        {val.task}
                      </h5>
                      <button
                        className="delete-btn"
                        onClick={() => deletid(val.id)}
                      >
                        delet
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Keep;
