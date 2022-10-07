export default {
    props: ["onClick"],
    template: `<div @click="onClick"><slot/></div>` 
}

