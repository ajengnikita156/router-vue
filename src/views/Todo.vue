<template>
    <div class="todo-list">
        <h2>Daftar Tugas</h2>
        <div class="add-todo">
            <input type="text" v-model="title" @keypress.enter="save" />
            <p>Total Notes: {{ totalNotes }}</p>
        </div>
        <ul>
            <li v-for="(note, index) in notes" :key="index">
                {{ note }}
                <button @click="deleteNote(index)">Hapus</button>
            </li>
        </ul>
    </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref } from "vue";
export default {
    setup() {
        const store = useStore();
        const totalNotes = computed(() => store.getters.totalNotes);
        const title = ref("");
        function save() {
            store.dispatch("saveNote", title.value);
            title.value = "";
        }
        function deleteNote(index) {
            store.dispatch("deleteNote", index);
        }

        const notes = computed(() => store.state.notes);
        return {
            notes,
            totalNotes,
            title,
            save,
            deleteNote,
        };
    },
};
</script>

<style scoped>
.todo-list {
    text-align: center;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    margin: 10px 0;
    cursor: pointer;
}

.completed {
    text-decoration: line-through;
}

.add-todo input {
    padding: 5px;
    margin-right: 10px;
}

.add-todo button {
    padding: 5px 10px;
    cursor: pointer;
}
</style>