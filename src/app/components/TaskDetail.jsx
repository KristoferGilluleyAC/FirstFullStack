import React from "react";
import { connect } from "react-redux";

const TaskDetail = ({
    id,
    comments,
    task,
    isComplete
})=>(
    <div>Task Detail</div>
);

const maptStateToProps = state=>state;

export const ConnectTaskDetail = connect (maptStateToProps)(TaskDetail);