import { createSlice } from '@reduxjs/toolkit'

interface Customized {
  time: string
  price: string
}
interface Course {
  teacherName: string
  customized: Customized
}

const initialState: Course = {
  teacherName: '',
  customized: {} as Customized,
}

const course = createSlice({
  name: 'course',
  initialState,
  reducers: {
    setTeacherName: (state, { payload }: { payload: string }) => {
      state.teacherName = payload
    },
    setCustomized: (state, { payload }: { payload: Customized }) => {
      state.customized = payload
    },
  },
})

export const { setTeacherName, setCustomized } = course.actions
export default course.reducer
