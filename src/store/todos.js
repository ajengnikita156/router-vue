import { createStore } from "vuex";

const todosStore = createStore({
  state: {
    title: "Vuex Store",
    notes: [],
  },
  getters: {
    totalNotes(state) {
      return state.notes.length;
    },
  },
  mutations: {
    SAVE_NOTE(state, title) {
      state.notes.push(title);
    },
    DELETE_NOTE(state, index) {
      state.notes.splice(index, 1);
    },
  },
  actions: {
    saveNote({ commit }, title) {
      commit("SAVE_NOTE", title);
    },
    deleteNote({ commit }, index) {
      commit("DELETE_NOTE", index);
    },
  },
});

export default todosStore;