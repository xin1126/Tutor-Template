import { createSlice } from '@reduxjs/toolkit'

interface Course {
  teacherName: string
}

const initialState: Course = {
  teacherName: '',
}

const course = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setTeacherName: (state, { payload }: { payload: string }) => {
      state.teacherName = payload
    },
  },
})

export const { setTeacherName } = course.actions
export default course.reducer
