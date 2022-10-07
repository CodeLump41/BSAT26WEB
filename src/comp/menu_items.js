export default {
    props: ["onClick"],
    template: `<div @click="onClick"><slot></slot></div>` 
}

