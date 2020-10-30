<template>
    <form action="">
        <input type="text" :value="msg" />
        <button type="submit">submit</button>
    </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
    setup(props, { slots, attrs, emit }) {
        console.log(props);
        console.log(slots);
        console.log(attrs);
        console.log(emit);

        const msg = ref('layer msg!');

        const callback = (a: number): void => console.log(a);

        console.log(callback(2));

        return {
            msg,
        };
    },
});
</script>

<style scoped></style>
