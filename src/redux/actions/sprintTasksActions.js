import { createAction } from '@reduxjs/toolkit';
import constants from '../constants/tasksConstants';
export const addTask = createAction(constants.ADD_TASK);
export const getTasks = createAction(constants.GET_TASKS);
export const deleteTask = createAction(constants.DELETE_TASK);
export const changeTask = createAction(constants.CHANGE_TASK);
export const filterTasksAction = createAction(constants.FILTER_TASKS);
