/** @format */

import {FormControl} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import React, {useEffect, useState} from "react";
import {MdEditNote} from "react-icons/md";
import {useDispatch} from "react-redux";
import {useLocation} from "react-router-dom";
import {useTypedSelector} from "../../../../hooks/useTypedSelector";
import {ITask} from "../../../interface/ITask";

interface IEachTaskComponetHeader {
    task: ITask;
    subTaskFlag: boolean;
}

export const EachTaskComponetHeader: React.FC<IEachTaskComponetHeader> = ({
    task,
    subTaskFlag,
}) => {
    const dispatch = useDispatch();

    const certainProject = useLocation();
    const idTask = useTypedSelector((state) => state.idTask);

    const [checkChangeTitleFlag, setCheckChangeTitleFlag] =
        useState<boolean>(false);
    const [titleValue, setTitleValue] = useState<string>(task?.title ?? "");
    useEffect(() => {
        setCheckChangeTitleFlag(titleValue !== task?.title);
    }, [titleValue]);

    const saveChangeTitle = () => {
        subTaskFlag
            ? dispatch({
                  type: "CHANGE_TITLE_SUB_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      taskId: idTask,
                      subTask: task,
                      title: titleValue,
                  },
              })
            : dispatch({
                  type: "CHANGE_TITLE_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      task: task,
                      title: titleValue,
                  },
              });

        setCheckChangeTitleFlag(false);
    };

    // for precedence change
    const [precedence, setPrecedence] = useState(task?.precedence);
    const [colorPrecedence, setColorPrecedence] = useState("");
    useEffect(() => {
        setColorPrecedence(
            precedence === "low"
                ? "#46f7b7"
                : precedence === "medium"
                ? "#F5EB88"
                : "#FFA775"
        );
    }, [precedence]);
    const handleChange = (event: SelectChangeEvent) => {
        setPrecedence(event.target.value as string);
        subTaskFlag
            ? dispatch({
                  type: "PRECEDENCE_SUB_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      taskId: idTask,
                      subTask: task,
                      precedence: event.target.value as string,
                  },
              })
            : dispatch({
                  type: "PRECEDENCE_TASK",
                  payload: {
                      projectId: certainProject.state.id,
                      taskId: idTask,
                      precedence: event.target.value as string,
                  },
              });
    };

    return (
        <header>
            <div className='head'>
                {checkChangeTitleFlag ? (
                    <div className='changeTitle'>
                        <textarea
                            onChange={(e) => setTitleValue(e.target.value)}>
                            {task?.title ?? ""}
                        </textarea>
                        <button
                            className='saveButton'
                            onClick={saveChangeTitle}>
                            save
                        </button>
                    </div>
                ) : (
                    <p>{task?.title ?? ""}</p>
                )}

                <div>
                    <MdEditNote
                        className='changeIcon'
                        onClick={() => {
                            setCheckChangeTitleFlag(!checkChangeTitleFlag);
                        }}
                    />
                </div>
            </div>
            <div className='prior'>
                <FormControl
                    variant='standard'
                    sx={{
                        minWidth: 90,
                    }}
                    size='small'>
                    <Select
                        autoWidth
                        value={precedence}
                        label={precedence + " priority"}
                        onChange={handleChange}
                        disableUnderline
                        sx={{
                            backgroundColor: colorPrecedence,
                            textAlign: "center",
                            borderRadius: "5px",
                        }}>
                        <MenuItem value={"low"}>low</MenuItem>
                        <MenuItem value={"medium"}>medium</MenuItem>
                        <MenuItem value={"high"}>high</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </header>
    );
};
